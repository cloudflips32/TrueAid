import express from 'express';
import cors from 'cors';
import { syncProductsWithStripe } from './sync.js';

/**
 * Creates and configures an Express app with shared TrueAid API routes.
 * 
 * @param {Object} options
 * @param {Object} options.stripe - Initialized Stripe instance
 * @param {string} [options.defaultSuccessUrl] - Default success URL for checkout
 * @param {string} [options.defaultCancelUrl] - Default cancel URL for checkout
 * @param {boolean} [options.enableHealthCheck] - Whether to add /api/health endpoint
 * @returns {Object} Configured Express app
 */
export function createApiApp({ stripe, defaultSuccessUrl = 'http://localhost:5173/?success=true', defaultCancelUrl = 'http://localhost:5173/checkout', enableHealthCheck = false }) {
  const app = express();
  app.use(express.json());
  app.use(cors());

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

  // POST endpoint to create a Stripe Checkout Session
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
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        };
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: success_url || defaultSuccessUrl,
        cancel_url: cancel_url || defaultCancelUrl,
      });

      res.json({ url: session.url });
    } catch (error) {
      console.error('Error creating stripe session:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Optional health check endpoint
  if (enableHealthCheck) {
    app.get('/api/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });
  }

  return app;
}
