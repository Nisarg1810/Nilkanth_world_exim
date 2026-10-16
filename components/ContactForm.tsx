"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface ContactFormProps {
  initialProduct?: string;
}

const productsList = [
  "Turmeric",
  "Cumin Seeds",
  "Red Chilli",
  "Coriander Seeds",
  "Sesame Seeds",
  "Isabgol",
  "Moringa",
  "Multiple Products",
  "Other"
];

const inquiryTypes = [
  "Product Inquiry",
  "Price Quotation",
  "Bulk Order Inquiry",
  "Export Requirements",
  "Other Business Inquiry"
];

function ContactFormInner({ initialProduct }: ContactFormProps) {
  const searchParams = useSearchParams();
  const queryProduct = searchParams?.get("product") || undefined;
  const activeProduct = queryProduct || initialProduct;

  // Normalize product to match options
  const defaultProduct = productsList.find(
    (p) => p.toLowerCase() === activeProduct?.toLowerCase()
  ) || (activeProduct ? "Other" : "Turmeric");

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    product: defaultProduct,
    estimatedQuantity: "",
    inquiryType: "Price Quotation",
    message: "",
    privacyConsent: false,
  });

  useEffect(() => {
    if (activeProduct) {
      const match = productsList.find(
        (p) => p.toLowerCase() === activeProduct.toLowerCase()
      ) || "Other";
      setFormData((prev) => ({ ...prev, product: match }));
    }
  }, [activeProduct]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error" | "unconfigured";
    message: string;
    details?: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Thank you for reaching out to Nilkanth World Exim.",
          details: result.message || "Your business inquiry has been recorded. Our export desk will review your specifications and contact you shortly.",
        });
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          country: "",
          product: defaultProduct,
          estimatedQuantity: "",
          inquiryType: "Price Quotation",
          message: "",
          privacyConsent: false,
        });
      } else if (response.status === 503) {
        // Honest disclosure when email provider is not yet configured
        setStatus({
          type: "unconfigured",
          message: "Email Server In Configuration Mode",
          details: result.error || "The server email delivery integration (RESEND_API_KEY) is currently awaiting setup in the production environment. In the meantime, please connect directly with our export desk via WhatsApp or phone.",
        });
      } else {
        setStatus({
          type: "error",
          message: "Unable to process inquiry",
          details: result.error || "Please check that all required fields are correctly completed.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network Error",
        details: "A communication error occurred while connecting to the server. Please try again or reach out on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/80 p-4 sm:p-8 lg:p-10">
      <div className="border-b border-gray-100 pb-4 sm:pb-5 mb-5 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-editorial">
          Submit Commercial Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Provide your trade parameters below. Our trade desk coordinates directly with Indian agricultural sources.
        </p>
      </div>

      {/* Success Notification */}
      {status.type === "success" && (
        <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-900 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-semibold text-emerald-800">{status.message}</h4>
            <p className="mt-1 text-emerald-700 leading-relaxed">{status.details}</p>
          </div>
        </div>
      )}

      {/* Unconfigured / Server Setup Disclosure Notification */}
      {status.type === "unconfigured" && (
        <div className="mb-6 p-5 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-3 text-amber-900 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-semibold text-amber-800">{status.message}</h4>
            <p className="mt-1 text-amber-700 leading-relaxed text-xs sm:text-sm">{status.details}</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                  formData.product
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-semibold shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open in WhatsApp (+91 81606 13430)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status.type === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-900 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-semibold text-red-800">{status.message}</h4>
            <p className="mt-1 text-red-700 text-xs sm:text-sm">{status.details}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Company Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Global Trading FZE"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Business Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 50 123 4567"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Country <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. UAE, UK, Singapore"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Product of Interest */}
          <div>
            <label htmlFor="product" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Product of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="product"
              name="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 bg-white transition"
            >
              {productsList.map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>
          </div>

          {/* Estimated Quantity */}
          <div>
            <label htmlFor="estimatedQuantity" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Estimated Quantity <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="estimatedQuantity"
              name="estimatedQuantity"
              value={formData.estimatedQuantity}
              onChange={handleChange}
              placeholder="e.g. 1 x 20ft FCL / 5 MT"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 bg-white transition"
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Message / Requirements */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Message / Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify your target specifications, packaging preferences, destination port, or sampling requests..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition resize-y"
          />
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="privacyConsent"
            name="privacyConsent"
            required
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0A2540] focus:ring-[#0A2540]"
          />
          <label htmlFor="privacyConsent" className="text-xs text-gray-600 leading-normal">
            I agree that the details provided will be used exclusively by Nilkanth World Exim to evaluate and respond to this business trade inquiry in accordance with the{" "}
            <Link href="/privacy-policy" className="text-[#0A2540] font-medium underline hover:text-[#D92525]">
              Privacy Policy
            </Link>.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#10365c] text-white font-medium py-3.5 px-6 rounded-lg text-sm shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540] group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#B89453]" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Business Inquiry</span>
                <Send className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Direct Trade Desk • Confidential B2B Processing</span>
        </div>
        <span>Surat, Gujarat, India</span>
      </div>
    </div>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center text-sm text-gray-500">
          Loading inquiry form...
        </div>
      }
    >
      <ContactFormInner {...props} />
    </Suspense>
  );
}

