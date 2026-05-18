import { Button } from "./ui/button";
import { motion } from "motion/react";

const HubEngagement = () => {
    return (
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
    )
}

export default HubEngagement