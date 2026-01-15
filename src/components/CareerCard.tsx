import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CareerCardProps {
  type: "Generic" | "Big Demand" | "Unique";
  title: string;
  onKnowMore: () => void;
  delay?: number;
}

export const CareerCard = ({ type, title, onKnowMore, delay = 0 }: CareerCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "Big Demand":
        return "text-accent";
      case "Unique":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
      className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-secondary/5 border border-border/50 hover:border-primary/30 transition-all"
    >
      <div className="flex flex-col gap-1">
        <span className={cn("text-xs md:text-sm font-semibold", getTypeColor())}>
          {type}
        </span>
        <span className="text-sm md:text-base font-medium text-foreground">
          {title}
        </span>
      </div>
      <Button
        size="sm"
        onClick={onKnowMore}
        className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 text-xs md:text-sm"
      >
        Know More
      </Button>
    </motion.div>
  );
};
