import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../pages/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const fadeInVariants = {
  initial: { opacity: 0, y: 50, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Hero />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Projects />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Contact />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
