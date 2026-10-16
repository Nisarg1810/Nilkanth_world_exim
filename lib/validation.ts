import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters."),
  companyName: z.string().trim().optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid business email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  country: z.string().trim().optional().or(z.literal("")),
  product: z.enum([
    "Turmeric",
    "Cumin Seeds",
    "Red Chilli",
    "Coriander Seeds",
    "Sesame Seeds",
    "Isabgol",
    "Moringa",
    "Multiple Products",
    "Other"
  ], {
    message: "Please select a product of interest."
  }),
  estimatedQuantity: z.string().trim().optional().or(z.literal("")),
  inquiryType: z.enum([
    "Product Inquiry",
    "Price Quotation",
    "Bulk Order Inquiry",
    "Export Requirements",
    "Other Business Inquiry"
  ], {
    message: "Please select an inquiry type."
  }),
  message: z.string().trim().min(10, "Please provide details regarding your requirements (minimum 10 characters)."),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy to submit an inquiry."
  })
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
