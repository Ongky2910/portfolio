import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import { ThemeContext } from "../App";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`min-h-screen py-20 flex flex-col items-center justify-center text-center ${
        darkMode
          ? "bg-gradient-to-tr from-gray-900 to-black text-white"
          : "bg-gradient-to-tr from-gray-100 to-white text-black"
      }`}
    >
      {/* About Me Title */}
      <div className="relative">
        <div
          className="absolute floating-icon left opacity-50 blur-md bg-primary rounded-full animate-float"
          style={{ top: "-70px", left: "-60px" }}
        ></div>
        <div
          className="absolute floating-icon right opacity-50 blur-md bg-[#64ffda] rounded-full animate-float"
          style={{ bottom: "-100px", right: "-50px" }}
        ></div>
        <motion.h2
          className="text-4xl font-bold mb-10"
          style={{ color: "64ffda !important" }}
          variants={fadeInUp}
        >
          About Me
          <hr className="border-gray-700 my-6"></hr>
        </motion.h2>
      </div>

      {/* Contact Address (Email, Instagram, WhatsApp) */}
      <motion.div
        className="flex flex-col items-center mb-7"
        variants={fadeInUp}
      >
        <div className="flex gap-6">
          {/* Email */}
          <a
            href="mailto:ongkypermana21@gmail.com"
            className="text-gray-400 hover:text-red-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail size={30} />
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
      </motion.div>

      {/* About Me Text */}
      <motion.p
        className="text-lg max-w-2xl leading-relaxed px-6 text-gray-800 dark:text-gray-200 font-medium "
        variants={fadeInUp}
      >
        I’m a
        <strong className="bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent drop-shadow-lg">
          {" "}
          Passionate Full-Stack Developer{" "}
        </strong>
        with a strong interest in modern web development. I love building
        <strong className="bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg font-bold">
          {" "}
          dynamic, interactive, and scalable{" "}
          <span className="bg-gradient-to-l from-yellow-400 to-orange-300 bg-clip-text drop-shadow-2xl text-transparent">
            applications{" "}
          </span>
        </strong>
        using the latest technologies. Over the past year, I've been sharpening
        my skills in
        <strong className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          {" "}
          React, Node.js, and MongoDB
        </strong>
        .
        <br />
        <br />
        My journey in tech started with curiosity, and over time I have
        continued to grow. I’m always excited to
        <strong className="bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent drop-shadow-md font-extrabold shadow-md dark:shadow-none">
          {" "}
          learn new technologies
        </strong>
        ,
        <strong className="bg-gradient-to-r bg-clip-text drop-shadow-lg shadow-md ">
          {" "}
          enjoy solving problems, optimizing performance
        </strong>
        , and bringing creative ideas
        <strong className="bg-gradient-to-r from-green-300 to-primary bg-clip-text text-transparent drop-shadow-lg shadow-md">
          {" "}
          through code
        </strong>
        .
      </motion.p>

      {/* Tech Stack */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-6">
        {[
          {
            icon: <FaReact className={`text-4xl mb-2 ${darkMode ? "text-gray-400" : "text-blue-500"}`} />,
            title: "Frontend",
            skills: "React, Tailwind",
            className: "react",
          },

          {
            icon: <FaNodeJs className={`text-4xl mb-2 ${darkMode ? "text-gray-400" : "text-green-600"}`} />,
            title: "Backend",
            skills: "Node.js, Express",
            className: "node,"
          },
          {
            icon: <FaDatabase className={`text-4xl mb-2 ${darkMode ? "text-gray-400" : "text-yellow-600"}`} />,
            title: "Database",
            skills: "MongoDB, SQL",
            className: "database",
          },
          {
            icon: <FaTools className={`text-4xl mb-2 ${darkMode ? "text-gray-400" : "text-red-600"}`} />,
            title: "Tools",
            skills: "Git, Docker",
            className: "tools",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`futuristic-border ${item.className}`}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <span className="font-semibold text-gray-200">
              {item.title}
            </span>

    <p className="text-sm text-gray-200 dark:text-gray-400">{item.skills}</p>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
