import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to detect if the device is a mobile device
    const detectMobile = () => {
      return window.innerWidth <= 768; // You can adjust this threshold as needed
    };

    // Update the state when the component mounts
    setIsMobile(detectMobile());

    // Add event listener to update state when window is resized
    const handleResize = () => {
      setIsMobile(detectMobile());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionSubText} p-7 text-center`}>
            My TechStacks
          </h3>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {isMobile ? (
              // Render only the image URL in mobile version
              <img src={technology.icon} alt={technology.name} />
            ) : (
              // Render BallCanvas component in desktop version
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

