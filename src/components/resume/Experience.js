import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">EXPERIENCE</h2>

          <p className="text-sm text-designColor tracking-[4px]"><b>March 2023 - Present</b></p>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Web Developer"
            subTitle="FunctionUp : (March 2023-Present)"
            result="Noida, India"
            des="FunctionUp coding bootcamp give a training for upskilling in frontend web technologies like React JS, JavaScript, CSS & HTML5"
          />
          <ResumeCard
            title="Certification of Basic Coding"
            subTitle="Profound Edutech : (September 2022 - December 2022)"
            result="Nashik, Maharashtra"
            des="In Profound Edutech I build my strong base in coding knowledge "
          />
         
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
