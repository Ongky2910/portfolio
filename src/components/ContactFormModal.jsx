import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaSpinner, FaTimes } from "react-icons/fa"; // Import icon close

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(null);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_ne7hlja",
        "template_lkdfpuf",
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "PnI-9A4DFuZougtir"
      )
      .then(() => {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch(() => {
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      onClick={onClose} // Tutup modal jika klik di luar
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg p-6 w-full max-w-lg shadow-xl"
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutupnya
      >
        {/* Tombol Close "X" di pojok kanan atas */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">What's up?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#64ffda]"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg shadow-lg 
              hover:bg-[#52e0c4] transition transform hover:scale-105 disabled:opacity-50 flex justify-center items-center"
          >
            {isSending ? <FaSpinner className="animate-spin" /> : "Send Message"}
          </button>
        </form>

        {isSuccess === true && <p className="text-green-500 mt-3">✅ Email sent successfully!</p>}
        {isSuccess === false && <p className="text-red-500 mt-3">❌ Failed to send email.</p>}
      </motion.div>
    </div>
  );
};

export default ContactFormModal;
