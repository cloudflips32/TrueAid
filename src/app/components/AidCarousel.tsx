import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../components/ui/carousel";
import { useCart, AidItem } from "../contexts/CartContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Plus, Shield } from "lucide-react";
import { motion } from "motion/react";



const AidCarousel = () => {
    const { addToCart } = useCart();
    const [filter, setFilter] = useState<string>("All");
    const [items, setItems] = useState<AidItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function SkeletonCard() {
        return (
            <Card className="overflow-hidden border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-sm animate-pulse">
                <div className="w-full h-56 bg-gray-200 dark:bg-slate-850" />
                <CardContent className="p-5 space-y-3">
                    <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded w-3/4" />
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-full" />
                        <div className="h-4 bg-gray-200 dark:bg-slate-800 rounded w-5/6" />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded w-16" />
                        <div className="h-9 bg-gray-200 dark:bg-slate-800 rounded w-28" />
                    </div>
                </CardContent>
            </Card>
        );
    }

    const fetchItems = async (active = true) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/aid-items");
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            const data = await response.json();
            if (active) {
                if (data && data.length > 0) {
                    setItems(data);
                } else {
                    setItems([]);
                }
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Failed to load aid items from Stripe API:", error);
            if (active) {
                setItems([]);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        let active = true;
        fetchItems(active);
        return () => {
            active = false;
        };
    }, []);

    const categories = ["All", "Food", "Coffee", "Clothes"];
    const filteredItems = filter === "All"
        ? items
        : items.filter(item => item.category === filter);

    return (
        <section id="active-aid-catalog" className="w-full bg-[#F9FAFB] dark:bg-slate-900/50 py-20 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#003865] dark:text-blue-400">Essentials Relief</h2>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Active Aid Catalog</h3>
                        <p className="text-gray-500 dark:text-slate-400 max-w-xl text-sm font-medium">
                            Choose essential life-support items. Every dispatch is tracked from logistics hubs directly to target recipients.
                        </p>
                    </div>

                    {/* Responsive Filter Badges */}
                    <div className="flex flex-wrap gap-2 pb-1 border-b border-gray-200 dark:border-slate-800 md:border-none">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${filter === category
                                    ? "bg-[#003865] dark:bg-blue-600 text-white shadow-sm"
                                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel container */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : items.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-slate-850 dark:to-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center gap-6"
                    >
                        {/* Premium abstract graphic design elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

                        <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 shadow-inner shrink-0 relative">
                            <Shield className="w-8 h-8 relative z-10" />
                            <span className="absolute inset-0 bg-orange-500/20 rounded-2xl animate-ping opacity-30" />
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                                Catalog Temporarily Offline
                            </h4>
                            <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto font-medium">
                                We are currently updating our field logistics paths with active Stripe catalog syncing. Please check back shortly to support our active campaigns.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
                            <button
                                onClick={() => fetchItems(true)}
                                className="bg-[#003865] dark:bg-blue-600 hover:bg-[#002850] dark:hover:bg-blue-700 text-white font-bold text-xs h-10 px-6 rounded-xl shadow-md cursor-pointer transition-colors active:scale-95 duration-150"
                            >
                                Reload Catalog
                            </button>
                            <button
                                onClick={() => {
                                    document.getElementById("volunteer-section")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-[#003865] dark:text-blue-400 border border-gray-200 dark:border-slate-700 font-bold text-xs h-10 px-6 rounded-xl cursor-pointer transition-colors active:scale-95 duration-150"
                            >
                                Join as Volunteer
                            </button>
                        </div>
                    </motion.div>
                ) : filteredItems.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto bg-white dark:bg-slate-850 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 text-center shadow-md flex flex-col items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-400">
                            <Shield className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-extrabold text-gray-900 dark:text-white">No Items Found</h4>
                            <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">
                                No active supplies match the category "{filter}". Try selecting "All" to view all support options.
                            </p>
                        </div>
                        <button
                            onClick={() => setFilter("All")}
                            className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 font-bold text-xs h-9 px-4 rounded-lg cursor-pointer"
                        >
                            Reset Filter
                        </button>
                    </motion.div>
                ) : (
                    <div className="relative px-2">
                        <Carousel className="w-full relative" opts={{ align: "start", loop: true }}>
                            <CarouselContent className="-ml-6">
                                {filteredItems.map((item, index) => (
                                    <CarouselItem key={item.id} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="h-full"
                                        >
                                            <Card className="overflow-hidden border border-gray-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-slate-950/40 transition-all duration-300 flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl group">
                                                {/* Card Image */}
                                                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-900">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute top-4 left-4">
                                                        <Badge className="bg-white/90 dark:bg-slate-900/90 text-gray-800 dark:text-slate-100 backdrop-blur-sm border-none shadow-sm hover:bg-white/90 font-bold uppercase tracking-wider text-[10px] px-2.5 py-1">
                                                            {item.category}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4 dark:bg-slate-900/30">
                                                    <div className="space-y-2">
                                                        <h4 className="font-extrabold text-lg text-gray-900 dark:text-gray-200 dark:bg-transparent group-hover:text-[#003865] dark:group-hover:text-blue-400 transition-colors leading-tight">
                                                            {item.name}
                                                        </h4>
                                                        <p className="text-xs text-gray-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-3">
                                                            {item.description}
                                                        </p>
                                                    </div>

                                                    {/* Card Price & CTA */}
                                                    <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-slate-800">
                                                        <div className="flex flex-col">
                                                            <div className="flex items-baseline gap-0.5 pt-1 cursor-default select-none">
                                                                <span className="text-lg font-bold text-orange-500 dark:text-orange-400 leading-none">
                                                                    $
                                                                </span>
                                                                <span className="text-2xl font-extrabold text-orange-500 dark:text-orange-400 leading-none">
                                                                    {item.price.toFixed(2)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            onClick={() => addToCart(item)}
                                                            className="bg-[#003865] dark:bg-blue-600 hover:bg-[#002850] dark:hover:bg-blue-700 text-white font-bold h-10 px-4 rounded-xl shadow-md border-none flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                                                            size="sm"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                            <span>Add to Cart</span>
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Arrow navigation aligned to sides */}
                            <div className="hidden lg:flex">
                                <CarouselPrevious className="absolute -left-14 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#003865] dark:hover:text-blue-400 w-12 h-12 rounded-full cursor-pointer transition-colors" />
                                <CarouselNext className="absolute -right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 shadow-md hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#003865] dark:hover:text-blue-400 w-12 h-12 rounded-full cursor-pointer transition-colors" />
                            </div>
                        </Carousel>
                    </div>
                )}
            </div>
        </section>
    )
}

export default AidCarousel;