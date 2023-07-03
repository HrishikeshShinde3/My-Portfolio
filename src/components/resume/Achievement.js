import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-4xl font-bold">ACHIEVEMENTS</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Selected in Wipro as a Project Engineer"
            subTitle="Project Engineer"
            des="In my final semester itself i got selected in Wipro as a project engineer. I applied off campus to this drive and clear all rounds of coding and interviews"
            result="SUCCESSS"
            
          />
          <ResumeCard
            title="Selected in Infosys as a System Engineer"
            subTitle="System Engineer"
            des="In a last semester I have applied to Infosys via off campus. In the hiring process of Infosys I cleared round Aptitude assessment, Coding round & Interview round respectively"
            result="SUCCESSS"
            
          />
          <ResumeCard
            title="Youtube_Lite Project"
            subTitle="Make  YouTube Clone as My Personal Project."
            des="This project challenged me to apply my Frontend Web Development skills, combining React JS for the structure, Tailwind-CSS for styling, and JavaScript for interactivity. It allowed me to gain a deeper understanding of these foundational web technologies while honing my problem-solving abilities."
            result="SUCCESSS"
            
          />
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Achievement;
