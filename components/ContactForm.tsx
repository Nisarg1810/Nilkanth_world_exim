"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageSquare,
  Shield,
  Anchor,
  Globe2,
  FileCheck2,
  FlaskConical
} from "lucide-react";
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
  "Price Quotation",
  "Bulk Order Inquiry",
  "Sample Request",
  "Product Inquiry",
  "Export Requirements",
  "Other Business Inquiry"
];

const incotermsList = [
  "FOB (Free On Board - Hazira / Mundra)",
  "CIF (Cost, Insurance & Freight)",
  "CFR (Cost and Freight)",
  "EXW (Ex Works - Gujarat Facility)",
  "Flexible / Quote Both FOB & CIF"
];

const timelineOptions = [
  "Immediate (Within 15 days)",
  "1 - 2 Months",
  "Quarterly Contract",
  "General Sourcing / Planning"
];

const currencyOptions = [
  "USD ($)",
  "EUR (€)",
  "GBP (£)",
  "INR (₹)"
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
    incoterm: "FOB (Free On Board - Hazira / Mundra)",
    destinationPort: "",
    sampleRequest: false,
    targetTimeline: "1 - 2 Months",
    preferredCurrency: "USD ($)",
    inquiryType: "Price Quotation",
    message: "",
    privacyConsent: false,
  });

  // Formspree React Hook
  const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mljgvzbv";
  const [state, handleSubmit, reset] = useForm(formspreeFormId);

  useEffect(() => {
    if (activeProduct) {
      const match = productsList.find(
        (p) => p.toLowerCase() === activeProduct.toLowerCase()
      ) || "Other";
      setFormData((prev) => ({ ...prev, product: match }));
    }
  }, [activeProduct]);

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

  const handleResetForm = () => {
    reset();
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      product: defaultProduct,
      estimatedQuantity: "",
      incoterm: "FOB (Free On Board - Hazira / Mundra)",
      destinationPort: "",
      sampleRequest: false,
      targetTimeline: "1 - 2 Months",
      preferredCurrency: "USD ($)",
      inquiryType: "Price Quotation",
      message: "",
      privacyConsent: false,
    });
  };

  const generateWhatsAppUrl = () => {
    const lines = [
      `*New B2B Inquiry — Nilkanth World Exim*`,
      `*Product:* ${formData.product}`,
      `*Type:* ${formData.inquiryType}`,
      `*Buyer:* ${formData.fullName || "International Buyer"}`,
      formData.companyName ? `*Company:* ${formData.companyName}` : null,
      formData.country ? `*Country:* ${formData.country}` : null,
      formData.estimatedQuantity ? `*Est. Volume:* ${formData.estimatedQuantity}` : null,
      `*Incoterm:* ${formData.incoterm}`,
      formData.destinationPort ? `*Port of Discharge:* ${formData.destinationPort}` : null,
      formData.sampleRequest ? `*Sample Required:* YES` : null,
      formData.message ? `*Notes:* ${formData.message}` : null,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${siteConfig.contact.whatsappDigits}?text=${encodeURIComponent(lines)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/90 p-5 sm:p-8 lg:p-10">
      {/* Header bar */}
      <div className="border-b border-gray-100 pb-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5EAE1] text-[#173F35] text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Globe2 className="w-3.5 h-3.5 text-[#173F35]" />
            <span>International B2B Trade Desk</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-editorial">
            Request Export Price Quotation / Sample
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Specify Incoterms, destination port, volumes, and quality grades for official commercial terms.
          </p>
        </div>

        {/* Instant WhatsApp Quick Link */}
        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0 transition"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Quick WhatsApp RFQ</span>
        </a>
      </div>

      {/* Trust Badges Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 bg-gray-50 rounded-xl border border-gray-200 text-[11px] text-gray-600">
        <div className="flex items-center gap-1.5">
          <Anchor className="w-3.5 h-3.5 text-[#0A2540] shrink-0" />
          <span>FOB / CIF / CFR Terms</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5 text-[#0A2540] shrink-0" />
          <span>Pre-Shipment Samples</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FileCheck2 className="w-3.5 h-3.5 text-[#0A2540] shrink-0" />
          <span>Phyto & Fumigation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#0A2540] shrink-0" />
          <span>SGS / Intertek Ready</span>
        </div>
      </div>

      {/* Success Notification */}
      {state.succeeded && (
        <div className="mb-6 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl animate-fadeIn">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-sm flex-1">
              <h4 className="font-bold text-emerald-900 text-base">
                Commercial RFQ Received Successfully
              </h4>
              <p className="mt-1 text-emerald-800 leading-relaxed text-xs sm:text-sm">
                Your export inquiry for <span className="font-semibold">{formData.product}</span> has been dispatched directly to Nilkanth World Exim via Formspree. Our Surat commercial desk will review your specifications, verify crop availability, and send a proforma quotation within 24 hours.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward Details on WhatsApp (+91 81606 13430)</span>
                </a>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formspree Submission Error Notification */}
      {state.errors && !state.succeeded && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-900 animate-fadeIn">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <h4 className="font-semibold text-red-800">Inquiry Dispatch Error</h4>
            <p className="mt-1 text-red-700 text-xs sm:text-sm">
              There was an issue dispatching your inquiry. Please check the highlighted fields below or connect directly with our export desk on WhatsApp (+91 81606 13430).
            </p>
          </div>
        </div>
      )}

      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Formspree Email Subject Configuration */}
          <input
            type="hidden"
            name="_subject"
            value={`[B2B Export RFQ] ${formData.inquiryType}: ${formData.product} - ${formData.companyName || formData.fullName}`}
          />
        {/* Contact details row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Contact Person / Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Klaus Weber / Tariq Al-Mansoor"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Company / Importer Name <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Apex Global Foodstuff LLC"
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
              placeholder="sourcing@company.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
            <ValidationError prefix="Business Email" field="email" errors={state.errors} className="text-xs text-red-600 mt-1 block" />
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Phone / WhatsApp (with country code) <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 50 123 4567 / +49 40 123456"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>
        </div>

        {/* Commodity and Trade Parameters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
          {/* Product of Interest */}
          <div>
            <label htmlFor="product" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Commodity <span className="text-red-500">*</span>
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
              Target Quantity / FCL <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="estimatedQuantity"
              name="estimatedQuantity"
              value={formData.estimatedQuantity}
              onChange={handleChange}
              placeholder="e.g. 1 x 20ft FCL (18 MT)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Destination Country */}
          <div>
            <label htmlFor="country" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Destination Country <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. UAE, Germany, UK, Vietnam"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>
        </div>

        {/* International Trade Terms (Incoterms, Port, Currency) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Incoterm */}
          <div>
            <label htmlFor="incoterm" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Preferred Incoterm <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="incoterm"
              name="incoterm"
              value={formData.incoterm}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 bg-white transition"
            >
              {incotermsList.map((term) => (
                <option key={term} value={term}>
                  {term}
                </option>
              ))}
            </select>
          </div>

          {/* Destination Seaport / Airport */}
          <div>
            <label htmlFor="destinationPort" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Discharge Port <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              id="destinationPort"
              name="destinationPort"
              value={formData.destinationPort}
              onChange={handleChange}
              placeholder="e.g. Jebel Ali, Hamburg, Felixstowe"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition"
            />
          </div>

          {/* Preferred Currency */}
          <div>
            <label htmlFor="preferredCurrency" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Quote Currency <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="preferredCurrency"
              name="preferredCurrency"
              value={formData.preferredCurrency}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 bg-white transition"
            >
              {currencyOptions.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Inquiry Type & Shipment Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

          {/* Target Timeline */}
          <div>
            <label htmlFor="targetTimeline" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Target Shipment Timeline <span className="text-gray-400 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="targetTimeline"
              name="targetTimeline"
              value={formData.targetTimeline}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 bg-white transition"
            >
              {timelineOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sample Request Checkbox Feature */}
        <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
          <input
            type="checkbox"
            id="sampleRequest"
            name="sampleRequest"
            checked={formData.sampleRequest}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0A2540] focus:ring-[#0A2540]"
          />
          <label htmlFor="sampleRequest" className="text-xs text-gray-800 leading-relaxed cursor-pointer">
            <span className="font-semibold text-[#0A2540]">Request Pre-Shipment Lab Sample:</span> Check this box if your quality assurance lab requires physical product samples (50g–250g) and analysis certificates dispatched via DHL/FedEx prior to commercial contract finalization.
          </label>
        </div>

        {/* Message / Requirements */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
            Technical Specifications / Packaging Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify purity percentage (e.g. 99% Sortex), moisture threshold, packaging type (25kg PP / 50kg Kraft paper), palletization preferences, and target discharge seaport..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A2540] focus:border-[#0A2540] text-sm text-gray-900 transition resize-y"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-600 mt-1 block" />
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
            I agree that these trade parameters will be used exclusively by Nilkanth World Exim to evaluate and prepare this export quotation in accordance with the{" "}
            <Link href="/privacy-policy" className="text-[#0A2540] font-medium underline hover:text-[#D92525]">
              Privacy Policy
            </Link>.
          </label>
        </div>

        {/* Submit & WhatsApp CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="submit"
            disabled={state.submitting}
            className="flex-1 flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#10365c] text-white font-medium py-3.5 px-6 rounded-lg text-sm shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540] group"
          >
            {state.submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#B89453]" />
                <span>Dispatching RFQ to Formspree...</span>
              </>
            ) : (
              <>
                <span>Submit Official Export RFQ</span>
                <Send className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </form>
      )}

      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-gray-500">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Direct Trade Desk • Confidential B2B Processing • APEDA Registered</span>
        </div>
        <span>Surat, Gujarat, India • Gateway Ports: Hazira & Mundra</span>
      </div>
    </div>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center text-sm text-gray-500">
          Loading export inquiry form...
        </div>
      }
    >
      <ContactFormInner {...props} />
    </Suspense>
  );
}
