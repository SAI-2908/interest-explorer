import { motion } from "framer-motion";

export const FloatingCircles = () => {
  return (
    <>
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl -top-[100px] -left-[100px] z-0"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl -bottom-[200px] -right-[200px] z-0"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl top-[40%] right-[10%] z-0"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};
