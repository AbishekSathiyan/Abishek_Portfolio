import { GraduationCap, FileBadge, Briefcase } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

import Banner from "./assets/Banner.png";
import MERNPreview from "./assets/EMC MERN.png";
import PythonPreview from "./assets/Python_Preview.png";
import NamastePreview from "./assets/Namaste JavaScript.jpg";
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-light text-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 w-full flex justify-center">
            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={Banner}
                alt="Abishek S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3 w-full">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4 text-base">
              I'm a passionate frontend developer with 3 years of experience
              building responsive and user‑friendly web applications. I
              specialize in React, JavaScript, and modern CSS frameworks.
            </p>
            <p className="mb-6 text-base">
              My approach combines technical expertise with an eye for design to
              create seamless digital experiences that users love.
            </p>

            {/* Personal Info */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full text-sm text-left">
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <th className="pr-4 py-2 font-semibold">Name</th>
                    <td className="py-2">Abishek S</td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 font-semibold">Email</th>
                    <td className="py-2">
                      <a
                        href="mailto:abishek.sathiyan.2002@gmail.com"
                        className="text-blue-600 hover:underline break-all"
                      >
                        abishek.sathiyan.2002@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 font-semibold">From</th>
                    <td className="py-2">
                      Methalodai, Ramanathapuram, Tamil Nadu, India
                    </td>
                  </tr>
                  <tr>
                    <th className="pr-4 py-2 font-semibold">Experience</th>
                    <td className="py-2">
                      Fresher with hands‑on experience in real‑world projects
                      and modern web technologies.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Education */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-primary" /> Education
              </h3>
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Program</th>
                    <th className="py-2">Institution</th>
                    <th className="py-2">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <td className="py-2">
                      MCA – Master of Computer Applications
                    </td>
                    <td className="py-2">Karpagam University</td>
                    <td className="py-2">2023 – 2025</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      BCA – Bachelor of Computer Applications
                    </td>
                    <td className="py-2">
                      Caussanel College of Arts & Science
                    </td>
                    <td className="py-2">2020 – 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Certifications */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <FileBadge className="w-5 h-5 text-primary" /> Certifications
              </h3>
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Certification</th>
                    <th className="py-2">Issued By</th>
                    <th className="py-2">Certificate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {/* MERN */}
                 <tr>
  <td className="py-2">MERN Stack Developer</td>
  <td className="py-2">Error Makes Clever</td>
  <td className="py-2">
    <div className="space-y-2">
      <img
        src={MERNPreview}
        alt="MERN Stack Certificate"
        className="w-full max-w-md h-40 object-contain rounded shadow hover:hue-rotate-30 hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <a
        href="/EMC%20MERN.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-primary hover:underline"
        download="ErrorMakesClever_MERN_Certificate.pdf"
      >
        View Full Certificate (PDF)
      </a>
    </div>
  </td>
</tr>


                  {/* Python */}
                  <tr>
                    <td className="py-2">Python Full‑Stack Development</td>
                    <td className="py-2">Guru Tech</td>
                    <td className="py-2">
                      <div className="space-y-2">
                        <img
  src={PythonPreview}
  alt="Python Certificate Preview"
  className="w-full max-w-md h-40 object-contain rounded shadow hover:hue-rotate-30 hover:scale-105 transition-transform duration-300 cursor-pointer"
/>

                        <a
                          href="/Abishek S Basic_Python_Full_stack_Certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-primary hover:underline"
                        >
                          View Full Certificate (PDF)
                        </a>
                      </div>
                    </td>
                  </tr>

                  {/* Placeholder */}
                  <tr>
                    <td className="py-2">Namaste JavaScript Completion</td>
                    <td className="py-2">Namaste Dev</td>
                    <td className="py-2">
                      <div className="space-y-2">
                        <img
                          src={NamastePreview}
                          alt="Namaste JavaScript Certificate Preview"
                          className="w-full max-w-md h-40 object-contain rounded shadow hover:hue-rotate-30 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                        <a
                          href="/Namaste_JavaScript_Certificate.pdf"
                          className="inline-block text-primary hover:underline"
                        >
                          View Full Certificate (PDF)
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Internship */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary" /> Internships
              </h3>
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">Role</th>
                    <th className="py-2">Duration</th>
                    <th className="py-2">Technologies</th>
                    <th className="py-2">Company</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <td className="py-2">
                      MERN Stack Intern – Full Stack Projects
                    </td>
                    <td className="py-2">Aug 2024 – Sep 2024</td>
                    <td className="py-2">React.js, Next.js, Tailwind CSS</td>
                    <td className="py-2">
                      <a
                        href="https://skillmate.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Skillmate.ai
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <motion.a
                href="/Abishek_S_Resume.pdf"
                download="Abishek_S_Resume.pdf"
                className="inline-flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
              <p className="mt-2 text-sm text-gray-600">
                Includes complete work history, skills, and references
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
