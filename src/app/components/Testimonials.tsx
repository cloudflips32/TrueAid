import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section id="impact-stories" className="w-full bg-[#111827] text-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-10">
                <div className="space-y-2">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400">Direct Impact</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Stories of Hope</h3> {/* need to edit */}
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
    );
};

export default Testimonials