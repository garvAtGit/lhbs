# Copilot Instructions for lhbs (masterpramod.com)

## Project Overview
- **Monorepo** with a Next.js frontend (`/app`, `/pages`, `/components`) and custom Express-based payment microservices (e.g., `/phonepe-express`).
- **Course platform**: Users can browse, purchase, and access martial arts courses. Payment is handled via PhonePe (and optionally Razorpay/Instamojo).
- **Data**: Courses and orders are stored in MongoDB (see `/models`).

## Key Architecture & Data Flow
- **Frontend**: Next.js (App Router) with custom components for course display, checkout, and payment success.
- **Backend**: Express servers for payment (e.g., `/phonepe-express/index.js`).
- **Payment Flow**: Frontend redirects to `/phonepe-express/pay?amount=...` for PhonePe. After payment, PhonePe redirects to a success page (can be local or via ngrok for UAT).
- **Course data**: Defined in `/models/Coursename.js` and seeded via `/scripts/seedCourses.js`.
- **Order data**: `/models/order.js` (status: PENDING/SUCCESS, etc).

## Developer Workflows
- **Start Next.js frontend**: `npm run dev` (default port 3000)
- **Start PhonePe Express server**: `cd phonepe-express && npm install && npm start` (default port 3002)
- **Seed courses**: `node scripts/seedCourses.js` (requires MongoDB running and `.env` with `MONGODB_URI`)
- **Expose local server for payment callbacks**: Use `ngrok http 3000` and update `redirectUrl` in payment payloads to the ngrok HTTPS URL.

## Project-Specific Patterns & Conventions
- **Course pricing**: Pass `amount` as a prop to `CoursesCard` and payment forms. Amounts are in paise (e.g., 47000 = ₹470).
- **Payment integration**: Do not use legacy `/api/create-payment` or `/app/utils/phonepe.js`—use `/phonepe-express` for all PhonePe flows.
- **Checkout**: Use `/checkout/[slug]` for custom checkout flows; pass course slug and amount via URL/query params.
- **Success pages**: `/thank-you` and `/access/[slug]` display payment success and access info.
- **Image assets**: Use CDN links (e.g., imagekit.io) for course images.
- **AOS animations**: Use `<AOSInitializer />` in layout for scroll animations.
- **Session/auth**: NextAuth is set up in `/app/api/auth/[...nextauth]/route.js` and provided via `/app/providers.jsx`.

## Integration Points & External Dependencies
- **MongoDB**: Connection via `/app/utils/db.js` and `.env` config.
- **PhonePe**: `/phonepe-express` microservice, see its README for UAT credentials and API details.
- **Razorpay/Instamojo**: Optional, see `/app/components/RazorpayButton.jsx` and `/phonepe-express/index.js` for Instamojo example.
- **ngrok**: Required for UAT payment callback testing.

## Examples
- To add a new course: update `/models/Coursename.js` and seed with `/scripts/seedCourses.js`.
- To add a new payment method: create a new microservice (see `/phonepe-express` as a template).
- To update payment success flow: edit `/app/thank-you/page.jsx` and `/app/access/[slug]/page.jsx`.

---

**If you add new payment providers or change the payment flow, update this file and `/phonepe-express/README.md`.**

For questions, see `/README.md` and `/phonepe-express/README.md` for more details.
