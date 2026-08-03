import { Outlet, Link, useLocation } from "react-router";
import { ShoppingCart, Handshake, Home as HomeIcon, User, ChevronDown, ArrowRight, HeartHandshake, Sun, Moon } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { motion, AnimatePresence } from "motion/react";
import { UserButton } from "@hexclave/react";
import { useState, useRef, useEffect } from "react";

export function RootLayout() {
  const { totalItems, animateCart } = useCart();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Theme state: default to system theme or localStorage
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  // Apply theme to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setShowCategories(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-20 md:pb-0 flex flex-col font-sans transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300" ref={dropdownRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 transition-transform active:scale-95">
            <div className="bg-orange-500/10 dark:bg-gray-200 p-1.5 rounded-lg">
              <Handshake className="w-6 h-6 text-orange-500 fill-orange-200/50" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#003865] dark:text-white">TrueAid</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            <button
              onClick={() => setShowCategories(!showCategories)}
              className={`flex items-center gap-1.5 text-sm font-semibold h-full px-1 border-b-2 transition-colors duration-200 cursor-pointer ${showCategories
                ? "border-[#003865] text-[#003865] dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-600 hover:text-[#003865] dark:text-slate-300 dark:hover:text-blue-400"
                }`}
            >
              Aid Categories
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showCategories ? "rotate-180 text-[#003865] dark:text-blue-400" : "text-gray-400 dark:text-slate-500"}`} />
            </button>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-gray-600 hover:text-[#003865] dark:text-slate-300 dark:hover:text-blue-400 hover:border-[#003865] dark:hover:border-blue-400 border-b-2 border-transparent h-full flex items-center transition-colors"
            >
              How It Works
            </a>
            <a
              href="#impact-stories"
              className="text-sm font-semibold text-gray-600 hover:text-[#003865] dark:text-slate-300 dark:hover:text-blue-400 hover:border-[#003865] dark:hover:border-blue-400 border-b-2 border-transparent h-full flex items-center transition-colors"
            >
              Impact Stories
            </a>
            <a
              href="#volunteer-section"
              className="text-sm font-semibold text-gray-600 hover:text-[#003865] dark:text-slate-300 dark:hover:text-blue-400 hover:border-[#003865] dark:hover:border-blue-400 border-b-2 border-transparent h-full flex items-center transition-colors"
            >
              Partners
            </a>
            <a
              href="#resources"
              className="text-sm font-semibold text-gray-600 hover:text-[#003865] dark:text-slate-300 dark:hover:text-blue-400 hover:border-[#003865] dark:hover:border-blue-400 border-b-2 border-transparent h-full flex items-center transition-colors"
            >
              Resources
            </a>
          </nav>

          {/* User & Cart Controls */}
          <div className="flex items-center gap-5">
            <div className="border-r border-gray-100 dark:border-slate-800 pr-4 h-8 flex items-center">
              <UserButton />
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300 transition-colors cursor-pointer relative overflow-hidden flex items-center justify-center border border-transparent dark:border-slate-800 shadow-sm"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-700 hover:text-[#003865] transition-colors" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors active:scale-95 hidden md:flex">
              <motion.div
                animate={animateCart ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <ShoppingCart className="w-5 h-5 text-gray-700 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white dark:border-slate-900 shadow-sm">
                    {totalItems}
                  </span>
                )}
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Dropdown Flyout Panel */}
        <AnimatePresence>
          {showCategories && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-16 left-0 right-0 bg-[#F9FAFB] dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-xl z-50 overflow-hidden transition-colors duration-300"
            >
              {/* Decorative top border highlight */}
              <div className="h-[3px] bg-gradient-to-r from-orange-500 to-[#003865] dark:to-blue-500" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Essentials */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-[#003865] dark:bg-blue-400 rounded-full" />
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#003865] dark:text-blue-400">Essentials Relief</h4>
                  </div>
                  <ul className="space-y-2.5 pl-3.5">
                    <li>
                      <Link to="/home" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Food &amp; Pure Water Supply</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Warm Clothing &amp; Thermal Blankets</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Hot Beverages &amp; Fresh Coffee</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Hygiene &amp; Cleanliness Packs</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Active Resources */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-orange-600 dark:text-orange-455">Active Resources</h4>
                  </div>
                  <ul className="space-y-2.5 pl-3.5">
                    <li>
                      <a href="#how-it-works" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Distribution Map &amp; Tracking</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </a>
                    </li>
                    <li>
                      <a href="#logistics-section" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>On-Ground Logistics Hubs</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </a>
                    </li>
                    <li>
                      <a href="#volunteer-section" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Local NGO Partner Networks</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </a>
                    </li>
                    <li>
                      <a href="#resources" className="group flex items-center justify-between py-1 text-sm text-gray-600 dark:text-slate-300 hover:text-[#003865] dark:hover:text-blue-400 transition-colors font-medium">
                        <span>Volunteer Orientation Desk</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 text-orange-500" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Impact Banner */}
                <div className="bg-[#EBF5FF] dark:bg-slate-800/50 p-6 rounded-xl border border-[#D0E7FF] dark:border-slate-700 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-300">
                      <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">100% Direct Delivery</span>
                    </div>
                    <p className="text-xs text-blue-900 dark:text-slate-300 leading-relaxed font-medium">
                      We track every single pack, coffee drop, and fleece blanket to the exact family in need. Explore live dispatch updates and join active food networks.
                    </p>
                  </div>
                  <a
                    href="#active-aid-catalog"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 group"
                  >
                    <span>Browse Aid Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex-1">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation Bar (Hidden on Desktop/Tablet) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 z-45 md:hidden shadow-lg transition-colors duration-300">
        <div className="max-w-md mx-auto px-6 py-3.5 flex justify-around items-center">
          <Link
            to="/home"
            className={`flex flex-col items-center gap-1 transition-colors ${isActive("/home") ? "text-orange-500 font-medium" : "text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200"
              }`}
          >
            <HomeIcon className="w-5.5 h-5.5" />
            <span className="text-[10px] tracking-wide">Home</span>
          </Link>
          <Link
            to="/cart"
            className={`flex flex-col items-center gap-1 transition-colors ${isActive("/cart") ? "text-orange-500 font-medium" : "text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200"
              }`}
          >
            <div className="relative">
              <ShoppingCart className="w-5.5 h-5.5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-wide">Cart</span>
          </Link>
          <Link
            to="/login"
            className={`flex flex-col items-center gap-1 transition-colors ${isActive("/login") || isActive("/signup") ? "text-orange-500 font-medium" : "text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200"
              }`}
          >
            <User className="w-5.5 h-5.5" />
            <span className="text-[10px] tracking-wide">Account</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
