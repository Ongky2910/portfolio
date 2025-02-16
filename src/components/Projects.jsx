import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiVercel,
} from "react-icons/si";
import { useContext, useRef } from "react";
import { ThemeContext } from "../App";
import { useInView } from "react-intersection-observer";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import gambar dengan path yang benar
import project1 from "/assets/httpsongky-ong-m13056.vercel.app.png";
import project2 from "/assets/Project Portal Film.png";
import project3 from "/assets/heroportfolio.png";
import project3b from "/assets/lightmodeportfolio.png";
import project3c from "/assets/darkmodeportfolio.png";
import project3d from "/assets/mobileviewportfolio.png";

const projects = [
  {
    id: 1,
    title: "To Do-List App",
    link: "https://github.com/Ongky2910/todo-list-apps",
    liveDemo: "https://ongky-ong-m13056.vercel.app/",
    stack: [
      { component: <SiJavascript />, color: "text-yellow-400" },
      { component: <SiVercel />, color: "text-black" },
    ],
    image: project1,  
  },
  {
    id: 2,
    title: "Stream Flix - Online Movie",
    link: "https://github.com/Ongky2910/movie-portal-app",
    liveDemo: "https://ongkychills.vercel.app/",
    stack: [
      { component: <FaReact />, color: "text-blue-500" },
      { component: <SiTailwindcss />, color: "text-blue-400" },
      { component: <FaNodeJs />, color: "text-green-600" },
      { component: <SiMysql />, color: "text-blue-700" },
    ],
    image: project2, 
  },
  {
    id: 3,
    title: "Self-Portfolio",
    link: "https://github.com/Ongky2910/portfolio/tree/main",
    liveDemo: "https://portfolio-five-theta-46.vercel.app/",
    stack: [
      { component: <SiMongodb />, color: "text-green-500" },
      { component: <FaReact />, color: "text-blue-500" },
      { component: <SiTailwindcss />, color: "text-blue-400" },
      { component: <FaNodeJs />, color: "text-green-600" },
      { component: <FaDatabase />, color: "text-yellow-400" },
    ],
    images: [project3, project3b, project3c, project3d],
  },
  {
    id: 4,
    title: "E-commerce",
    link: "https://github.com/Ongky2910/todo-list-apps",
    liveDemo: "https://ongky-ong-m13056.vercel.app/",
    stack: [
      { component: <SiMysql />, color: "text-blue-700" },
      { component: <FaReact />, color: "text-blue-500" },
    ],
    image: project1, // Gambar tunggal
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  // Settings for react-slick (slider)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
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
    hidden: { opacity: 0, rotateY: -90 }, // Mulai terbalik
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center text-center py-20 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-tl from-black to-gray-900 text-white"
          : "bg-gradient-to-tl from-white to-gray-100 text-black"
      }`}
    >
      <h2 className="text-4xl font-bold mb-8 underline-effect">My Projects</h2>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`relative p-6 border rounded-lg overflow-hidden text-center shadow-lg transition ${
              darkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-300 bg-white"
            }`}
            variants={flipIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              {/* Jika ada images, gunakan Slider untuk gambar-gambar tersebut */}
              {project.images ? (
                <Slider {...sliderSettings}>
                  {project.images.map((image, index) => (
                    <div key={index} className="w-full h-64">
                      <LazyLoadImage
                        src={image}
                        alt={`Project Image ${index + 1}`}
                        effect="blur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                // Jika hanya ada gambar tunggal, tampilkan gambar tersebut
                <img
                  src={project.image}
                  alt={`Project ${project.title}`}
                  className="w-full h-64 object-cover"
                />
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">
                {/* Render Tech Stack Icons with Colors */}
                <div className="flex justify-center gap-2">
                  {project.stack.map((tech, index) => (
                    <span key={index} className={`text-3xl ${tech.color}`}>
                      {tech.component}
                    </span>
                  ))}
                </div>
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
      {/* Mobile View */}
      <div className="md:hidden w-full px-4">
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative p-6 border rounded-lg overflow-hidden text-center shadow-lg transition ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-300 bg-white"
              }`}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg">
                {/* Jika ada images, gunakan Slider untuk gambar-gambar tersebut */}
                {project.images ? (
                  <Slider {...sliderSettings}>
                    {project.images.map((image, index) => (
                      <div key={index} className="w-full h-48">
                        <img
                          src={image}
                          alt={`Project Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  // Jika hanya ada gambar tunggal, tampilkan gambar tersebut
                  <img
                    src={project.image}
                    alt={`Project ${project.title}`}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-400">
                  {/* Render Tech Stack Icons with Colors */}
                  <div className="flex justify-center gap-2">
                    {project.stack.map((tech, index) => (
                      <span key={index} className={`text-3xl ${tech.color}`}>
                        {tech.component}
                      </span>
                    ))}
                  </div>
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
        </Slider>
      </div>
    </motion.section>
  );
};

export default Projects;
