import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingCircles } from "@/components/FloatingCircles";
import { JobModal } from "@/components/JobModal";
import { interests, SkillLevel } from "@/data/careers";
import { getCombinedCareers, CombinedCareer } from "@/data/combinedCareers";
import { cn } from "@/lib/utils";

const Results = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner");
  const [combinedCareers, setCombinedCareers] = useState<CombinedCareer[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CombinedCareer | null>(null);

  useEffect(() => {
    const savedInterests = localStorage.getItem("selectedInterests");
    const savedSkillLevel = localStorage.getItem("selectedSkillLevel") as SkillLevel;

    if (!savedInterests || JSON.parse(savedInterests).length === 0) {
      navigate("/interests");
      return;
    }

    const parsedInterests = JSON.parse(savedInterests);
    setSelectedInterests(parsedInterests);
    
    if (savedSkillLevel) {
      setSkillLevel(savedSkillLevel);
    }

    // Get combined careers based on all selected interests
    const careers = getCombinedCareers(parsedInterests, savedSkillLevel || "beginner");
    setCombinedCareers(careers);
  }, [navigate]);

  const handleKnowMore = (career: CombinedCareer) => {
    setSelectedCareer(career);
    setModalOpen(true);
  };

  const handleStartOver = () => {
    localStorage.removeItem("selectedInterests");
    localStorage.removeItem("selectedSkillLevel");
    navigate("/");
  };

  const getInterestName = (interestId: string): string => {
    const interest = interests.find((i) => i.id === interestId);
    return interest?.name || interestId;
  };

  const getInterestEmoji = (interestId: string): string => {
    const interest = interests.find((i) => i.id === interestId);
    return interest?.emoji || "📌";
  };

  const getTypeColor = (type: string) => {
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
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingCircles />

      {/* Floating icons */}
      <motion.span
        className="absolute text-3xl opacity-80 hidden md:block"
        style={{ top: "20%", left: "10%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🚀
      </motion.span>
      <motion.span
        className="absolute text-3xl opacity-80 hidden md:block"
        style={{ top: "15%", right: "20%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      >
        💼
      </motion.span>
      <motion.span
        className="absolute text-3xl opacity-80 hidden md:block"
        style={{ bottom: "30%", left: "15%" }}
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        📈
      </motion.span>
      <motion.span
        className="absolute text-3xl opacity-80 hidden md:block"
        style={{ bottom: "20%", right: "10%" }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
      >
        🎯
      </motion.span>

      {/* Celebration banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="gradient-primary px-8 py-3 rounded-full font-bold shadow-lg mb-6 z-10"
      >
        ✨ Perfect Careers Found! ✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 md:p-8 text-center max-w-2xl w-full z-10 border border-primary/20"
        style={{
          animation: "glowing 3s infinite alternate",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-montserrat font-bold mb-2"
        >
          <span className="text-accent">Let's Make Your Hustle Count</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-4"
        >
          Careers that blend your passions perfectly!
        </motion.p>

        {/* Selected interests display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {selectedInterests.map((interestId) => (
            <span
              key={interestId}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-sm"
            >
              {getInterestEmoji(interestId)} {getInterestName(interestId)}
            </span>
          ))}
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-sm text-accent capitalize">
            {skillLevel}
          </span>
        </motion.div>

        {/* Combined Career Results */}
        <div className="space-y-4 text-left">
          {combinedCareers.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.15 }}
              className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col gap-1 flex-1">
                <span className={cn("text-xs md:text-sm font-semibold", getTypeColor(career.type))}>
                  {career.type}
                </span>
                <span className="text-base md:text-lg font-medium text-foreground">
                  {career.title}
                </span>
                <span className="text-xs text-muted-foreground line-clamp-1">
                  {career.description}
                </span>
              </div>
              <Button
                size="sm"
                onClick={() => handleKnowMore(career)}
                className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300 text-xs md:text-sm ml-3"
              >
                Know More
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Button
            onClick={handleStartOver}
            size="lg"
            className="font-bungee text-base px-8 py-5 gradient-primary rounded-full uppercase tracking-wider animate-pulse-glow"
          >
            Explore More! 🔄
          </Button>
        </motion.div>
      </motion.div>

      {/* Custom Modal for combined careers */}
      {modalOpen && selectedCareer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl p-6 glass-card border border-border/50 shadow-2xl"
            style={{
              background: "linear-gradient(to bottom right, hsl(220 12% 14%), hsl(220 12% 10%))"
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors hover:rotate-90 duration-300 text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-6 pb-4 border-b border-border/30">
              <h2 className="text-xl md:text-2xl font-bold text-accent font-montserrat">
                {selectedCareer.title}
              </h2>
              <p className={cn("text-sm mt-1", getTypeColor(selectedCareer.type))}>
                {selectedCareer.type} Career
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <span>📝</span> Job Description
                </h3>
                <div className="bg-background/20 p-3 rounded-lg text-sm leading-relaxed">
                  {selectedCareer.description}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <span>🛠️</span> Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <span>🎓</span> Education
                </h3>
                <div className="bg-background/20 p-3 rounded-lg text-sm">
                  {selectedCareer.education}
                </div>
              </div>

              {selectedCareer.matchedInterests.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <span>🎯</span> Combines Your Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.matchedInterests.map((interestId) => (
                      <span
                        key={interestId}
                        className="bg-primary/20 px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {getInterestEmoji(interestId)} {getInterestName(interestId)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px hsl(var(--hustle-primary)), 0 0 10px hsl(var(--hustle-primary));
          }
          100% {
            box-shadow: 0 0 20px hsl(var(--hustle-primary)), 0 0 30px hsl(var(--hustle-primary));
          }
        }
      `}</style>
    </div>
  );
};

export default Results;
