import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node JS", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Git", level: 80 },
    { name: "UI/UX Design", level: 75 },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const progressBar = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-center mb-12 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I've worked with a variety of technologies in the web development world.
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-6"
              variants={skillItem}
              custom={index}
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-100">{skill.name}</span>
                <span className="text-blue-400 font-medium">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                  variants={progressBar}
                  custom={skill.level}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}