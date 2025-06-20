import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// ✅ Local image assets
import BulkMailAsset from "./assets/Bulk_Mail.png";
import WeatherAsset from "./assets/Weather_App.png";
import TaskManagerAsset from "./assets/Task_Manager.png";

const projects = [
  {
    id: 1,
    title: "Bulk Mail System",
    description:
      "A full-stack Bulk Email Sending Application designed to efficiently manage and send customized emails to multiple recipients using an Excel sheet filled with recipient details. Built with React.js, Node.js, Express, and MongoDB, the app allows users to compose messages, manage contact lists, and track email history. It features real-time validation, a responsive design, and a robust backend email service powered by Nodemailer.",
    technologies: ["React", "Tailwind CSS", "Node JS", "Express", "MongoDB"],
    githubLink: "https://github.com/AbishekSathiyan/Bulk-Mail-System",
    demoLink: "https://bulk-mail-front-end.vercel.app/login",
    image: BulkMailAsset,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A responsive and user-friendly weather application built with React.js and Tailwind CSS, integrating the OpenWeatherMap API to deliver real-time weather updates. Users can search for any city worldwide and instantly view current weather conditions, including temperature, weather description, and condition icons. The app features a clean interface, smooth UI interactions, and responsive design optimized for both desktop and mobile devices.",
    technologies: [
      "React",
      "Tailwind CSS",
      "OpenWeather API",
      "Axios",
      "Geolocation API",
    ],
    githubLink: "https://github.com/AbishekSathiyan/Weather_React_App",
    demoLink: "https://weather-react-app-two-theta.vercel.app/",
    image: WeatherAsset,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A full-featured task manager with drag-and-drop functionality, task categories, and progress tracking. The app allows users to create, organize, and update tasks across multiple stages such as To-Do, In Progress, and Completed. Built with React and Tailwind CSS, it supports persistent local storage, responsive UI, and intuitive task interactions for improved productivity. Users can easily add, edit, and delete tasks, making it a versatile tool for personal and team project management.",
    technologies: ["React", "Tailwind CSS", "Local Storage", "React Icons"],
    githubLink: "https://github.com/AbishekSathiyan/Task_Manager_React",
    demoLink: "https://task-manager-react-10.vercel.app/",
    image: TaskManagerAsset,
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const cardHover = {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  };

  const imageHover = {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const techTagHover = {
    y: -3,
    scale: 1.05,
    backgroundColor: "rgba(96, 165, 250, 0.3)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 12,
    },
  };

  const linkHover = {
    x: 5,
    color: "#3b82f6",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Professional projects showcasing full-stack development capabilities
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={cardHover}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={imageHover}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={techTagHover}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={linkHover}
                  >
                    <FiGithub className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demoLink}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={linkHover}
                  >
                    <FiExternalLink className="mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
