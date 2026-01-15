import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingCircles } from "@/components/FloatingCircles";
import { SkillCard } from "@/components/SkillCard";
import { skillLevels, SkillLevel } from "@/data/careers";
import { cn } from "@/lib/utils";

const Skills = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState<SkillLevel | null>(null);

  useEffect(() => {
    const savedInterests = localStorage.getItem("selectedInterests");
    if (!savedInterests || JSON.parse(savedInterests).length === 0) {
      navigate("/interests");
    }
  }, [navigate]);

  const handleFindCareers = () => {
    if (!selectedSkill) return;
    localStorage.setItem("selectedSkillLevel", selectedSkill);
    navigate("/results");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingCircles />

      {/* Flying emoji */}
      <motion.span
        className="absolute text-2xl z-20"
        animate={{
          x: ["-100vw", "100vw"],
          y: [0, -50, 50, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "20%" }}
      >
        ✨
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-xl w-full z-10 border border-primary/20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bungee mb-2"
          style={{ textShadow: "3px 3px 0px hsl(var(--primary))" }}
        >
          LEVEL UP! 🎮
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-righteous text-lg mb-8 animate-title-wave"
        >
          What's Your Current Skill Level?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {skillLevels.map((skill) => (
            <SkillCard
              key={skill.id}
              emoji={skill.emoji}
              name={skill.name}
              description={skill.description}
              isSelected={selectedSkill === skill.id}
              onClick={() => setSelectedSkill(skill.id)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={handleFindCareers}
            disabled={!selectedSkill}
            size="lg"
            className={cn(
              "font-bungee text-lg px-10 py-5 rounded-full uppercase tracking-wider transition-all duration-500",
              selectedSkill
                ? "gradient-primary animate-pulse-glow cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            )}
          >
            Find My Path 🎯
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
