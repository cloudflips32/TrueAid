import { useState, useEffect } from "react";
import { useCart, AidItem } from "../contexts/CartContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

function SkeletonCard() {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <CardContent className="p-4 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-8 bg-gray-200 rounded w-28" />
        </div>
      </CardContent>
    </Card>
  );
}

export function Home() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<string>("All");
  const [items, setItems] = useState<AidItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    async function fetchItems() {
      try {
        const response = await fetch("/api/aid-items");
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        if (active) {
          setItems(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load aid items from Stripe API:", error);
        if (active) {
          setIsLoading(false);
        }
      }
    }

    fetchItems();
    return () => {
      active = false;
    };
  }, []);

  const categories = ["All", "Food", "Coffee", "Clothes"];
  const filteredItems = filter === "All"
    ? items
    : items.filter(item => item.category === filter);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Send Aid, Change Lives</h1>
        <p className="text-gray-600 text-sm">
          Every purchase delivers hope to communities in need
        </p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className={filter === category ? "bg-orange-500 hover:bg-orange-600" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 pb-4">
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 pb-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 hover:bg-white/90">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ${item.price}
                    </span>
                    <Button
                      onClick={() => addToCart(item)}
                      className="bg-[#003865] hover:bg-[#002850]"
                      size="sm"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

