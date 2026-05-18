

const LiveTicker = () => {
    return (
        <section className="bg-[#111827] text-white py-3.5 border-y border-gray-800 overflow-hidden relative select-none">
            <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

            <div className="flex w-[200%] animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-wider gap-12 items-center">
                {/* Dispatch loop 1 */}
                <div className="flex gap-12 items-center">
                    <span className="flex items-center gap-2 text-orange-400">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                        Live Dispatch: 150 Hot Meals distributed in Evacuation Center A
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-white">Active Cargo: 40 Winter Fleece Blankets shipped to Border Hub</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-400">Security Check: 100% direct recipient delivery confirmed in Sector 4</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-white">Live Dispatch: 60 Liters pure drinking water supplied to Village 12</span>
                    <span className="text-gray-400">•</span>
                </div>
                {/* Dispatch loop 2 */}
                <div className="flex gap-12 items-center">
                    <span className="flex items-center gap-2 text-orange-400">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping" />
                        Live Dispatch: 150 Hot Meals distributed in Evacuation Center A
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-white">Active Cargo: 40 Winter Fleece Blankets shipped to Border Hub</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-green-400">Security Check: 100% direct recipient delivery confirmed in Sector 4</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-white">Live Dispatch: 60 Liters pure drinking water supplied to Village 12</span>
                    <span className="text-gray-400">•</span>
                </div>
            </div>
        </section>
    )
}

export default LiveTicker;