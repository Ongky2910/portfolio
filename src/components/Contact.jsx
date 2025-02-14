import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import ContactFormModal from "./ContactFormModal"; // Import Modal

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="contact"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`min-h-screen flex flex-col items-center justify-center text-center p-6 
       
    ${
      darkMode
        ? "bg-gradient-to-bl from-black to-gray-900 text-white"
        : "bg-gradient-to-bl from-white to-gray-100 text-black"
    }`}
    >
      <h2 className="text-4xl font-bold mb-6 text-[#64ffda]">Let's Connect!</h2>
      <motion.p
        className="text-lg max-w-2xl leading-relaxed px-6 text-gray-900 dark:text-gray-600 font-medium mb-5 "
        variants={fadeInUp}
      >
        If you have any questions about my services, or just want to say hello?{" "}
        <br />
        Feel free to connect with me.
      </motion.p>
      {/* Social Icons */}
      <div className="flex gap-6 text-3xl">
        <a
          href="mailto:ongkypermana21@gmail.com"
          className="hover:text-[#64ffda] transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Ongky2910"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ongky-permana-882099315/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#64ffda] transition"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ongky_ongg"
          className="text-gray-400 hover:text-red-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6281343607827"
          className="text-gray-400 hover:text-green-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} />
        </a>
        {/* Telegram */}
        <a
          href="https://t.me/+6281343607827"
          className="text-gray-400 hover:text-blue-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={30} />
        </a>
      </div>

      {/* 🚀 BUTTON WITH EFFECTS */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative mt-5 z-10 px-6 py-3 font-extrabold tracking-widest uppercase rounded-full
    text-black dark:text-[#64ffda] !important
    bg-gradient-to-r from-primary via-secondary to-accent
    hover:from-accent hover:via-secondary hover:to-primary
    transition-transform duration-300 ease-in-out transform hover:scale-110
    border-2 border-[#42c5f5] shadow-[0_0_10px_#42c5f5] dark:shadow-[0_0_25px_#64ffda]
    before:blur-sm before:absolute before:inset-0 before:rounded-full
    before:border-2 before:border-transparent before:animate-laser-glow"
      >
        🚀 TOUCH ME
      </button>

      {/* MODAL */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

export default Contact;
