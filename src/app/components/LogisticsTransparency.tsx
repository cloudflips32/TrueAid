import { Button } from "./ui/button";
import {
    ArrowRight, Award, Shield
} from "lucide-react";
import { motion } from "motion/react";

const LogisticsTransparency = () => {

    const scrollCatalogToView = () => {
        document.getElementById("active-aid-catalog")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="how-it-works" className="w-full bg-white dark:bg-slate-950 py-24 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
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
                            className="w-[70%] h-[75%] rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-slate-800 absolute left-0 z-10"
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
                            className="w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 absolute right-4 top-8 z-20"
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
                            className="w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 absolute right-12 bottom-4 z-30"
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
                        <h2 className="text-xs font-bold uppercase tracking-widest text-orange-650 dark:text-orange-400">Operations &amp; Security</h2>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Rigorous Logistics, Maximum Direct Impact
                        </h3>

                        <p className="text-gray-600 dark:text-slate-350 text-sm leading-relaxed font-medium">
                            TrueAid is designed around rigorous accountability. We manage dedicated local logistics hubs, coordinate direct transit pathways, and utilize secure distributed receipts to verify that every food package, blanket, and hot drip coffee reaches the exact community specified.
                        </p>
                        <p className="text-gray-600 dark:text-slate-350 text-sm leading-relaxed font-medium">
                            Our model cuts out middle-tier administrative networks, returning 100% of your aid resources directly to the field.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex gap-4">
                                <div className="bg-[#003865]/10 dark:bg-gray-200 p-2 rounded-lg text-[#003865] dark:text-blue-400 shrink-0 h-10 w-10 flex items-center justify-center">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-gray-900 dark:text-slate-100 text-sm">Verified Delivery Guarantee</h4>
                                    <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">Every shipment is tracked via photo receipts uploaded directly by field coordinators.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-500/10 dark:bg-gray-200 p-2 rounded-lg text-orange-650 dark:text-orange-400 shrink-0 h-10 w-10 flex items-center justify-center">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-gray-900 dark:text-slate-100 text-sm">Stripe-Backed Transactions</h4>
                                    <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">Secure, direct financial integration guarantees secure aid sponsorship routing.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button onClick={scrollCatalogToView} className="bg-[#003865] dark:bg-blue-600 hover:bg-[#002850] dark:hover:bg-blue-700 font-bold text-sm h-12 px-6 rounded-xl border-none shadow-md flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer">
                                <span>Explore Direct Impact</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Statistics Counters Row (With Subtle Entrance Transitions) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-gray-100 dark:border-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800"
                    >
                        <span className="block text-4xl sm:text-5xl font-black text-[#003865] dark:text-blue-400">150,000+</span>
                        <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400 dark:text-slate-400">Meals Dispatched</span>
                        <p className="text-xs text-gray-500 dark:text-slate-450 font-medium px-4">Calorie-dense meals packed and distributed globally.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800"
                    >
                        <span className="block text-4xl sm:text-5xl font-black text-orange-500 dark:text-orange-450">54 Hubs</span>
                        <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400 dark:text-slate-400">Active Centers</span>
                        <p className="text-xs text-gray-500 dark:text-slate-450 font-medium px-4">Active operational structures in high-need districts.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center space-y-2 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800"
                    >
                        <span className="block text-4xl sm:text-5xl font-black text-green-650 dark:text-green-400">100%</span>
                        <span className="block text-xs uppercase font-extrabold tracking-widest text-gray-400 dark:text-slate-400">Direct Delivery</span>
                        <p className="text-xs text-gray-500 dark:text-slate-455 font-medium px-4">Bypassing administrative layers directly to families.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default LogisticsTransparency;