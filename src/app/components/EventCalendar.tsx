import { motion } from "motion/react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";


const EventCalendar = () => {
    return (
        <section className="w-full bg-white dark:bg-slate-950 py-24 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-orange-650 dark:text-orange-400">Field Calendar</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Upcoming Relief Drives</h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">
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
                        className="flex flex-col justify-between bg-[#F9FAFB] dark:bg-slate-900/30 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group h-full"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-orange-500 fill-orange-200/50 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-950/30 px-2.5 py-1 rounded-md">
                                    <Calendar className="w-3.5 h-3.5" />
                                    MAY 28
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    09:00 AM
                                </span>
                            </div>

                            <h4 className="font-extrabold text-gray-900 dark:text-slate-100 group-hover:text-[#003865] dark:group-hover:text-blue-400 transition-colors text-base leading-tight">
                                Winter Shelter Warmth Drive
                            </h4>

                            <p className="text-xs text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
                                Collecting heavy insulated coats, boots, fleece blankets, and thermal items for refugee camp distributions.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 pt-6 border-t border-gray-100 dark:border-slate-800 mt-6 justify-between text-xs font-bold text-[#003865] dark:text-blue-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
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
                        className="flex flex-col justify-between bg-[#F9FAFB] dark:bg-slate-900/30 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group h-full"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-orange-500 fill-orange-200/50 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-950/30 px-2.5 py-1 rounded-md">
                                    <Calendar className="w-3.5 h-3.5" />
                                    JUN 06
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    01:00 PM
                                </span>
                            </div>

                            <h4 className="font-extrabold text-gray-900 dark:text-slate-100 group-hover:text-[#003865] dark:group-hover:text-blue-400 transition-colors text-base leading-tight">
                                Direct Food Packing Crate Workshop
                            </h4>

                            <p className="text-xs text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
                                Help our logistics directors package calorie-dense, ready-to-eat meal units into shockproof shipping modules.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 pt-6 border-t border-gray-100 dark:border-slate-800 mt-6 justify-between text-xs font-bold text-[#003865] dark:text-blue-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
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
                        className="flex flex-col justify-between bg-[#F9FAFB] dark:bg-slate-900/30 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 hover:shadow-md transition-all group h-full"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-orange-500 fill-orange-200/50 dark:text-orange-400 bg-orange-500/10 dark:bg-orange-950/30 px-2.5 py-1 rounded-md">
                                    <Calendar className="w-3.5 h-3.5" />
                                    JUN 21
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 dark:text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    10:30 AM
                                </span>
                            </div>

                            <h4 className="font-extrabold text-gray-900 dark:text-slate-100 group-hover:text-[#003865] dark:group-hover:text-blue-400 transition-colors text-base leading-tight">
                                Emergency First Aid Field Training
                            </h4>

                            <p className="text-xs text-gray-500 dark:text-slate-400 font-medium leading-relaxed">
                                Essential response training for prospective community field coordinators in disaster zones.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 pt-6 border-t border-gray-100 dark:border-slate-800 mt-6 justify-between text-xs font-bold text-[#003865] dark:text-blue-400 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500" />
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
    )
}

export default EventCalendar;