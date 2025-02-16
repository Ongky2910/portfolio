import { useEffect, useState, useContext } from "react";
import { Link } from "react-scroll";
import useActiveSection from "../hooks/useActiveSection";
import { motion } from "framer-motion";
import { Hand, Sun, Moon, Menu, X } from "lucide-react";
import ContactFormModal from "./ContactFormModal";
import { ThemeContext } from "../App";

const sections = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const activeSection = useActiveSection(sections);
  const [lastActive, setLastActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gunakan useContext untuk mendapatkan darkMode dan setDarkMode
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (activeSection) setLastActive(activeSection);
  }, [activeSection]);

  return (
    <>
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-8 py-3 rounded-full shadow-lg flex justify-between items-center w-[90%] max-w-[900px] border border-gray-700 z-50"
      >
        {/* Navbar Links */}
        <div className="hidden md:flex gap-6">
          {sections.map((section) => (
            <div key={section} className="relative">
              <Link
  href={`#${section}`} // Ganti `to={section}` dengan `href`
  className={`cursor-pointer text-lg transition-all duration-500 ${
    activeSection === section
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold"
      : "hover:text-blue-400 text-gray-400"
  }`}
>
  {section.charAt(0).toUpperCase() + section.slice(1)}
</Link>


              {/* Underline Animation */}
              {activeSection === section && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right Side (Dark Mode + Button) */}
        <div className="flex items-center gap-4">
          {/* Contact Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex px-4 py-2 text-lg font-semibold text-gray-700 dark:text-white hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Touch Me
          </motion.button>

          {/* Mobile Contact Button (Hanya Icon) */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="md:hidden p-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Hand className="w-5 h-5 text-white" />
          </motion.button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition hover:scale-110"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-full bg-gray-700 text-white hover:bg-gray-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 right-0 w-48 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col space-y-4"
          >
            {sections.map((section) => (
              <div key={section} className="relative">
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-semibold transition-all duration-300 ${
                    activeSection === section
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
