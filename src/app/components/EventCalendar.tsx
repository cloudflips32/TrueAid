import { motion } from "motion/react";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const EventCalendar = () => {
    return (
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
    )
}

export default EventCalendar