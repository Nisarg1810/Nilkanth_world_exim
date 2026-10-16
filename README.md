# NILKANTH WORLD EXIM — Official Export Website

Production-grade Next.js (App Router) web portal for **NILKANTH WORLD EXIM**, an Indian spices and agricultural commodities export business based in Surat, Gujarat, India.

---

## 🌾 Business Information

- **Business Name:** NILKANTH WORLD EXIM
- **Business Category:** Indian Spices, Agricultural Commodities, and Export Trading
- **Product Portfolio:**
  1. Turmeric (Haldi)
  2. Cumin Seeds (Jeera)
  3. Red Chilli (Lal Mirch)
  4. Coriander Seeds (Dhaniya)
  5. Sesame Seeds (Til)
  6. Isabgol (Psyllium Husk)
  7. Moringa (Oleifera Leaves & Powder)
- **Phone / WhatsApp:** +91 81606 13430
- **Email:** nilkanthworldexim@gmail.com
- **Business Address:**  
  D-601, Saffron Sky, Singanpore Causeway Road, Surat, Gujarat – 395004, India.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom brand tokens
- **Typography:** DM Serif Display & Plus Jakarta Sans
- **Icons:** Lucide React
- **Validation:** Zod
- **Email Dispatch:** Resend / REST mailer with server-side validation & rate-limiting
- **Instant Messaging:** WhatsApp Click-to-Chat integration (`wa.me/918160613430`)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js (v18.18+ or v20+ recommended)
- npm or yarn

### 2. Installation
```bash
# Clone or navigate to the project directory
cd nilkanth

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory (refer to `.env.example`):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=nilkanthworldexim@gmail.com
CONTACT_FROM_EMAIL=inquiries@nilkanthworldexim.com
```

### 4. Running Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📧 Email Provider Setup (Resend)

1. Register an account at [resend.com](https://resend.com).
2. Add and verify your custom sending domain (e.g. `nilkanthworldexim.com`) via DNS TXT and MX records.
3. Generate an API Key from the Resend Dashboard.
4. Set `RESEND_API_KEY=re_...` in your deployment environment variables (e.g. in Vercel project settings).
5. Set `CONTACT_FROM_EMAIL=inquiries@nilkanthworldexim.com`.
6. Set `CONTACT_TO_EMAIL=nilkanthworldexim@gmail.com`.

> **Note on Honest State Handling:**  
> If `RESEND_API_KEY` is not set, the contact form gracefully informs the customer that the email system is currently in configuration mode and provides a 1-click fallback directly to the official WhatsApp Trade Desk (`+91 81606 13430`), ensuring zero lost inquiries!

---

## 🖼️ Image Assets

All original high-resolution photographs and the company brand logo are located in `public/images/`:
- `nilkanth-world-exim-logo.png` — Official Nilkanth World Exim brand logo
- `hero-spices.webp` — 16:9 cinematic arrangement of all 7 commodities
- `turmeric.webp` — Turmeric fingers & powder
- `cumin-seeds.webp` — Whole cumin seeds in ceramic bowl
- `red-chilli.webp` — Sun-dried whole red chillies
- `coriander-seeds.webp` — Golden coriander seeds
- `sesame-seeds.webp` — Natural white sesame seeds
- `isabgol.webp` — Pale psyllium husk flakes
- `moringa.webp` — Green moringa leaves and fine leaf powder
- `about-export.webp` — Agricultural sourcing and commodity handling
- `quality-control.webp` — Quality inspection and seed grading
- `export-logistics.webp` — Deep-water container shipping port
- `spices-detail.webp` — Macro spice composition

---

## 🌐 Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com), select **Add New Project** and import the repository.
3. Under **Environment Variables**, define:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `RESEND_API_KEY` = your API key
   - `CONTACT_TO_EMAIL` = `nilkanthworldexim@gmail.com`
   - `CONTACT_FROM_EMAIL` = `inquiries@your-domain.com`
4. Click **Deploy**. Vercel will automatically build and distribute the site globally with Edge caching.

---

## 📄 License & Attribution

Copyright © 2026 NILKANTH WORLD EXIM. All rights reserved.
