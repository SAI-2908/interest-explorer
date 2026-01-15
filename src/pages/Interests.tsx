import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingCircles } from "@/components/FloatingCircles";
import { InterestCard } from "@/components/InterestCard";
import { interests } from "@/data/careers";
import { cn } from "@/lib/utils";

const Interests = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleContinue = () => {
    if (selectedInterests.length === 0) return;
    localStorage.setItem("selectedInterests", JSON.stringify(selectedInterests));
    navigate("/skills");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingCircles />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 md:p-10 text-center max-w-4xl w-full z-10 border border-primary/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-righteous text-glow mb-2"
        >
          What's Your Vibe? 🔥
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-fredoka text-lg mb-2"
        >
          Select The Fields That Match Your Career Goals!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-sm mb-6"
        >
          You can select <span className="text-primary font-semibold">multiple interests</span> ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-8"
        >
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.id}
              emoji={interest.emoji}
              name={interest.name}
              isSelected={selectedInterests.includes(interest.id)}
              onClick={() => toggleInterest(interest.id)}
              delay={index}
              multiSelect={true}
            />
          ))}
        </motion.div>

        {selectedInterests.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-sm text-muted-foreground"
          >
            Selected: <span className="text-primary font-semibold">{selectedInterests.length}</span> interest{selectedInterests.length > 1 ? "s" : ""}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            onClick={handleContinue}
            disabled={selectedInterests.length === 0}
            size="lg"
            className={cn(
              "font-bungee text-lg px-10 py-5 rounded-full uppercase tracking-wider transition-all duration-500",
              selectedInterests.length > 0
                ? "gradient-primary animate-pulse-glow cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            )}
          >
            Continue 🚀
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Interests;
