import stripePackage from 'stripe';
import dotenv from 'dotenv';
import { createApiApp } from '../packages/shared/api/index.js';

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_...') {
  console.warn('WARNING: STRIPE_SECRET_KEY is not set correctly in .env');
}

const stripe = new stripePackage(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3001;

// Create the app using the shared API factory
const app = createApiApp({
  stripe,
  defaultSuccessUrl: 'http://localhost:5173/?success=true',
  defaultCancelUrl: 'http://localhost:5173/checkout',
  enableHealthCheck: false,
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;

