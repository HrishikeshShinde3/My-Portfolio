import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder", "Frontend Web Developer", "UI Designer", "React Developer"],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });

    function handleIntroVideo(){
      const introVideourl = 'https://drive.google.com/drive/u/0/folders/1DMPzess5bZ4Oe8sVJ56J8QH4fqVgtYVB';

      window.open( introVideourl);
    }

    function handleResumepdf(){
      const resumePdf = 'https://drive.google.com/file/d/12ThZ35LMx2AkqI8PhWrw3Q60yGEeW1_O/view?usp=sharing';

      window.open( resumePdf);

    }



  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm<br/> <span className="text-designColor capitalize">Hrishikesh Shinde</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I enjoy creating delightful,human centered digital experiences & create effective front-end user interfaces.
        </p>
      </div>
     {/* Media */}
     <Media />
     <span onClick={handleIntroVideo} className="cursor-pointer text-designColor"><b>INTRO-VIDEO &</b> <b onClick={handleResumepdf}>RESUME LINK</b></span>
      
    </div>
  );
}

export default LeftBanner