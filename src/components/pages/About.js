import { useState } from "react";
import { Box, Typography, Button, Avatar, Tooltip, Divider, Grid, useMediaQuery } from "@mui/material";
import { backendSkills, databaseSkills, frontendSkills, toolsSkills } from "../api/skills";
import image1 from '../assets/project1.png'
import image2 from '../assets/project3.png'
import Stagger from "../animations/Stagger";
import Technologies from "./Technologies";
import TextTransition from "../animations/TextTransition";
import TypingEffect from "../animations/TextAppear";
import { feedback } from "../api/feedback";
import FeedbackCard from "../utils/FeedbackCard";
import WaveAnimation from "../animations/WaveAnimation";
import { useColorContext } from "../context/ColorContext";


const AboutMe = () => {
 
  const jobTitles = ['Web Developer', 'Full-Stack Developer', 'Frontend Developer']
  const { color } = useColorContext()


  
  return (
   <>
        {/* Content */}
        <Box sx={{ mt: 3}}>
        <WaveAnimation />
        <TextTransition jobs={jobTitles} />
        <Typography variant="subtitle2" sx={{mt:1, lineHeight:1.8, color:'grey'}}>I have built <strong style={{color: color}}>two</strong> real-world projects from scratch, handling everything from design to deployment. These projects allowed me to develop a strong foundation in both front-end and back-end technologies. On the front-end, I’ve worked extensively with <strong style={{color:color}}>HTML</strong>, <strong style={{color:color}}>CSS</strong>, <strong style={{color:color}}>JavaScript</strong>, and modern frameworks like <strong style={{color:color}}>ReactJS</strong>. On the back-end, I have hands-on experience with server-side technologies like <strong style={{color:color}}>Ruby</strong>, <strong style={{color:color}}>Ruby on Rails</strong>, <strong style={{color:color}}>NodeJS</strong>, <strong style={{color:color}}>ExpressJS</strong>, and databases such as <strong style={{color:color}}>PostgreSQL</strong> and <strong style={{color:color}}>MongoDB</strong>. Through these experiences, I’ve honed my ability to troubleshoot, optimize performance, and create responsive, full-stack applications that deliver seamless user experiences.</Typography>
        <Typography variant="subtitle2" sx={{mt:1, lineHeight:1.8, color:'grey'}}>I thrive on solving problems, learning new technologies, and continuously improving my craft. Now, I’m looking for an opportunity to apply my skills in a professional environment, collaborate with a team, and keep growing as a developer.</Typography>

          <Box sx={{mt:3,}}>
          <Typography fontSize={'24px'} fontWeight={800} sx={{mb:2}}>Testimonials</Typography>
          <Grid container spacing={2}>
          {feedback.map((f, i) => (
            <Grid item xs={12} md={6}>
              <Stagger index={i}>
            <FeedbackCard review={f.review} name={f.name} job={f.job} image={f.image} />
          </Stagger>
            </Grid>
          ))}
          </Grid>
          </Box>



          <Box sx={{mt:3}}>
          <Typography fontSize={'24px'} sx={{mb:2}} fontWeight={800}>Technologies</Typography>
          
          <Technologies />

          </Box>
        </Box>
    </>
  );
};

export default AboutMe;
