import { GraduationCap, FileBadge, Briefcase } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import Banner from "./assets/Banner.png";
import MERNPreview from "./assets/EMC MERN.png";
import PythonPreview from "./assets/Python_Preview.png";
import NamastePreview from "./assets/Namaste JavaScript.jpg";

export default function About() {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      rotate: -5,
      filter: "blur(4px)",
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 1.2,
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
    hover: {
      y: -3,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-4 flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-xl"
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
        className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
            variants={item}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Profile Image */}
            <motion.div 
              className="lg:w-1/3 w-full flex justify-center"
              variants={imageVariants}
            >
              <div className="relative">
                <img
                  src={Banner}
                  alt="Abishek S"
                  className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg object-cover shadow-xl border-2 border-blue-400/20"
                />
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent"
                  animate={{
                    borderColor: [
                      "rgba(96, 165, 250, 0)",
                      "rgba(96, 165, 250, 0.3)",
                      "rgba(96, 165, 250, 0)",
                    ],
                    scale: [1, 1.02, 1.04],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              className="lg:w-2/3 w-full"
              variants={container}
            >
              <motion.h3 
                className="text-2xl font-semibold mb-4"
                variants={item}
              >
                Who I Am
              </motion.h3>
              
              <motion.p 
                className="mb-4 text-lg text-gray-300 leading-relaxed"
                variants={item}
              >
                I'm a passionate frontend developer with 3 years of experience
                building responsive and user‑friendly web applications. I
                specialize in React, JavaScript, and modern CSS frameworks.
              </motion.p>
              
              <motion.p 
                className="mb-6 text-lg text-gray-300 leading-relaxed"
                variants={item}
              >
                My approach combines technical expertise with an eye for design to
                create seamless digital experiences that users love.
              </motion.p>

              {/* Personal Info */}
              <motion.div 
                className="overflow-x-auto mb-8 bg-gray-800/50 rounded-lg p-4 shadow-lg"
                variants={item}
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Personal Info</h4>
                <table className="min-w-full text-lg">
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <th className="pr-4 py-3 font-medium text-left">Name</th>
                      <td className="py-3 text-gray-300">Abishek S</td>
                    </tr>
                    <tr>
                      <th className="pr-4 py-3 font-medium text-left">Email</th>
                      <td className="py-3">
                        <a
                          href="mailto:abishek.sathiyan.2002@gmail.com"
                          className="text-blue-400 hover:underline break-all"
                        >
                          abishek.sathiyan.2002@gmail.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-4 py-3 font-medium text-left">From</th>
                      <td className="py-3 text-gray-300">
                        Methalodai, Ramanathapuram, Tamil Nadu, India
                      </td>
                    </tr>
                    <tr>
                      <th className="pr-4 py-3 font-medium text-left">Experience</th>
                      <td className="py-3 text-gray-300">
                        Fresher with hands‑on experience in real‑world projects
                        and modern web technologies.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="mb-8 bg-gray-800/50 rounded-lg p-4 shadow-lg"
                variants={item}
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-400">
                  <GraduationCap className="w-5 h-5" /> Education
                </h3>
                <table className="min-w-full text-lg">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 font-medium text-left">Program</th>
                      <th className="py-3 font-medium text-left">Institution</th>
                      <th className="py-3 font-medium text-left">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="py-3 text-gray-300">
                        MCA – Master of Computer Applications
                      </td>
                      <td className="py-3 text-gray-300">Karpagam University</td>
                      <td className="py-3 text-gray-300">2023 – 2025</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-300">
                        BCA – Bachelor of Computer Applications
                      </td>
                      <td className="py-3 text-gray-300">
                        Caussanel College of Arts & Science
                      </td>
                      <td className="py-3 text-gray-300">2020 – 2023</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Certifications */}
              <motion.div 
                className="mb-8 bg-gray-800/50 rounded-lg p-4 shadow-lg"
                variants={item}
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-400">
                  <FileBadge className="w-5 h-5" /> Certifications
                </h3>
                <table className="min-w-full text-lg">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 font-medium text-left">Certification</th>
                      <th className="py-3 font-medium text-left">Issued By</th>
                      <th className="py-3 font-medium text-left">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {/* MERN */}
                    <tr>
                      <td className="py-3 text-gray-300">MERN Stack Developer</td>
                      <td className="py-3 text-gray-300">Error Makes Clever</td>
                      <td className="py-3">
                        <div className="space-y-3">
                          <img
                            src={MERNPreview}
                            alt="MERN Stack Certificate"
                            className="w-full max-w-md h-40 object-contain rounded-lg shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          />
                          <a
                            href="/EMC%20MERN.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                            download="ErrorMakesClever_MERN_Certificate.pdf"
                          >
                            View Full Certificate (PDF)
                          </a>
                        </div>
                      </td>
                    </tr>

                    {/* Python */}
                    <tr>
                      <td className="py-3 text-gray-300">Python Full‑Stack Development</td>
                      <td className="py-3 text-gray-300">Guru Tech</td>
                      <td className="py-3">
                        <div className="space-y-3">
                          <img
                            src={PythonPreview}
                            alt="Python Certificate Preview"
                            className="w-full max-w-md h-40 object-contain rounded-lg shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          />
                          <a
                            href="/Abishek S Basic_Python_Full_stack_Certificate.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                          >
                            View Full Certificate (PDF)
                          </a>
                        </div>
                      </td>
                    </tr>

                    {/* Namaste JS */}
                    <tr>
                      <td className="py-3 text-gray-300">Namaste JavaScript Completion</td>
                      <td className="py-3 text-gray-300">Namaste Dev</td>
                      <td className="py-3">
                        <div className="space-y-3">
                          <img
                            src={NamastePreview}
                            alt="Namaste JavaScript Certificate Preview"
                            className="w-full max-w-md h-40 object-contain rounded-lg shadow hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                          />
                          <a
                            href="/Namaste_JavaScript_Certificate.pdf"
                            className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                          >
                            View Full Certificate (PDF)
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Internship */}
              <motion.div 
                className="mb-8 bg-gray-800/50 rounded-lg p-4 shadow-lg"
                variants={item}
              >
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3 text-blue-400">
                  <Briefcase className="w-5 h-5" /> Internships
                </h3>
                <table className="min-w-full text-lg">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 font-medium text-left">Role</th>
                      <th className="py-3 font-medium text-left">Duration</th>
                      <th className="py-3 font-medium text-left">Technologies</th>
                      <th className="py-3 font-medium text-left">Company</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr>
                      <td className="py-3 text-gray-300">
                        MERN Stack Intern – Full Stack Projects
                      </td>
                      <td className="py-3 text-gray-300">Aug 2024 – Sep 2024</td>
                      <td className="py-3 text-gray-300">React.js, Next.js, Tailwind CSS</td>
                      <td className="py-3">
                        <a
                          href="https://skillmate.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          Skillmate.ai
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Resume Download */}
              <motion.div
                variants={buttonVariants}
                className="mt-8 text-center md:text-left"
              >
                <motion.a
                  href="/Abishek_S_Resume.pdf"
                  download="Abishek_S_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <FaDownload className="text-lg" />
                  Download Resume
                </motion.a>
                <p className="mt-2 text-sm text-gray-400">
                  Includes complete work history, skills, and references
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}