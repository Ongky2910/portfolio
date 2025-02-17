import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { ThemeContext } from "../App";
import useActiveSection from "../hooks/useActiveSection";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa"; 

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const activeSection = useActiveSection([
    "home",
    "about",
    "projects",
    "contact",
  ]);
  

  return (
    <motion.section
      id="home"
      key={activeSection}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 transition-all duration-500
        ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 to-black text-white"
            : "bg-gradient-to-br from-gray-100 to-white text-black"
        }`}
    >
      <Helmet>
        <title>Ongky | Full-Stack Developer</title>
        <link rel="icon" type="image/png" href="/assets/mern.png" />
      </Helmet>

      {/* Left Side (Text) */}
      <div className="md:w-1/2">
        <motion.h1
          className="text-5xl font-extrabold z-10 transition-all duration-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-700"}>
            Ongky.
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl mt-3 z-10 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
       <Typewriter
        words={[
          "Full-Stack Developer",
          "Building the Future with Code",
          "Tech Enthusiast",
          "Lifelong Learner",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={120}  
        deleteSpeed={50} 
        delaySpeed={2000} 
      />
    </motion.h2>

{/* Lokasi & Status Ketersediaan */}
<motion.div
          className="mt-4 flex flex-col md:flex-row md:items-center gap-4 text-lg text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Lokasi */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <span>Manado, Indonesia</span>
          </div>

          {/* Status Pekerjaan */}
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-green-500 text-xl" />
            <span>Available for remote & local work </span>
          </div>
        </motion.div>

        <motion.a
          href="#projects"
          className={`px-10 py-3 rounded-lg text-lg z-10 transition font-semibold shadow-md relative top-20
            ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-700 hover:bg-blue-500 text-white"
            }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          View My Projects ✨
        </motion.a>
      </div>

      {/* Right Side (Image) */}
      <motion.img
        src="/assets/WhatsApp Image 2025-02-12 at 03.16.52.jpeg" 
        alt="Ongky"
        className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </motion.section>
  );
};

export default Hero;
