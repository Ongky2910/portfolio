import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GlowingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full bg-black/30" 
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -5 }, 
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: "#ffcc00" }, 
          opacity: {
            value: 0.7,
            anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
          },
          size: {
            value: 6,
            random: true,
            anim: { enable: true, speed: 3, size_min: 2, sync: false },
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: true,
          },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
          },
        },
        modes: {
          bubble: { distance: 200, size: 10, duration: 2, opacity: 0.5 },
        },
      }}
    />
  );
};

export default GlowingParticles;
