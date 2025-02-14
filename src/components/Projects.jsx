import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useContext, useRef } from "react";
import { ThemeContext } from "../App";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project1 from "/assets/httpsongky-ong-m13056.vercel.app.png";
import project2 from "/assets/Project Portal Film.png";

const projects = [
  {
    id: 1,
    title: "To Do-List App",
    link: "https://github.com/Ongky2910/todo-list-apps",
    liveDemo: "https://ongky-ong-m13056.vercel.app/",
    stack: ["Full Javascript"],
    image: project1,
  },
  {
    id: 2,
    title: "Stream Flix - Online Movie",
    link: "https://github.com/Ongky2910/movie-portal-app",
    liveDemo: "https://ongkychills.vercel.app/",
    stack: ["React JS, Tailwind, Node.JS, Express.JS, MySQL"],
    image: project2,
  },
  {
    id: 3,
    title: "E-commerce",
    link: "https://github.com/Ongky2910/todo-list-apps",
    liveDemo: "https://ongky-ong-m13056.vercel.app/",
    stack: ["MongoDB, React & tailwind"],
    image: project1,
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  // Settings untuk react-slick (slider)
  const sliderSettings = {
    dots: true, // Tambah indikator di bawah
    infinite: true, // Biar looping terus
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Hanya satu slide terlihat
    slidesToScroll: 1, // Scroll satu-satu
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // 3 detik per slide
  };
  
  // Ref untuk mendeteksi apakah elemen terlihat atau tidak
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" }, 
    },
  };
  
  const flipIn = {
    hidden: { opacity: 0, rotateY: -90 }, 
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
    ref={ref}
    id="projects"
    className={`min-h-screen flex flex-col items-center justify-center text-center py-20 transition-all duration-500
      ${
        darkMode
          ? "bg-gradient-to-tl from-black to-gray-900 text-white"
          : "bg-gradient-to-tl from-white to-gray-100 text-black"
      }`}
  >
  
    <h2 className="text-4xl font-bold mb-8 underline-effect">My Projects</h2>

      {/* Desktop View (Grid) */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id} // Pakai id unik
            className={`relative p-6 border rounded-lg overflow-hidden text-center shadow-lg transition
              ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-300 bg-white"
              }`}
              variants={flipIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="relative w-full h-100 overflow-hidden rounded-lg">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {project.stack.join(", ")}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View (Slider) */}
      <div className="md:hidden w-full px-6">
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              <motion.div
                className="border rounded-lg overflow-hidden text-center shadow-lg transition
                  bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {project.stack.join(", ")}
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 bg-gray-700 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-300 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Projects;
