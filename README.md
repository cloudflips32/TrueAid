# TrueAid — Direct Aid Delivery & Operations Hub

TrueAid is an ultra-premium, high-performance, impact-driven platform designed to connect global generosity with local humanitarian needs. We bypass traditional administrative red tape to coordinate secure, on-the-ground food networks, warm blankets, and hot beverage distributions directly to evacuation centers and high-need regions globally.

<p align="center">
    <img src="public/iPhone-13-PRO-true-aid.vercel.app.png" width="375" />
</p>

## 🌍 Our Mission

To bridge the gap between global donors and direct field recipients, ensuring absolute transparency, secure routing, and lightning-fast logistics to deliver tangible relief across borders.

<p align="center">
  <img src="public/precise_service_map.png" alt="TrueAid Precise Global Operations & Service Map" width="800" />
</p>

---

## ✨ Key Features & Architectural Upgrades

### 🎨 Premium UI & Interactive Experiences
- **Highly Modular Component Architecture**: Restructured the monolithic homepage into high-cohesion, single-responsibility subcomponents to improve code maintainability, testing scalability, and rendering efficiency.
- **Interactive Dark Mode Toggle**: Custom theme controller built directly into the sticky dropdown header, leveraging high-performance Tailwind CSS v4 class-based variants. Animates beautifully with Framer Motion transitions (sliding & rotating Sun/Moon icons), saves selection dynamically to `localStorage`, and responds automatically to system-level OS preferences (`prefers-color-scheme`).
- **Plus Jakarta Sans Typography**: Standardized visual system powered by the sleek, modern `Plus Jakarta Sans` Google Font imported directly through our core design system.
- **Immersive Video Hero Section**: Features a seamless looping background video (`/hero-background.mp4`) with HSL HSL-styled overrides and dynamic overlays, offering HSL-themed visual entry buttons ("Deliver Aid Now" & "Support Our Mission").
- **"What's New" Live Ticker**: An auto-scrolling marquee bar showing real-time dispatch logs (meals distributed, cargo shipped, safety checks passed) that pauses smoothly on hover.
- **Active Aid Catalog Carousel**: A custom Radix/Shadcn-powered sliding carousel showcasing aid items with active category filters ("All", "Food", "Coffee", "Clothes"), complete with animated skeleton loaders and a gorgeous, gradient-infused offline fallback layout.
- **Stories of Hope Slider**: An interactive, animated testimonial section powered by `Framer Motion` displaying direct feedback from local leaders.
- **Upcoming Relief Drives Calendar**: Interactive calendar cards highlighting upcoming drives (Winter Shelter Warmth Drive in NY, Packing Crate Workshop in London, First Aid Field Training in Chicago) with map pins, dates, and sign-up flows.
- **Guides & Safety Resource Center**: A card-based downloadable PDF handbook vault (Nutrition Standards, Cold Safety, Sanitation Standards, Soup Kitchen Setup) built specifically for field operators.
- **Premium Mega Footer**: Bold action buttons ("Request Emergency Aid", "Apply for a Local Hub", "Donate to Active Fund") coupled with deep corporate resource mapping (Recipient Services, Volunteers, Legal, and Resources).
- **Polished Login & Account Gateways**: Re-centered and polished the authentication viewport (`src/app/pages/Login.tsx`) to guarantee flawless visual layouts across all desktop, tablet, and mobile displays without layout shifting.

### 🛠️ Crash-Proof CSS & Design Tokens (Tailwind v4)
- **Unified Style Architecture**: Built on Tailwind CSS v4's modern stylesheet directives (`@import 'tailwindcss'`), using native custom variables and `@custom-variant dark` properties for an ultra-premium layout.
- **Zero-Lock File System**: Eliminated the redundant `fonts.css` and combined its font-families and typography settings directly into `index.css` and `theme.css`. This resolved recurring Windows and OneDrive file-watching locking crashes (`EPERM`), ensuring extremely fast hot-reloading (HMR) and a 100% stable build pipeline.

### ⚡ Refined Global Navigation (`RootLayout`)
- **Sticky Dropdown Flyout Header**: Transparent, blur-backed (`backdrop-blur-md`) sticky bar with animated hover states.
- **Aid Categories Mega Panel**: A custom animated dropdown containing organized links to relief sectors, logistical tracking maps, partner desks, and 100% direct-delivery promotion banners.
- **Mobile-First Tab Navigation**: Dedicated bottom navigation bar providing quick tab transitions (Home, Cart, Account) optimized for on-the-go mobile devices.
- **Cart Context with Micro-Animations**: Shopping cart counter badges with spring-scaling micro-animations triggered whenever items are added.

### ⚙️ Stripe Syncing & Caching Backend
- **Pre-Warmed Server-Side Caching**: Proactive server synchronization at startup fetches active products directly from the Stripe API, sorts them by custom metadata (`aid_item_id`), and stores them in an in-memory cache, enabling `< 1ms` catalog load times and preventing Stripe API rate limiting.
- **Secure Stripe Checkout Integration**: Fully integrated with **Stripe Checkout**, mapping cart items directly to actual, tamper-proof **Stripe Price IDs** instead of dynamic client-side amount declarations.
- **Dynamic Metadata Parsing**: Automatically reads product categories and operational descriptions directly from Stripe dashboard metadata on the fly.
- **On-Ground Destination Selector**: Integrated an advanced geographic distribution catalog directly into the checkout pipeline, allowing donors to target their relief items to exact high-need global countries (such as Somalia, Yemen, South Sudan, Syria, and Haiti) and precise local evacuation centers or cities.
- **User Authentication**: Secure user registration, sign-in, and account management powered directly by the **Stack Auth SDK**.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS v4, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express (Stripe product syncing, in-memory caching, and checkout session generation).
- **Payments & Billing**: Stripe API (Metadata-mapped product catalog).
- **Auth**: Stack Auth SDK.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Stripe Developer Account (for API keys)
- A Stack Auth Project

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cloudflips32/TrueAid.git
   cd TrueAid
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and configure your keys:
   ```env
   # Stripe Keys
   STRIPE_SECRET_KEY=sk_test_...
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...

   # Stack Auth Keys (Configured in src/stack/client.ts)
   ```

### Running the App

To boot both the React Vite frontend and the Express backend simultaneously in development mode:

```bash
npm run dev:all
```

On server boot, the backend automatically performs the initial synchronization with your Stripe account, maps products to the application layout, and caches them.

- **Vite Frontend**: [http://localhost:5173](http://localhost:5173)
- **Express API Backend**: [http://localhost:3001](http://localhost:3001)

---

## 📁 Project Structure

- `/api`: Express backend, Stripe product retrieval/sorting (`sync.js`), and checkout session routes.
- `/src`: React frontend application.
  - `/src/app/components`: Reusable layout components and UI elements, now refactored into high-cohesion, single-responsibility subcomponents:
    - `Hero.tsx`: Immersive video hero section with smooth Framer Motion entry animations.
    - `LiveTicker.tsx`: Seamless, auto-scrolling dispatch ticker with marquee micro-animations.
    - `AidCarousel.tsx`: Active Aid Catalog with Tailwind category badges, skeleton loaders, and Stripe sync interfaces.
    - `LogisticsTransparency.tsx`: Interactive asymmetric image collage and technical operation transparency indicators.
    - `HubEngagement.tsx`: Double-column split layout for volunteer and hub coordinator recruitment.
    - `EventCalendar.tsx`: Map-pinned calendar showcasing upcoming global relief drives and workshops.
    - `Testimonials.tsx`: Slider presenting verified feedback from field coordinators.
    - `SafetyResources.tsx`: Library cards indexing downloadable PDF operations handbooks.
    - `Footer.tsx`: Bold mega-footer action deck mapping corporate resources.
  - `/src/app/pages`: Core pages (Landing, Home, Cart, Checkout, Login).
  - `/src/app/contexts`: Global state managers (Auth, Cart).
  - `/src/app/data`: Contains structural data files, including `countries.ts` (geographic mapping of 40+ high-need relief regions and distribution cities).
  - `/src/styles`: Google Font imports and visual layout CSS overrides.
- `/public`: Static public assets, including `/hero-background.mp4`.

---

*Together, we can make a world of difference.*
