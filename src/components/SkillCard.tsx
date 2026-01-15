import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  emoji: string;
  name: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SkillCard = ({
  emoji,
  name,
  description,
  isSelected,
  onClick,
}: SkillCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-6 rounded-xl cursor-pointer transition-all duration-300 border font-righteous",
        isSelected
          ? "gradient-primary text-primary-foreground border-foreground/50 animate-pulse-glow"
          : "glass-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
      )}
    >
      <motion.span
        className="text-3xl md:text-4xl font-righteous"
        style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.3)", transform: "rotate(-5deg)" }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {emoji}
      </motion.span>
      <span className="text-lg md:text-xl font-semibold">{name}</span>
      <span className={cn(
        "text-xs md:text-sm italic",
        isSelected ? "text-foreground/90" : "text-muted-foreground"
      )}>
        {description}
      </span>
    </motion.button>
  );
};
