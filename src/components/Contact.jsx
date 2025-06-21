import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);
  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (showMaintenance) {
      // Initialize speech synthesis
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = "Sorry for the interruption. Our server is under maintenance. Please try again later or reach out directly via email or WhatsApp for urgent inquiries.";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      // Store the utterance in the ref so we can cancel it later
      speechSynthesisRef.current = utterance;
      
      // Speak the message
      window.speechSynthesis.speak(utterance);
      
      // Cleanup function to cancel speech when component unmounts or maintenance mode is closed
      return () => {
        window.speechSynthesis.cancel();
      };
    }
  }, [showMaintenance]);

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
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowMaintenance(true);

      // Reset form after showing maintenance message
      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReturnToForm = () => {
    // Cancel any ongoing speech when returning to form
    window.speechSynthesis.cancel();
    setShowMaintenance(false);
  };

  if (showMaintenance) {
    return (
      <section
        id="contact"
        className="min-h-screen py-20 flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden"
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

        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex justify-center">
              <img
                src="/Maintance_mode.png"
                alt="Maintenance"
                className="w-48 h-48 object-contain"
              />
            </div>

            <motion.h3
              className="text-2xl font-bold mb-4 text-blue-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Server Under Maintenance
            </motion.h3>
            <motion.p
              className="mb-6 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our server is currently undergoing maintenance. Please try again
              later or reach out directly via email or WhatsApp for urgent
              inquiries.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={`mailto:abishek.sathiyan.2002@gmail.com`}
                className="flex items-center gap-2 bg-gray-700 text-gray-100 px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiOutlineMail className="text-xl" />
                Contact via Email
              </motion.a>
              <motion.button
                onClick={handleReturnToForm}
                className="bg-blue-500 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Return to Form
              </motion.button>
              <motion.a
                href="https://wa.me/917092085864"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-gray-100 px-6 py-2 rounded-lg font-medium hover:bg-green-500 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 relative overflow-hidden"
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={container}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-center"
            variants={item}
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-center mb-12 text-lg text-gray-300"
            variants={item}
          >
            Have a project in mind or want to chat? Feel free to reach out!
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
              variants={item}
            >
              <motion.h3
                className="text-2xl font-semibold mb-6 text-blue-400"
                variants={item}
              >
                Contact Information
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  variants={item}
                >
                  <div className="text-blue-400 text-xl mt-1">📍</div>
                  <div>
                    <h4 className="font-medium text-gray-100">Location</h4>
                    <p className="text-gray-300">
                      Methalodai, Ramanathapuram, TamilNadu, India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  variants={item}
                >
                  <div className="text-blue-400 text-xl mt-1">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Email</h4>
                    <a
                      href={`mailto:abishek.sathiyan.2002@gmail.com?subject=${encodeURIComponent(
                        "Regarding Project Inquiry"
                      )}&body=${encodeURIComponent(
                        "Hello Abishek,\n\nI wanted to connect regarding Develop New Web Application."
                      )}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      abishek.sathiyan.2002@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  variants={item}
                >
                  <div className="text-blue-400 text-xl mt-1">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Phone | WhatsApp</h4>
                    <a
                      href="https://wa.me/917092085864?text=Hello%20Abishek%2C%0A%0AI%20wanted%20to%20connect%20regarding%20Develop%20New%20Web%20Application."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      +91 7092085864
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                variants={item}
              >
                <motion.a
                  href="https://github.com/AbishekSathiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/abishek04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-xl" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/entabilogist_abi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="text-xl" />
                  <span>Instagram</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
              variants={item}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    minLength={2}
                    maxLength={50}
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block mb-2 text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="contact" className="block mb-2 text-gray-300">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    pattern="[0-9]{10,15}"
                    title="Please enter a valid phone number (10-15 digits)"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="subject" className="block mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    minLength={5}
                    maxLength={100}
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    minLength={10}
                    maxLength={500}
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-blue-500 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-400 transition-colors w-full"
                  disabled={isSubmitting}
                  variants={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}