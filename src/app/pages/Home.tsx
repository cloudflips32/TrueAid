import Hero from "../components/Hero";
import LiveTicker from "../components/LiveTicker";
import AidCarousel from "../components/AidCarousel";
import LogisticsTransparency from "../components/LogisticsTransparency";
import HubEngagement from "../components/HubEngagement";
import EventCalendar from "../components/EventCalendar";
import Testimonials from "../components/Testimonials";
import SafetyResources from "../components/SafetyResources";
import Footer from "../components/Footer";

export function Home() {



  return (
    <div className="w-full bg-white text-gray-900 pb-12 overflow-x-hidden font-sans">
      <Hero />
      <LiveTicker />
      <AidCarousel />
      <LogisticsTransparency />
      <HubEngagement />
      <EventCalendar />
      <Testimonials />
      <SafetyResources />
      <Footer />
    </div>
  );
}


