import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { Handshake } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState, useRef } from "react";

export function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      {/* Video Container (roughly 80% height) */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-background.mp4"
          poster="https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.4]"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <Handshake className="w-12 h-12 text-orange-400 fill-orange-400/20" />
            <h1 className="text-4xl font-bold tracking-tight">TrueAid</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-medium text-orange-50 max-w-md"
          >
            Direct aid to those who need it most.
            Join our mission to change lives.
          </motion.p>
        </div>
      </div>

      {/* Action Buttons (bottom section) */}
      <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-sm sm:max-w-xl flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={() => navigate("/login")}
            className="flex-1 h-14 text-lg font-semibold bg-[#003865] hover:bg-[#002850] rounded-xl shadow-lg transition-all active:scale-95"
          >
            Login to Account
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            variant="outline"
            className="flex-1 h-14 text-lg font-semibold border-2 border-orange-500 text-orange-600 hover:bg-orange-50 rounded-xl transition-all active:scale-95"
          >
            Start Helping Now
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs text-gray-400 mt-4 uppercase tracking-widest font-bold"
        >
          Secure • Direct • Impactful
        </motion.p>
      </div>
    </div>
  );
}
