import { backendSkills, databaseSkills, frontendSkills, toolsSkills } from "../api/skills";
import image1 from '../assets/project1.png'
import image2 from '../assets/project3.png'
import { Typography, Box, Card, CardContent, CardMedia, Divider, CardActionArea, Button, Grid } from '@mui/material';
import { projects } from '../api/projects';
import Image1 from '../assets/fiortech-hero.png';
import Image2 from '../assets/copykit-hero.png';
import Image3 from '../assets/cart-heor.png';
import Image4 from '../assets/cointology-hero.png';
import Image5 from '../assets/qr-scanner-hero.png';
import Image6 from '../assets/construction.png'
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";
import Reveal from "../animations/Reveal";


const ProjectsPage = ({ setSelectedProject, color }) => {


  const navigate = useNavigate()

  const decideImage = (name) => {
    switch (name) {
      case 'Admin Dashboard':
        return Image3;
      case 'CopyKit':
        return Image2;
      case 'Fiortech':
        return Image1;
      case 'Cointology':
        return Image4;
      case 'QRLite':
        return Image5;
      default:
      case 'Coming Soon...':
        return Image6;
    }
  };


  const handleProjectClick = (project) => {
    
    setSelectedProject(project)
    window.scrollTo({ top: 0})
  }

  const handleGitHub = () => {
    window.open('https://github.com/Patrick-Bell', '_blank')
  }


  return (
    <>

        {/* Content */}
        <Box sx={{ mt: 3}}>
        <Typography variant="subtitle2" sx={{mt:1, lineHeight:1.8, color:'grey'}}>
          I have built over <strong style={{color:color}}>50</strong> projects whilst learning to code and these can be found on my <span style={{cursor:'pointer', color:color}} onClick={() => handleGitHub()}><strong>GitHub</strong></span>. Here are my top
          <strong style={{color:color}}> 5</strong> projects that are either (1) being actively used by companies/users or (2) closely mimic real-world applications. I have also included
          a final project that is still in progress.
        </Typography>


        <Grid container spacing={3} sx={{mt:1}}>
      {projects.map((project, i) => (
        <Grid item xs={12} sm={6}>
         <Reveal index={i}>
        <Card
          key={i}
          sx={{
            width: '100%', // Controlled width
            height:'70%',
            borderRadius: '10px',
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
            padding: 0,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={decideImage(project.name)}
              alt={project.name}
            />
            <CardContent sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 18 }}>
                {project.name}
              </Typography>
              <Typography sx={{ fontSize: 12, marginTop: 1 }} color="text.secondary">
                {project.desc.slice(0, 120)}...
              </Typography>
              <Divider sx={{ my: 1 }} />

              {/* Action Buttons */}
              <Box onClick={() => handleProjectClick(project)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
                        <Typography variant="body2">Read More</Typography>
                        <OpenInNewIcon fontSize="small" />
                    </Box>
                    <Box component={'a'} href={project.repoLink} target="_blank" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
                        <Typography variant="body2">GitHub Link</Typography>
                        <OpenInNewIcon fontSize="small" />
                    </Box>
                    <Box component={'a'} href={project.demoLink} target="_blank" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
                        <Typography variant="body2">Website Link</Typography>
                        <OpenInNewIcon fontSize="small" />
                    </Box>
              
            </CardContent>
          </CardActionArea>
        </Card>
        </Reveal>
        </Grid>
      ))}
    </Grid>
          
        </Box>
        </>
  );
};

export default ProjectsPage;
