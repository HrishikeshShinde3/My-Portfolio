import { FaHome } from "react-icons/fa";
import {AiTwotoneSwitcher} from "react-icons/ai"
import { RiSuitcaseFill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { MdMail } from "react-icons/md";
export const navLinksdata = [
  {
    
    _id: 1001,
    
    title: <FaHome size={38} />,
    link: "home",
    
  },
  {
    _id: 1002,
    title: <AiTwotoneSwitcher size={35}/>,
    link: "features",
  },
  {
    _id: 1003,
    title: <RiSuitcaseFill size={38}/>,
    link: "projects",
  },
  {
    _id: 1004,
    title:<GiNotebook size={38}/>,
    link: "resume",
  },
  
  {
    _id: 1006,
    title:<MdMail size={38}/>,
    link: "contact",
  },
];

