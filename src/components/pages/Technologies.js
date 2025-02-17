import { Box, Typography, Button, Avatar, Tooltip, Divider, useMediaQuery } from "@mui/material";
import { backendSkills, databaseSkills, frontendSkills, toolsSkills } from "../api/skills";
import image1 from '../assets/project1.png'
import image2 from '../assets/project3.png'
import Stagger from "../animations/Stagger";


const Technologies = () => {


  const mobileScreen = useMediaQuery("(max-width: 500px)")



    return (
        <>
            <Box sx={{ display: mobileScreen ? 'block' : 'flex', flexWrap: "wrap", gap: "10px", alignItems:'center', justifyContent:'space-between', overflow: mobileScreen ? 'scroll' : ''}}>
            <Typography sx={{color:'grey'}}>Frontend</Typography>
            <Box sx={{display:'flex'}}>
            {frontendSkills.map((skill, i) => (
              <Stagger key={i} index={i}>
              <Tooltip title={skill.name} arrow placement="bottom">
              <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
              </Tooltip>
              </Stagger>
            ))}
            </Box>
          </Box>

          <Divider sx={{my:1}}/>

          <Box sx={{display: mobileScreen ? 'block' : 'flex', alignItems:'center', justifyContent:'space-between', mt:1}}>
            <Typography sx={{color:'grey'}}>Backend</Typography>
            <Box sx={{display:'flex'}}>
            {backendSkills.map((skill, i) => (
              <Stagger key={i} index={i}>
                <Box sx={{maxWidth:"300px", overflow:'scroll'}}>
              <Tooltip title={skill.name} arrow placement="bottom">
              <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
              </Tooltip>
              </Box>
              </Stagger>
            ))}
            <Divider sx={{my:2}} />
            </Box>
          </Box>

          <Divider sx={{my:1}}/>

          <Box sx={{display: mobileScreen ? 'block' : 'flex', alignItems:'center', justifyContent:'space-between', mt:1}}>
            <Typography sx={{color:'grey'}}>Database</Typography>
            <Box sx={{display:'flex'}}>
            {databaseSkills.map((skill, i) => (
              <Stagger key={i} index={i}>
              <Tooltip title={skill.name} arrow placement="bottom">
              <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
              </Tooltip>
              </Stagger>
            ))}
            <Divider sx={{my:2}} />
            </Box>
          </Box>

          <Divider sx={{my:1}}/>

          <Box sx={{display: mobileScreen ? 'block' : 'flex', alignItems:'center', justifyContent:'space-between', mt:1, overflow: mobileScreen ? 'scroll' : ''}}>
            <Typography sx={{color:'grey'}}>Tools</Typography>
            <Box sx={{display:'flex'}}>
            {toolsSkills.map((skill, i) => (
              <Stagger key={i} index={i}>
              <Tooltip title={skill.name} arrow placement="bottom">
              <Avatar sx={{background: skill.color, p:0, margin:"0 5px", borderRadius:'10px', color:'white', width:32, height:32}}>{skill.icon}</Avatar>
              </Tooltip>
              </Stagger>
            ))}
            <Divider sx={{my:2}} />
            </Box>
          </Box>
        </>
    )
}

export default Technologies