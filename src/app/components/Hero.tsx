import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Activity, Play, ArrowRight } from "lucide-react";
import { VideoBackground } from "./ui/VideoBackground";

const scrollCatalogToView = () => {
    document.getElementById("active-aid-catalog")?.scrollIntoView({ behavior: "smooth" });
};


const Hero = () => {
    return (
        <section className="relative w-full min-h-[85vh] md:min-h-0 md:h-[80vh] bg-black overflow-hidden flex flex-col justify-center py-6 md:py-0">
            <VideoBackground
                src="/hero-background.mp4"
                poster="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.35] z-0"
            />

            {/* Absolute Left Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />

            {/* Content Overlays */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-white">
                <div className="max-w-2xl space-y-6">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-orange-500/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-md"
                    >
                        <Activity className="w-3.5 h-3.5 animate-pulse" />
                        <span>WHAT'S NEW • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                    >
                        Direct Aid Delivery: Operations in High-Need Regions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-lg text-gray-200 font-medium leading-relaxed"
                    >
                        TrueAid coordinates secure, on-the-ground food networks, protective warm blankets, and hot beverage distributions. We bypass regional supply bottlenecks to deliver relief directly to families.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <Button
                            onClick={scrollCatalogToView}
                            className="h-14 px-8 text-base font-bold bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg border-none flex items-center gap-2 group transition-all duration-200 active:scale-95 cursor-pointer"
                        >
                            <span>Deliver Aid Now</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <a
                            href="#how-it-works"
                            className="h-14 px-8 text-base font-bold border-2 border-white/60 hover:border-white text-white rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all active:scale-95 duration-200"
                        >
                            <Play className="w-4 h-4 fill-white" />
                            <span>Support Our Mission</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;