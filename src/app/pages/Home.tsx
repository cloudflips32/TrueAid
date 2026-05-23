import Hero from "../components/Hero";
import LiveTicker from "../components/LiveTicker";
import AidCarousel from "../components/AidCarousel";
import LogisticsTransparency from "../components/LogisticsTransparency";
import HubEngagement from "../components/HubEngagement";
import EventCalendar from "../components/EventCalendar";
import Testimonials from "../components/Testimonials";
import SocialHub from "../components/SocialHub";
import SafetyResources from "../components/SafetyResources";
import Footer from "../components/Footer";

export function Home() {
  return (
    <div className="w-full bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 pb-12 overflow-x-hidden font-sans transition-colors duration-300">
      <Hero />
      <LiveTicker />
      <AidCarousel />
      <LogisticsTransparency />
      <HubEngagement />
      <EventCalendar />
      <Testimonials />
      <SocialHub />
      <SafetyResources />
      <Footer />
    </div>
  );
}


