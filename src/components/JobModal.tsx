import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { JobDetail } from "@/data/careers";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  category: string;
  jobDetail?: JobDetail;
}

export const JobModal = ({ isOpen, onClose, jobTitle, category, jobDetail }: JobModalProps) => {
  if (!jobDetail) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl p-6 glass-card border border-border/50 shadow-2xl"
            style={{
              background: "linear-gradient(to bottom right, hsl(220 12% 14%), hsl(220 12% 10%))"
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors hover:rotate-90 duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6 pb-4 border-b border-border/30">
              <h2 className="text-xl md:text-2xl font-bold text-accent font-montserrat">
                {jobTitle}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">{category}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <span>📝</span> Job Description
                </h3>
                <div className="bg-background/20 p-3 rounded-lg text-sm leading-relaxed">
                  {jobDetail.description}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-primary font-semibold mb-2">
                  <span>🛠️</span> Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {jobDetail.skills.map((skill, index) => (
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
                  {jobDetail.education}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
