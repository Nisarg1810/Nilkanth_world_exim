import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
import { sendInquiryEmail } from "@/lib/email";

// Simple in-memory rate limiter per IP: max 5 requests per 10 minutes
const ipRequests = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipRequests.get(ip);
  if (!record) {
    ipRequests.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  if (now - record.firstSeen > RATE_LIMIT_WINDOW_MS) {
    ipRequests.set(ip, { count: 1, firstSeen: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many inquiry attempts from this network. Please wait a few moments or contact us directly via WhatsApp at +91 81606 13430."
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Please review the form for invalid or missing required fields.",
          fieldErrors
        },
        { status: 400 }
      );
    }

    const emailResult = await sendInquiryEmail(parsed.data);

    if (!emailResult.configured) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          error: emailResult.error || "Email delivery credentials are not yet configured on this server.",
          suggestion: "Please configure RESEND_API_KEY in .env.local or reach Nilkanth World Exim directly via WhatsApp: +91 81606 13430."
        },
        { status: 503 }
      );
    }

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          configured: true,
          error: emailResult.error || "Failed to dispatch email inquiry. Please try again or reach out on WhatsApp."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully sent to Nilkanth World Exim. Our export desk will review your requirements and respond shortly.",
      messageId: emailResult.messageId
    });
  } catch (error: unknown) {
    console.error("[API/contact] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your inquiry."
      },
      { status: 500 }
    );
  }
}
