import Hero from "../components/Hero";
import LiveTicker from "../components/LiveTicker";
import AidCarousel from "../components/AidCarousel";
import LogisticsTransparency from "../components/LogisticsTransparency";
import HubEngagement from "../components/HubEngagement";

import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  MapPin,
  Quote,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      <LiveTicker />
      {/* 3. Active Aid Catalog Carousel (Responsive Carousel) */}
      <AidCarousel />
      {/* 4. Scientific Logistics & Transparency Section (Asymmetric Collage) */}
      < LogisticsTransparency />
      {/* 5. Community Hub Engagement Section (Split Layout) */}
      <HubEngagement />
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


