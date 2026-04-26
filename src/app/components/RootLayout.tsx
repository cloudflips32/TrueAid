import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, Heart, User, Home as HomeIcon, LogOut } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function RootLayout() {
  const { totalItems, animateCart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pb-20">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
            <span className="font-semibold text-lg text-[#003865]">CharityAid</span>
          </Link>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{user?.name}</span>
                <button onClick={logout} className="text-gray-600 hover:text-gray-800">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <User className="w-5 h-5 text-gray-600" />
              </Link>
            )}
            <Link to="/cart" className="relative">
              <motion.div
                animate={animateCart ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </motion.div>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-around">
          <Link
            to="/"
            className={`flex flex-col items-center gap-1 ${
              isActive("/") ? "text-orange-500" : "text-gray-500"
            }`}
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/cart"
            className={`flex flex-col items-center gap-1 ${
              isActive("/cart") ? "text-orange-500" : "text-gray-500"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs">Cart</span>
          </Link>
          <Link
            to="/login"
            className={`flex flex-col items-center gap-1 ${
              isActive("/login") || isActive("/signup") ? "text-orange-500" : "text-gray-500"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Account</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
