import { useState, useEffect, useRef } from "react";
import { throttle } from "lodash";


const useActiveSection = (sections, threshold = 0.1) => {
  const [activeSection, setActiveSection] = useState("");
  const lastActiveSection = useRef("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold,
    };

    const handleIntersection = throttle((entries) => {
      let visibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection && visibleSection !== lastActiveSection.current) {
        lastActiveSection.current = visibleSection;
        setActiveSection(visibleSection);
      }
    }, 200); // Throttle 200ms

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections, threshold]);

  return activeSection;
};

export default useActiveSection;
