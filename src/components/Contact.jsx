import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMaintenance, setShowMaintenance] = useState(false);

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

  if (showMaintenance) {
    return (
      <section id="contact" className="py-20 bg-dark text-light">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            {/* Maintenance Image from local assets */}
          <div className="mb-6 flex justify-center">
  <img
    src="/Maintance_mode.png"
    alt="Maintenance"
    className="w-48 h-48 object-contain"
  />
</div>


            <h3 className="text-2xl font-bold mb-4 text-primary">
              Server Under Maintenance
            </h3>
            <p className="mb-6">
              Our server is currently undergoing maintenance. Please try again
              later or reach out directly via email or WhatsApp for urgent
              inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:abishek.sathiyan.2002@gmail.com`}
                className="bg-gray-700 text-light px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Contact via Email
              </a>
              <button
                onClick={() => setShowMaintenance(false)}
                className="bg-primary text-dark px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Return to Form
              </button>
              <a
                href="https://wa.me/917092085864"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-light px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto text-center mb-12">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-primary text-xl">📍</div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Methalodai, Ramanathapuram, TamilNadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary text-xl">✉️</div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href={`mailto:abishek.sathiyan.2002@gmail.com?subject=${encodeURIComponent(
                      "Regarding Project Inquiry"
                    )}&body=${encodeURIComponent(
                      "Hello Abishek,\n\nI wanted to connect regarding Develop New Web Application."
                    )}`}
                    className="text-light hover:underline"
                  >
                    abishek.sathiyan.2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary text-xl">📱</div>
                <div>
                  <h4 className="font-semibold">Phone | WhatsApp</h4>
                  <a
                    href="https://wa.me/917092085864?text=Hello%20Abishek%2C%0A%0AI%20wanted%20to%20connect%20regarding%20Develop%20New%20Web%20Application."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:underline"
                  >
                    +91 7092085864
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/AbishekSathiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/abishek04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/entabilogist_abi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#e2183d] transition-colors"
              >
                <FaInstagram className="text-2xl" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-light border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  required
                  minLength={2}
                  maxLength={50}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-light border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact" className="block mb-2 text-gray-300">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-light border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  required
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number (10-15 digits)"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-light border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  required
                  minLength={5}
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-light border border-gray-700 focus:border-primary focus:outline-none transition-colors"
                  required
                  minLength={10}
                  maxLength={500}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
