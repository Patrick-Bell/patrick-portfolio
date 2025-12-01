import { DiReact, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub, FaGit } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostgresql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { SiCloudinary } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";





export const frontendSkills = [
    { name: 'React', icon: <DiReact />, desc: 'Frontend Framework', color: '#61DAFB' },
    { name: 'HTML', icon: <DiHtml5 />, desc: 'Markup Language', color: '#E34F26' },
    { name: 'CSS', icon: <DiCss3 />, desc: 'Styling Language', color: '#1572B6' },
    { name: 'JavaScript', icon: <DiJavascript1 />, desc: 'Programming Language', color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, desc: 'CSS Framework', color: '#38BDF8' },
    { name: 'Material UI', icon: <SiMui />, desc: 'UI Framework', color: '#007FFF' },
    { name: 'Bootstrap', icon: <FaBootstrap />, desc: 'CSS Framework', color: '#563D7C' },

];

export const backendSkills = [
    { name: 'Ruby', icon: <DiRuby />, desc: 'Backend Language', color: '#CC0000' },
    { name: 'Rails', icon: <SiRubyonrails />, desc: 'Web Framework', color: '#CC0000' },
    { name: 'Node.js', icon: <FaNodeJs />, desc: 'JavaScript Runtime', color: '#68A063' },
    { name: 'Express.js', icon: <FaNodeJs />, desc: 'Web Framework', color: '#000000' },
];

export const databaseSkills = [
    { name: 'PostgreSQL', icon: <SiPostgresql />, desc: 'Relational Database', color: '#336791' },
    { name: 'MongoDB', icon: <SiMongodb />, desc: 'NoSQL Database', color: '#47A248' },
];

export const toolsSkills = [
    { name: 'VS Code', icon: <VscVscode />, desc: 'Code Editor', color: '#007ACC' },
    { name: 'Postman', icon: <SiPostman />, desc: 'API Testing', color: '#FF6C37' },
    { name: 'Git', icon: <FaGit />, desc: 'Version Control', color: '#F1502F' },
    { name: 'GitHub', icon: <FaGithub />, desc: 'Code Repository', color: '#181717' },
    { name: 'Heroku', icon: <SiHeroku />, desc: 'Deployment', color: '#430098' },
    { name: 'NPM', icon: <ImNpm />, desc: 'Node Package Manager', color: '#CB3837' },
    { name: 'Cloudinary', icon: <SiCloudinary />, desc: 'Cloud-based Image & Video Management', color: '#3448C5' },
    { name: 'Render', icon: <SiRender />, desc: 'Cloud Hosting & Deployment', color: '#46E3B7' },
    { name: 'Stripe', icon: <FaCcStripe />,  desc: 'Online Payments & Financial Services',  color: '#635BFF' },
];

