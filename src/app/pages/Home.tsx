import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { aidItems } from "../data/aidItems";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Food", "Coffee", "Clothes"];
  const filteredItems = filter === "All"
    ? aidItems
    : aidItems.filter(item => item.category === filter);

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
    </div>
  );
}
