import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FloatingCircles } from "@/components/FloatingCircles";
import { CareerCard } from "@/components/CareerCard";
import { JobModal } from "@/components/JobModal";
import { interests, jobDetails, SkillLevel, Career } from "@/data/careers";

const Results = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("beginner");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{ title: string; category: string } | null>(null);

  useEffect(() => {
    const savedInterests = localStorage.getItem("selectedInterests");
    const savedSkillLevel = localStorage.getItem("selectedSkillLevel") as SkillLevel;

    if (!savedInterests || JSON.parse(savedInterests).length === 0) {
      navigate("/interests");
      return;
    }

    setSelectedInterests(JSON.parse(savedInterests));
    if (savedSkillLevel) {
      setSkillLevel(savedSkillLevel);
    }
  }, [navigate]);

  const handleKnowMore = (title: string, category: string) => {
    setSelectedJob({ title, category });
    setModalOpen(true);
  };

  const handleStartOver = () => {
    localStorage.removeItem("selectedInterests");
    localStorage.removeItem("selectedSkillLevel");
    navigate("/");
  };

  const getCareersByInterest = (interestId: string): Career[] => {
    const interest = interests.find((i) => i.id === interestId);
    if (!interest) return [];
    return interest[skillLevel] || [];
  };

  const getInterestName = (interestId: string): string => {
    const interest = interests.find((i) => i.id === interestId);
    return interest?.name || interestId;
  };

  const getInterestEmoji = (interestId: string): string => {
    const interest = interests.find((i) => i.id === interestId);
    return interest?.emoji || "📌";
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
        className="glass-card rounded-2xl p-6 md:p-8 text-center max-w-3xl w-full z-10 border border-primary/20 max-h-[80vh] overflow-y-auto"
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
          className="text-muted-foreground mb-6"
        >
          Careers that would suit you just perfect!!
        </motion.p>

        <div className="space-y-6 text-left">
          {selectedInterests.map((interestId, sectionIndex) => (
            <motion.div
              key={interestId}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: sectionIndex * 0.2, type: "spring" }}
              className="glass-card rounded-xl p-4 border border-border/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{getInterestEmoji(interestId)}</span>
                <h2 className="text-lg md:text-xl font-bold text-foreground">
                  {getInterestName(interestId)}
                </h2>
              </div>

              <div className="space-y-3">
                <h3 className="text-accent font-semibold text-sm capitalize">
                  {skillLevel} Level Careers
                </h3>
                {getCareersByInterest(interestId).map((career, index) => (
                  <CareerCard
                    key={career.title}
                    type={career.type}
                    title={career.title}
                    onKnowMore={() => handleKnowMore(career.title, getInterestName(interestId))}
                    delay={index}
                  />
                ))}
              </div>
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

      <JobModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={selectedJob?.title || ""}
        category={selectedJob?.category || ""}
        jobDetail={selectedJob ? jobDetails[selectedJob.title] : undefined}
      />

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
