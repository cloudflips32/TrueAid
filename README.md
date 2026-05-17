# TrueAid - Lending Hands Abroad

TrueAid is a modern, impact-driven platform designed to connect global generosity with local needs. We specialize in the direct delivery of essential food, healthcare, and humanitarian aid to communities in need around the world.

<p align="center">
    <img src="public/iPhone-13-PRO-true-aid.vercel.app.png" width="375" />
</p>

## 🌍 Our Mission

To bridge the gap between those who want to help and those who need it most, providing a transparent, secure, and efficient way to deliver tangible aid across borders.

## ✨ Key Features

- **Dynamic Stripe Catalog**: Live catalog powered directly by active Stripe products and prices, removing the need for static mockup files.
- **High-Performance Caching**: Embedded server-side caching that pre-warms and retrieves your Stripe product listings in `< 1ms` to avoid API rate limits.
- **Secure Stripe Checkout**: Secure redirects using actual, tampered-proof **Stripe Price IDs** instead of dynamic client-side amount declarations.
- **User Authentication**: Secure sign-in and account management powered by **Stack Auth**.
- **Cinematic Experience**: Immersive landing page featuring real-world humanitarian footage.
- **Mobile-First Design**: Optimized for on-the-go giving, with a responsive layout for tablets and desktops.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express (Stripe product loading, secure caching, and checkout session handling).
- **Payments**: Stripe API.
- **Auth**: Stack Auth SDK.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Stripe account (for API keys)
- A Stack Auth project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cloudflips32/TrueAid.git
   cd TrueAid
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your keys:
   ```env
   # Stripe Keys
   STRIPE_SECRET_KEY=sk_test_...
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

   # Stack Auth Keys (Configured in src/stack/client.ts)
   ```

### Running the App

To run both the Vite frontend and the Express backend simultaneously:

```bash
npm run dev:all
```

On server boot, the backend automatically retrieves active products directly from your Stripe account, maps them to the application layout, and caches them for maximum performance.

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend (API)**: [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

- `/api`: Express server, dynamic Stripe product retrieval (`sync.js`), and session routes.
- `/src`: React frontend application.
- `/public`: Static assets, including the `hero-background.mp4`.
- `/src/app/pages`: Main application views (Landing, Home, Cart, Checkout).
- `/src/app/contexts`: State management for Auth and Cart.

---

*Together, we can make a world of difference.*
