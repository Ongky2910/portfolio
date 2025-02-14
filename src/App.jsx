import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import useActiveSection from "./hooks/useActiveSection";


export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={
          darkMode
            ? "bg-black text-white relative"
            : "bg-white text-black relative"
        }
      >
        <HelmetProvider>
          <Router>
            {/* 🔥 Tambahkan div pembungkus supaya tidak menutupi elemen lain */}
            <div className="absolute inset-0 ">
              <GlowingParticles />
            </div>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <AnimatedRoutes />
          </Router>
        </HelmetProvider>
      </div>
    </ThemeContext.Provider>
  );
}

// ✅ Perbaikan AnimatePresence agar lebih smooth tanpa flicker
function AnimatedRoutes() {
  const location = useLocation();
  const sectionIds = ["home", "about"];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
  }, [activeSection]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home activeSection={activeSection} />} />
        <Route
          path="/home"
          element={<Home activeSection={activeSection} />}
        />{" "}
        {/* Tambahkan rute ini */}
        <Route
          path="/about"
          element={<About activeSection={activeSection} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
