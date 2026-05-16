import express from 'express';
import stripePackage from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_...') {
  console.warn('WARNING: STRIPE_SECRET_KEY is not set correctly in .env');
}

const stripe = new stripePackage(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// For Vercel, the route will be relative to /api, so we change /api/create-checkout-session to /create-checkout-session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, success_url, cancel_url } = req.body;

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image.startsWith('http') ? item.image : `https://trueaid.com${item.image}`],
        },
        unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: success_url || 'http://localhost:5173/?success=true',
      cancel_url: cancel_url || 'http://localhost:5173/checkout',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating stripe session:', error);
    res.status(500).json({ error: error.message });
  }
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
