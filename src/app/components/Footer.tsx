import { ArrowRight, Heart } from "lucide-react";

const Footer = () => {
    return (
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
    )
}

export default Footer
