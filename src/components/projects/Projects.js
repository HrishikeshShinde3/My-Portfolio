import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROJECTS AND GIVE YOUR VALUABLE FEEDBACK "
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YouTube App CLONE"
          des="Make a YouTube lite as personal project to enhance my knowledge in Web Development Field. Basically, in this project I made copy of YouTube and tried to make same UI & functionality also. For the same I used React JS, APIs (Rapid Api), Tailwind CSS for the Successfully completion of the project.
          "
          src={projectOne}
          githubLink="https://github.com/HrishikeshShinde3/youtube_lite/branches"
          deplotmentLink="https://hrishikesh-youtube-lite.netlify.app"
        />
        <ProjectsCard
          title="Kanban Board"
          des=" Kanban boards visually depict work at various stages of a process using cards to represent work items and columns to represent each stage of the process. I use React JS, CSS, Drag and Drop (DNS), MUI (Material UI), Router for the successfully completion of the Kanban Board"
          src={projectTwo}
          githubLink="https://github.com/HrishikeshShinde3/Kanban-Final/branches"
          deplotmentLink="https://hrishikesh-kanban-board.netlify.app"
        />
        <ProjectsCard
          title="Twitter Clone"
          des=" This project includes the features like User-friendly interface for easy tweets creation and management. Sign-Up & Log-In with valid information. Tweet Or Post After login. For each tweet give functionality of Like, Reply To Tweet, Retweet, Share."
          src={projectThree}
          githubLink="https://github.com/HrishikeshShinde3/My-All-React-Projects/tree/all-done-fri-15-54"
          deplotmentLink=""
        />

        
      </div>
    </section>
  );
}

export default Projects