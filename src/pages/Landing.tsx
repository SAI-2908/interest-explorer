import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingCircles } from "@/components/FloatingCircles";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingCircles />
      
      {/* Floating emojis */}
      <motion.span
        className="absolute text-4xl opacity-60 hidden md:block"
        style={{ top: "15%", left: "15%" }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🚀
      </motion.span>
      <motion.span
        className="absolute text-4xl opacity-60 hidden md:block"
        style={{ top: "20%", right: "20%" }}
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        💼
      </motion.span>
      <motion.span
        className="absolute text-4xl opacity-60 hidden md:block"
        style={{ bottom: "25%", left: "20%" }}
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        🎯
      </motion.span>
      <motion.span
        className="absolute text-4xl opacity-60 hidden md:block"
        style={{ bottom: "30%", right: "15%" }}
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
      >
        📈
      </motion.span>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-2xl w-full z-10 border border-primary/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bungee text-glow mb-4"
        >
          <span className="gradient-text">HUSTLE</span>
          <span className="text-foreground">HUB</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-accent font-fredoka mb-8"
        >
          Find Your Perfect Career Path! 🎯
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-muted-foreground mb-8 space-y-2"
        >
          <p>🎯 Interest-based career matching</p>
          <p>📊 Skill level assessment</p>
          <p>💼 Personalized recommendations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            onClick={() => navigate("/interests")}
            size="lg"
            className="font-bungee text-lg md:text-xl px-8 py-6 gradient-primary hover:opacity-90 animate-pulse-glow rounded-full uppercase tracking-wider"
          >
            Start The Grind 🔥
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 text-xs text-muted-foreground"
        >
          Aligned with UN SDG 4 (Quality Education) & SDG 8 (Decent Work)
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Landing;
