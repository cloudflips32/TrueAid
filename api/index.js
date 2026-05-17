import express from 'express';
import stripePackage from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { syncProductsWithStripe } from './sync.js';

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_...') {
  console.warn('WARNING: STRIPE_SECRET_KEY is not set correctly in .env');
}

const stripe = new stripePackage(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// Caching and Background Synchronization for Aid Items
let cachedAidItems = null;
let syncPromise = null;

async function getAidItems() {
  if (cachedAidItems) return cachedAidItems;
  if (syncPromise) return syncPromise;

  syncPromise = (async () => {
    try {
      const items = await syncProductsWithStripe(stripe);
      cachedAidItems = items;
      return items;
    } catch (error) {
      console.error('Error synchronizing aid items with Stripe:', error);
      throw error;
    } finally {
      syncPromise = null;
    }
  })();

  return syncPromise;
}

// Proactively run the synchronization on startup so catalog loads instantly
getAidItems().catch((err) => {
  console.error('Initial background Stripe synchronization failed:', err);
});

// GET endpoint to fetch aid items (served from cache after initial sync)
app.get('/api/aid-items', async (req, res) => {
  try {
    const items = await getAidItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// For Vercel, the route will be relative to /api, so we change /api/create-checkout-session to /create-checkout-session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, success_url, cancel_url } = req.body;

    const line_items = items.map((item) => {
      // Use Stripe Price ID if available for robust/secure billing
      if (item.priceId) {
        return {
          price: item.priceId,
          quantity: item.quantity,
        };
      }
      
      // Fallback: create dynamic/ad-hoc price details
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image.startsWith('http') ? item.image : `https://trueaid.com${item.image}`],
          },
          unit_amount: Math.round(item.price * 100), // Stripe expects amounts in cents
        },
        quantity: item.quantity,
      };
    });

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

