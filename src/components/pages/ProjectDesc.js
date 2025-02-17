import { useState } from 'react'
import { Typography, Button, Box, Divider, Chip, Avatar, Tooltip, useMediaQuery } from "@mui/material";
import Image1 from '../assets/project1.png'
import Image2 from '../assets/project2.png'
import Image3 from '../assets/project3.png'
import Image4 from '../assets/project4.png'
import Image5 from '../assets/project5.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import fiorTechQR from '../assets/fiortech-qr.png'
import copyKitQR from '../assets/copykit-qr.png'
import scannerQR from '../assets/scanner-qr.png'
import cointologyQR from '../assets/cointology-qr.png'
import cartQR from '../assets/cart-qr.png'
import Stagger from '../animations/Stagger'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


const ProjectDesc = ({ project, setSelectedProject, color }) => {

    const smallerScreen = useMediaQuery("(max-width: 1200px)");


    const decideImage = (name) => {
        switch (name) {
            case 'Admin Dashboard': return Image1;
            case 'CopyKit': return Image2;
            case 'Fiortech': return Image3;
            case 'Cointology': return Image4
            case 'QRLite': return Image5;
        }
    };

    const decideScanner = (name) => {
        switch (name) {
            case 'Admin Dashboard': return cartQR;
            case 'CopyKit': return copyKitQR;
            case 'Fiortech': return fiorTechQR;
            case 'QRLite': return scannerQR;
            case 'Cointology': return cointologyQR
        }
    };

    const handleClick = () => {
        setSelectedProject(null)
        window.scrollTo({ top: 0 })
    }


    return (

        <>
    <Box sx={{ width: smallerScreen ? '100%':'350px', background:'#1e1e20', p: 2, borderRadius:'20px', boxShadow:3, border:'1px solid #383838' }}>

                {/* Left Summary Section */}
                    <Typography variant="h5" fontWeight={800} gutterBottom>
                        {project.name}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Company</Typography>
                        <Typography variant="body2">{project.company}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Sector</Typography>
                        <Typography variant="body2">{project.sector}</Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box component={'a'} href={project.repoLink} target="_blank" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
                        <Typography variant="body2">GitHub Link</Typography>
                        <OpenInNewIcon fontSize="small" />
                    </Box>
                    <Box component={'a'} href={project.demoLink} target="_blank" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
                        <Typography variant="body2">Website Link</Typography>
                        <OpenInNewIcon fontSize="small" />
                    </Box>

                    {project.status ? (
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Project Status</Typography>
                        <Chip size="small" color="success" icon={<CheckCircleIcon />} label="Completed" />
                        </Box>
                    ):(
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Project Status</Typography>
                        <Chip size="small" color="warning" icon={<HourglassEmptyIcon />} label="Ongoing" />
                        </Box>
                    )}

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Scan to open on mobile</Typography>
                        <img style={{height:60}} src={decideScanner(project.name)} />
                        </Box>
                    

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Technologies</Typography>
                        <Box sx={{display:'flex'}}>
                        {project?.tech?.map((skill, i) => (
                            <Stagger index={i}>
                            <Tooltip title={skill.name} arrow placement="bottom">
                            <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
                            </Tooltip>
                            </Stagger>
                        ))}
                     </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1 }}>
                        <Typography variant="body2">Tools</Typography>
                        <Box sx={{display:'flex'}}>
                        {project?.tools?.map((skill, i) => (
                            <Stagger index={i}>
                            <Tooltip title={skill.name} arrow placement="bottom">
                            <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
                            </Tooltip>
                            </Stagger>
                        ))}
                     </Box>
                    </Box>


                    <Divider sx={{ my: 2 }} />


                    
                    
                    
                   
                    <img style={{width:'200px'}} src={decideImage(project.name)} />


                    <Divider sx={{ my: 2 }} />


                    <Button
                        onClick={() => handleClick()}
                        startIcon={<ArrowCircleLeftIcon />}
                        variant="outlined"
                        fullWidth
                        sx={{
                            py: 1.2,
                            borderRadius: '10px',
                            fontWeight: 800,
                            textTransform: 'none',
                            fontSize: '0.875rem', // Reduced font size
                            color: color,
                            borderColor: color
                        }}
                    >
                        Back to Projects
                    </Button>
                    </Box>
        
        </>
    )
}


export default ProjectDesc