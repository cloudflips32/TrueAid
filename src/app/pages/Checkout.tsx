import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { countries } from "../data/countries";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Package, CreditCard, Check } from "lucide-react";
import { motion } from "motion/react";

export function Checkout() {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login?redirect=checkout");
    }
  }, [isAuthenticated, navigate]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const selectedCountryData = countries.find((c) => c.id === selectedCountry);

  const handlePlaceOrder = async () => {
    if (!selectedCountry || !selectedCity) {
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          success_url: `${window.location.origin}/?success=true`,
          cancel_url: `${window.location.origin}/checkout`,
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsProcessing(false);
      // You might want to show a toast or error message here
    }
  };

  if (orderComplete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4"
        >
          <Check className="w-12 h-12 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-2">Order Placed!</h2>
        <p className="text-gray-600 text-center">
          Thank you for your generosity. Your aid will be delivered soon.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 py-8 pb-32">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold">Delivery Location</h3>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="country">Select Country</Label>
                <Select value={selectedCountry} onValueChange={(value) => {
                  setSelectedCountry(value);
                  setSelectedCity("");
                }}>
                  <SelectTrigger id="country" className="mt-1">
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.id}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCountryData && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <Label htmlFor="city">Select City</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger id="city" className="mt-1">
                      <SelectValue placeholder="Choose a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCountryData.cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-5 h-5 text-orange-500" />
              <h3 className="font-semibold">Order Summary</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Items</span>
                <span className="font-medium">{totalItems}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="border-t pt-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-orange-500 text-lg">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <div className="fixed bottom-20 md:bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t p-4 shadow-lg z-30">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handlePlaceOrder}
            disabled={!selectedCountry || !selectedCity || isProcessing}
            className="w-full bg-[#003865] hover:bg-[#002850] disabled:bg-gray-300"
            size="lg"
          >
            {isProcessing ? "Processing..." : "Pay with Stripe"}
          </Button>
        </div>
      </div>
    </div>
  );
}
