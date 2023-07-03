import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaReact, FaJsSquare, FaCss3, FaHtml5, } from "react-icons/fa";

const Media = () => {

  function handleLinkdin() {
    const linkedinUrl = 'https://www.linkedin.com/in/hrishikesh-shinde-5b1532226/';

    window.open(linkedinUrl);
  }

  function handleGit(){
    const giturl='https://github.com/HrishikeshShinde3'
    window.open(giturl);
  }
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span onClick={handleLinkdin} className="bannerIcon">
            <FaLinkedinIn />
          </span>
         
          <span onClick={handleGit} className="bannerIcon">
            <FaGithub />
          </span>

          <span className="bannerIcon">
            <FaInstagram />
          </span>


        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaJsSquare />
          </span>
          <span className="bannerIcon">
            <FaCss3 />
          </span>
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <br/>
         

        </div>
      </div>
    </div>
  )
}

export default Media