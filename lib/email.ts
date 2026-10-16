import { InquiryFormData } from "./validation";

export interface EmailDeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
  configured: boolean;
}

export async function sendInquiryEmail(data: InquiryFormData): Promise<EmailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "nilkanthworldexim@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "inquiries@nilkanthworldexim.com";

  // If Resend API key is not configured, remain honest according to Section 11:
  if (!apiKey) {
    console.warn(
      "[NILKANTH WORLD EXIM] Email service unconfigured: RESEND_API_KEY is not set. Inquiry was captured on server."
    );
    return {
      success: false,
      configured: false,
      error: "Email delivery integration is currently awaiting API key configuration on the server. Please contact Nilkanth World Exim directly via WhatsApp or phone (+91 81606 13430) while our server mailer is being activated."
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: `[B2B Inquiry] ${data.inquiryType}: ${data.product} - ${data.companyName || data.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #0A2540; border-bottom: 2px solid #D92525; padding-bottom: 8px;">New Business Inquiry — Nilkanth World Exim</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #555;">Full Name:</td>
                <td style="padding: 8px 0; color: #222;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Company Name:</td>
                <td style="padding: 8px 0; color: #222;">${data.companyName || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Business Email:</td>
                <td style="padding: 8px 0; color: #222;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #222;">${data.phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Country:</td>
                <td style="padding: 8px 0; color: #222;">${data.country || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Product of Interest:</td>
                <td style="padding: 8px 0; color: #0A2540; font-weight: bold;">${data.product}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Inquiry Type:</td>
                <td style="padding: 8px 0; color: #222;">${data.inquiryType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Estimated Quantity:</td>
                <td style="padding: 8px 0; color: #222;">${data.estimatedQuantity || "To be discussed"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Incoterm:</td>
                <td style="padding: 8px 0; color: #222;">${data.incoterm || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Destination Port:</td>
                <td style="padding: 8px 0; color: #222;">${data.destinationPort || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Sample Requested:</td>
                <td style="padding: 8px 0; color: #222;">${data.sampleRequest ? "YES (Official Pre-shipment Sample)" : "No"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Target Timeline:</td>
                <td style="padding: 8px 0; color: #222;">${data.targetTimeline || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Preferred Currency:</td>
                <td style="padding: 8px 0; color: #222;">${data.preferredCurrency || "USD ($)"}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #0A2540; border-radius: 4px;">
              <h4 style="margin: 0 0 10px 0; color: #0A2540;">Message / Requirements:</h4>
              <p style="white-space: pre-wrap; margin: 0; color: #333; line-height: 1.5;">${data.message}</p>
            </div>

            <p style="margin-top: 25px; font-size: 12px; color: #888; text-align: center;">
              Sent via Nilkanth World Exim Web Portal • Surat, Gujarat, India
            </p>
          </div>
        `
      })
    });

    const resJson = await response.json();

    if (!response.ok) {
      console.error("[NILKANTH WORLD EXIM] Resend API error:", resJson);
      return {
        success: false,
        configured: true,
        error: resJson.message || "Failed to dispatch email via provider."
      };
    }

    return {
      success: true,
      configured: true,
      messageId: resJson.id
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown network error during email dispatch.";
    console.error("[NILKANTH WORLD EXIM] Email sending exception:", errorMsg);
    return {
      success: false,
      configured: true,
      error: errorMsg
    };
  }
}
