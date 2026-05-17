export async function syncProductsWithStripe(stripe) {
  try {
    console.log("Stripe API: Fetching all active products from Stripe...");
    
    // Fetch all active products from Stripe, expanding their default_price details
    const stripeProductsResponse = await stripe.products.list({
      limit: 100,
      expand: ['data.default_price'],
      active: true
    });
    
    const products = stripeProductsResponse.data;
    console.log(`Stripe API: Retrieved ${products.length} products from Stripe`);

    // Map each Stripe product to the frontend's AidItem structure
    const aidItems = products.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.metadata.category || 'Food',
      description: product.description || '',
      price: product.default_price ? product.default_price.unit_amount / 100 : 0,
      image: (product.images && product.images[0]) || '',
      priceId: product.default_price ? product.default_price.id : null,
      aidItemId: product.metadata.aid_item_id || '999'
    }));

    // Sort items by metadata.aid_item_id so they display in a consistent, logical catalog order
    aidItems.sort((a, b) => {
      return (parseInt(a.aidItemId) || 999) - (parseInt(b.aidItemId) || 999);
    });

    return aidItems;
  } catch (error) {
    console.error("Stripe API Retrieval Error:", error);
    throw error;
  }
}

