import Hero from "../components/Hero";

import { useState, useEffect } from "react";
import { useCart, AidItem } from "../contexts/CartContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Plus, Play, ArrowRight, Award, Shield, FileText,
  Quote, MapPin, Calendar, Heart, ChevronLeft, ChevronRight, Activity, Clock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";



const TESTIMONIALS = [
  {
    id: 1,
    quote: "During the freezing mountain winter, the heavy fleece blankets and hot meals from TrueAid kept many families fed and warm. Their tracking showed us exactly when it was arriving.",
    author: "Saeed Al-Hamad",
    role: "Shelter Community Leader",
    location: "Evacuation Center A"
  },
  {
    id: 2,
    quote: "Delivering hot drip coffee and warm soup in freezing temperatures is hard work, but seeing the immense relief on the faces of families makes every single hour of logistics worth it.",
    author: "Elena Petrova",
    role: "Field Operations Coordinator",
    location: "Logistics Hub East"
  }
];

const Video = "video" as any;

function SkeletonCard() {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      <div className="w-full h-56 bg-gray-200" />
      <CardContent className="p-5 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-9 bg-gray-200 rounded w-28" />
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const fetchItems = async (active = true) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/aid-items");
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      const data = await response.json();
      if (active) {
        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems([]);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Failed to load aid items from Stripe API:", error);
      if (active) {
        setItems([]);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    let active = true;
    fetchItems(active);
    return () => {
      active = false;
    };
  }, []);

  const categories = ["All", "Food", "Coffee", "Clothes"];
  const filteredItems = filter === "All"
    ? items
    : items.filter(item => item.category === filter);

  const scrollCatalogToView = () => {
    document.getElementById("active-aid-catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full bg-white text-gray-900 pb-12 overflow-x-hidden font-sans">

      {/* 1. Immersive Hero Section (Full-Width Stock Video) */}
      <Hero />

      {/* 2. "What's New" Live Ticker Section */}
      <section className="bg-[#111827] text-white py-3.5 border-y border-gray-800 overflow-hidden relative select-none">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex w-[200%] animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-wider gap-12 items-center">
          {/* Dispatch loop 1 */}
          <div className="flex gap-12 items-center">
            <span className="flex items-center gap-2 text-orange-400">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
              Live Dispatch: 150 Hot Meals distributed in Evacuation Center A
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-white">Active Cargo: 40 Winter Fleece Blankets shipped to Border Hub</span>
            <span className="text-gray-400">•</span>
            <span className="text-green-400">Security Check: 100% direct recipient delivery confirmed in Sector 4</span>
            <span className="text-gray-400">•</span>
            <span className="text-white">Live Dispatch: 60 Liters pure drinking water supplied to Village 12</span>
            <span className="text-gray-400">•</span>
          </div>
          {/* Dispatch loop 2 */}
          <div className="flex gap-12 items-center">
            <span className="flex items-center gap-2 text-orange-400">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
              Live Dispatch: 150 Hot Meals distributed in Evacuation Center A
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-white">Active Cargo: 40 Winter Fleece Blankets shipped to Border Hub</span>
            <span className="text-gray-400">•</span>
            <span className="text-green-400">Security Check: 100% direct recipient delivery confirmed in Sector 4</span>
            <span className="text-gray-400">•</span>
            <span className="text-white">Live Dispatch: 60 Liters pure drinking water supplied to Village 12</span>
            <span className="text-gray-400">•</span>
          </div>
        </div>
      </section>

      {/* 3. Active Aid Catalog Carousel (Responsive Carousel) */}
      <section id="active-aid-catalog" className="w-full bg-[#F9FAFB] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#003865]">Essentials Relief</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Active Aid Catalog</h3>
              <p className="text-gray-500 max-w-xl text-sm font-medium">
                Choose essential life-support items. Every dispatch is tracked from logistics hubs directly to target recipients.
              </p>
            </div>

            {/* Responsive Filter Badges */}
            <div className="flex flex-wrap gap-2 pb-1 border-b border-gray-200 md:border-none">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${filter === category
                    ? "bg-[#003865] text-white shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel container */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center gap-6"
            >
              {/* Premium abstract graphic design elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 shadow-inner shrink-0 relative">
                <Shield className="w-8 h-8 relative z-10" />
                <span className="absolute inset-0 bg-orange-500/20 rounded-2xl animate-ping opacity-30" />
              </div>

              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  Catalog Temporarily Offline
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto font-medium">
                  We are currently updating our field logistics paths with active Stripe catalog syncing. Please check back shortly to support our active campaigns.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
                <button
                  onClick={() => fetchItems(true)}
                  className="bg-[#003865] hover:bg-[#002850] text-white font-bold text-xs h-10 px-6 rounded-xl shadow-md cursor-pointer transition-colors active:scale-95 duration-150"
                >
                  Reload Catalog
                </button>
                <button
                  onClick={() => {
                    document.getElementById("volunteer-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-white hover:bg-gray-50 text-[#003865] border border-gray-200 font-bold text-xs h-10 px-6 rounded-xl cursor-pointer transition-colors active:scale-95 duration-150"
                >
                  Join as Volunteer
                </button>
              </div>
            </motion.div>
          ) : filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-md flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-gray-900">No Items Found</h4>
                <p className="text-xs text-gray-500 font-medium">
                  No active supplies match the category "{filter}". Try selecting "All" to view all support options.
                </p>
              </div>
              <button
                onClick={() => setFilter("All")}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs h-9 px-4 rounded-lg cursor-pointer"
              >
                Reset Filter
              </button>
            </motion.div>
          ) : (
            <div className="relative px-2">
              <Carousel className="w-full relative" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-6">
                  {filteredItems.map((item, index) => (
                    <CarouselItem key={item.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="h-full"
                      >
                        <Card className="overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white rounded-2xl group">
                          {/* Card Image */}
                          <div className="relative h-56 overflow-hidden bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm border-none shadow-sm hover:bg-white/90 font-bold uppercase tracking-wider text-[10px] px-2.5 py-1">
                                {item.category}
                              </Badge>
                            </div>
                          </div>

                          {/* Card Content */}
                          <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-2">
                              <h4 className="font-extrabold text-lg text-gray-900 group-hover:text-[#003865] transition-colors leading-tight">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                {item.description}
                              </p>
                            </div>

                            {/* Card Price & CTA */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 leading-none">Impact Price</span>
                                <span className="text-2xl font-extrabold text-orange-500 leading-none pt-1">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                              <Button
                                onClick={() => addToCart(item)}
                                className="bg-[#003865] hover:bg-[#002850] text-white font-bold h-10 px-4 rounded-xl shadow-md border-none flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                                size="sm"
                              >
                                <Plus className="w-4 h-4" />
                                <span>Add to Cart</span>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Arrow navigation aligned to sides */}
                <div className="hidden lg:flex">
                  <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2 bg-white text-gray-700 border border-gray-200 shadow-md hover:bg-gray-100 hover:text-[#003865] w-12 h-12 rounded-full cursor-pointer transition-colors" />
                  <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2 bg-white text-gray-700 border border-gray-200 shadow-md hover:bg-gray-100 hover:text-[#003865] w-12 h-12 rounded-full cursor-pointer transition-colors" />
                </div>
              </Carousel>
            </div>
          )}
        </div>
      </section>

      {/* 4. Scientific Logistics & Transparency Section (Asymmetric Collage) */}
      <section id="how-it-works" className="w-full bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Asymmetric Images Collage (Lucid, Surgical Precision style) */}
            <div className="lg:col-span-6 relative h-[480px] sm:h-[550px] w-full flex items-center">

              {/* Main Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-[70%] h-[75%] rounded-2xl overflow-hidden shadow-xl border border-gray-100 absolute left-0 z-10"
              >
                <img
                  src="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Meal Preparation"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlapping Top Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white absolute right-4 top-8 z-20"
              >
                <img
                  src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Logistics Courier"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlapping Bottom Right Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white absolute right-12 bottom-4 z-30"
              >
                <img
                  src="https://images.pexels.com/photos/6646853/pexels-photo-6646853.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Children Receiving Aid"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right: Technical Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Operations &amp; Security</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Rigorous Logistics, Maximum Direct Impact
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                TrueAid is designed around rigorous accountability. We manage dedicated local logistics hubs, coordinate direct transit pathways, and utilize secure distributed receipts to verify that every food package, blanket, and hot drip coffee reaches the exact community specified.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Our model cuts out middle-tier administrative networks, returning 100% of your aid resources directly to the field.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="bg-[#003865]/10 p-2 rounded-lg text-[#003865] shrink-0 h-10 w-10 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Verified Delivery Guarantee</h4>
                    <p className="text-xs text-gray-500 font-medium">Every shipment is tracked via photo receipts uploaded directly by field coordinators.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-500/10 p-2 rounded-lg text-orange-600 shrink-0 h-10 w-10 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-sm">Stripe-Backed Transactions</h4>
                    <p className="text-xs text-gray-500 font-medium">Secure, direct financial integration guarantees secure aid sponsorship routing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={scrollCatalogToView} className="bg-[#003865] hover:bg-[#002850] font-bold text-sm h-12 px-6 rounded-xl border-none shadow-md flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer">
                  <span>Explore Direct Impact</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Statistics Counters Row (With Subtle Entrance Transitions) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-gray-100">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="block text-4xl sm:text-5xl font-black text-[#003865]">150,000+</span>
              <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400">Meals Dispatched</span>
              <p className="text-xs text-gray-500 font-medium px-4">Calorie-dense meals packed and distributed globally.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="block text-4xl sm:text-5xl font-black text-orange-500">54 Hubs</span>
              <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400">Active Centers</span>
              <p className="text-xs text-gray-500 font-medium px-4">Active operational structures in high-need districts.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <span className="block text-4xl sm:text-5xl font-black text-green-600">100%</span>
              <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400">Direct Delivery</span>
              <p className="text-xs text-gray-500 font-medium px-4">Bypassing administrative layers directly to families.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. Community Hub Engagement Section (Split Layout) */}
      <section id="volunteer-section" className="w-full bg-[#F9FAFB] py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: Text Block */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#003865]">Local Empowerment</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Empowering Local Hubs &amp; Global Volunteers
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Our operations rely on training and resource support of local community hub leaders. We supply field directors with the logistical software and equipment needed to cook high-density meals, package clothing crates, and securely catalog resource receipt metrics.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Join our active food networks, sponsor a regional logistics hub, or apply to establish a distribution footprint in your community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#003865] hover:bg-[#002850] font-bold text-sm h-12 px-6 rounded-xl border-none shadow-md cursor-pointer active:scale-95 transition-transform">
                  Apply to Lead a Hub
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-sm h-12 px-6 rounded-xl active:scale-95 transition-transform">
                  Partner with Us
                </Button>
              </div>
            </div>

            {/* Right: Volunteer Stock Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Volunteers in action"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. Upcoming Relief Drives / Active Calendar */}
      <section className="w-full bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-600">Field Calendar</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Upcoming Relief Drives</h3>
            <p className="text-gray-500 text-sm font-medium">
              Join active community packing events and coordination trainings globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Event 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>MAY 24</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>09:00 AM</span>
                  </span>
                </div>

                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-base leading-tight">
                  Winter Shelter Warmth Drive
                </h4>

                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Collecting heavy insulated coats, boots, fleece blankets, and thermal items for refugee camp distributions.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-6 border-t border-gray-100 mt-6 justify-between text-xs font-bold text-[#003865] group-hover:text-orange-500 transition-colors">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  New York Logistics
                </span>
                <span className="flex items-center gap-0.5">
                  Register
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>

            {/* Event 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-between bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>JUN 02</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>01:00 PM</span>
                  </span>
                </div>

                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-base leading-tight">
                  Direct Food Packing Crate Workshop
                </h4>

                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Help our logistics directors package calorie-dense, ready-to-eat meal units into shockproof shipping modules.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-6 border-t border-gray-100 mt-6 justify-between text-xs font-bold text-[#003865] group-hover:text-orange-500 transition-colors">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  London Hub Center
                </span>
                <span className="flex items-center gap-0.5">
                  Register
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>

            {/* Event 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-between bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow group h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>JUN 15</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>10:30 AM</span>
                  </span>
                </div>

                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-base leading-tight">
                  Emergency First Aid Field Training
                </h4>

                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Essential response training for prospective community field coordinators in disaster zones.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-6 border-t border-gray-100 mt-6 justify-between text-xs font-bold text-[#003865] group-hover:text-orange-500 transition-colors">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  Chicago Base
                </span>
                <span className="flex items-center gap-0.5">
                  Register
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 7. Stories of Hope Slider (Deep Dark Background Transition) */}
      <section id="impact-stories" className="w-full bg-[#111827] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">

          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400">Direct Impact</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stories of Hope</h3>
          </div>

          <div className="relative min-h-[220px] flex items-center justify-center px-8 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="relative max-w-2xl mx-auto">
                  <Quote className="w-12 h-12 text-gray-700/60 absolute -top-8 -left-8 z-0 hidden sm:block" />
                  <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-200 relative z-10">
                    "{TESTIMONIALS[currentTestimonial].quote}"
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="block text-sm font-bold text-orange-400">
                    {TESTIMONIALS[currentTestimonial].author}
                  </span>
                  <span className="block text-xs text-gray-400 font-medium">
                    {TESTIMONIALS[currentTestimonial].role} — {TESTIMONIALS[currentTestimonial].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial slider navigation controls */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${currentTestimonial === i ? "bg-orange-500 w-6" : "bg-gray-700 hover:bg-gray-500"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. Guides & Safety Resources (Transition to Light Grey) */}
      <section id="resources" className="w-full bg-[#F9FAFB] py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#003865]">Information Library</h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Recipient Guides &amp; Resources</h3>
              <p className="text-gray-500 text-sm font-medium">
                Surgical logistics checklists, emergency food preparation safety sheets, and thermal protection guide assets.
              </p>
            </div>

            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold text-xs h-10 px-5 rounded-xl cursor-pointer">
              View All Resources
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Guide 1 */}
            <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-2xl flex flex-col justify-between h-full p-5 group">
              <div className="space-y-4">
                <div className="bg-[#003865]/5 text-[#003865] p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-sm leading-snug">
                  Nutrition Standards &amp; Formulations Guide
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Deep analysis of micro-nutrients, calorie densities, and food manufacturing specifications in disaster relief.
                </p>
              </div>
              <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-[#003865] hover:text-orange-500 transition-colors pt-6 border-t border-gray-50 mt-6">
                <span>Download Handbook (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>

            {/* Guide 2 */}
            <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-2xl flex flex-col justify-between h-full p-5 group">
              <div className="space-y-4">
                <div className="bg-[#003865]/5 text-[#003865] p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-sm leading-snug">
                  Extreme Cold Thermal Safety Handout
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Field instruction sheets regarding thermal fleece layering, hypothermia checks, and shelter windproofing.
                </p>
              </div>
              <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-[#003865] hover:text-orange-500 transition-colors pt-6 border-t border-gray-50 mt-6">
                <span>Download Handout (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>

            {/* Guide 3 */}
            <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-2xl flex flex-col justify-between h-full p-5 group">
              <div className="space-y-4">
                <div className="bg-[#003865]/5 text-[#003865] p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-sm leading-snug">
                  Sanitation Standards &amp; Water Purification
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Field sanitation checklists, hygiene kit distribution criteria, and emergency pure water safety protocols.
                </p>
              </div>
              <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-[#003865] hover:text-orange-500 transition-colors pt-6 border-t border-gray-50 mt-6">
                <span>Download Guide (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>

            {/* Guide 4 */}
            <Card className="bg-white border border-gray-100 hover:shadow-md transition-shadow rounded-2xl flex flex-col justify-between h-full p-5 group">
              <div className="space-y-4">
                <div className="bg-[#003865]/5 text-[#003865] p-2 rounded-lg w-10 h-10 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-gray-900 group-hover:text-[#003865] transition-colors text-sm leading-snug">
                  Community Soup Kitchen Setup Playbook
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Operating standards for packing modules, food handling licenses, boiler setups, and delivery logs.
                </p>
              </div>
              <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-[#003865] hover:text-orange-500 transition-colors pt-6 border-t border-gray-50 mt-6">
                <span>Download Playbook (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </Card>

          </div>

        </div>
      </section>

      {/* 9. Premium Mega Footer */}
      <footer className="w-full bg-[#003865] text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Bold Action Buttons (recreating Arthrex Mega Footer buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16 border-b border-white/10">
            <button className="flex justify-between items-center bg-[#002444] border border-white/10 hover:border-white/40 p-6 rounded-xl group transition-all text-left cursor-pointer active:scale-[0.98]">
              <div className="space-y-1">
                <span className="block text-xs uppercase font-extrabold tracking-widest text-orange-400">Request Service</span>
                <span className="block text-lg font-extrabold">Request Emergency Aid</span>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex justify-between items-center bg-[#002444] border border-white/10 hover:border-white/40 p-6 rounded-xl group transition-all text-left cursor-pointer active:scale-[0.98]">
              <div className="space-y-1">
                <span className="block text-xs uppercase font-extrabold tracking-widest text-orange-400">Join Direct Force</span>
                <span className="block text-lg font-extrabold">Apply for a Local Hub</span>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex justify-between items-center bg-orange-500 text-white p-6 rounded-xl group transition-all text-left cursor-pointer active:scale-[0.98]">
              <div className="space-y-1">
                <span className="block text-xs uppercase font-extrabold tracking-widest text-white/80">Support Hubs</span>
                <span className="block text-lg font-extrabold">Donate to Active Fund</span>
              </div>
              <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">

            <div className="space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Recipient Services</h5>
              <ul className="space-y-2.5 text-xs text-blue-100 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Direct Delivery Maps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Kitchen Network</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warm Clothing Logistics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">First Aid Crates Request</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Volunteers</h5>
              <ul className="space-y-2.5 text-xs text-blue-100 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Active Packing Hubs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NGO Partner Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Field Director Application</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logistical Safety Sheets</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Corporate &amp; Legal</h5>
              <ul className="space-y-2.5 text-xs text-blue-100 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Stripe Security Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logistical Transport Audits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Matching Corporate Grants</a></li>
                <li><a href="#" className="hover:text-white transition-colors">100% Transparency Guarantee</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Resources</h5>
              <ul className="space-y-2.5 text-xs text-blue-100 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Malnutrition Meal Metrics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Extreme Cold Thermal Sheets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sanitary Water Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Kitchen Manual</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row md:items-center justify-between text-[11px] text-blue-200/60 pt-8 border-t border-white/5 gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-1 rounded-md">
                <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              </div>
              <span className="font-extrabold uppercase tracking-wide">TrueAid Internationals</span>
            </div>
            <div>
              &copy; {new Date().getFullYear()} TrueAid. Helping Communities Live Better. All rights reserved.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}


