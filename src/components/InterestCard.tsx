import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface InterestCardProps {
  emoji: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
  delay?: number;
  multiSelect?: boolean;
}

export const InterestCard = ({
  emoji,
  name,
  isSelected,
  onClick,
  delay = 0,
  multiSelect = false,
}: InterestCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl cursor-pointer transition-all duration-300 font-fredoka border overflow-hidden",
        isSelected
          ? "gradient-primary text-primary-foreground border-foreground/50 box-glow-intense"
          : "glass-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
      )}
    >
      {multiSelect && isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-5 h-5 rounded-full bg-foreground/20 flex items-center justify-center"
        >
          <Check className="w-3 h-3" />
        </motion.div>
      )}
      <motion.span
        className="text-3xl md:text-4xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {emoji}
      </motion.span>
      <span className="text-sm md:text-base font-medium">{name}</span>
      
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-xl -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId="selected-glow"
        />
      )}
    </motion.button>
  );
};
