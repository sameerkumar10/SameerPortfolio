import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";


const Tech = () => {
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
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
