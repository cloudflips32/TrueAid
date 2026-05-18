import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
    FileText,
    ArrowRight
} from "lucide-react";

const SafetyResources = () => {
    return (
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
    )
}

export default SafetyResources;