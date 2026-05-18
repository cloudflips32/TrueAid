import Hero from "../components/Hero";
import LiveTicker from "../components/LiveTicker";
import AidCarousel from "../components/AidCarousel";
import LogisticsTransparency from "../components/LogisticsTransparency";
import HubEngagement from "../components/HubEngagement";
import EventCalendar from "../components/EventCalendar";
import Testimonials from "../components/Testimonials";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  FileText,
  Heart
} from "lucide-react";

export function Home() {



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
      <EventCalendar />

      {/* 7. Stories of Hope Slider (Deep Dark Background Transition) */}
      <Testimonials />

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


