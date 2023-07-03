import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006-2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's Degree(BE) In Mechanical Engineering"
            subTitle="Savitribai Phule University, Pune"
            result="75%"
            des="Course Duration : 2018-2022"
          />
          <ResumeCard
            title="HSC (Higher Secondary Certificate) "
            subTitle="Shramik Junior College, Sangmner"
            result="62.73%"
            des="Course Duration : 2016-2018"
          />
          <ResumeCard
            title="SSC(Secondary School Certificate )"
            subTitle="S B H High School, Sinnar"
            result="83.20%"
            des="Course Duration : 2006-2016"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">March 2023- Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">EXPERIENCE</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Web Developer"
            subTitle="FunctionUp : (March 2023-Present)"
            result="Noida, India"
            des="FunctionUp coding bootcamp give a training to me for upskilling myself in frontend web technologies like React JS, JavaScript, CSS & HTML5"
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
}

export default Education