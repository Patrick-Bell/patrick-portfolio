import React, { act, useState } from 'react';
import { Box, Avatar, Button, List, ListItem, ListItemIcon, ListItemText, Typography, Chip, Divider, ListItemAvatar, useMediaQuery, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FadeIn from '../animations/FadeIn'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { actions } from '../api/actions';
import Stagger from '../animations/Stagger';
import CV from '../assets/cv/patrick-bell-cv.pdf'


function Sidebar({ color, selectedColor, setSelectedColor, setColor }) {

  const smallerScreen = useMediaQuery("(max-width: 1200px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for sidebar toggle
  const [open, setOpen] = useState(false)

  const handleSidebarToggle = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const openCV = () => {
    console.log('clicking download CV')
    window.open(CV, '_blank')
  }

  const changeColor = () => {
    setColor(selectedColor)
    setOpen(false)
  }

  const handleActionClick = (event, action) => {
    if (action.id === 5) {
      event.preventDefault(); // Prevents navigation
      setOpen(true); // Open the color change dialog
    }
  };
  


  return (
    <Box sx={{ width: smallerScreen ? '100%' : '325px', background:'#1e1e20', p: 2, borderRadius:'20px', boxShadow:3, border:'1px solid #383838', position:'relative' }}>
      {/* Sidebar Info */}

      
      <Box onClick={() => handleSidebarToggle()} sx={{visibility: smallerScreen ? 'visible' : 'hidden', position: 'absolute', top:0, right:0, borderTopRightRadius:"20px", p:1, display:'flex', boxShadow:2, cursor:'pointer'}}><KeyboardArrowDownIcon /></Box>

      <Box sx={{mt:3, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img style={{width:'150px', borderTopLeftRadius:'30px', borderBottomRightRadius:'30px'}} src='https://media.licdn.com/dms/image/v2/C4D03AQHKAyNsKGU8iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1627382775345?e=1744848000&v=beta&t=6SmGqiwBEjrGbz6u83xe1e0CrEvCNGvwveJOaK3-_rU' />
      </Box>
      <Box>
            <Typography sx={{textAlign:'center', marginTop:'25px', fontWeight:800, fontSize:'26px'}}>Patrick Bell</Typography>
        </Box>
        <Chip sx={{display:'flex', marginTop:'10px', borderRadius:'10px'}} label='Web Developer'></Chip>




<Box sx={{ display: smallerScreen ? (isSidebarOpen ? 'block' : 'none') : 'block' }}>

        <Divider sx={{my:3}} />
                        <List>
                          <FadeIn>
                            <ListItem sx={{ borderRadius: '10px', p: 0 }}>
                              <ListItemAvatar>
                                <Avatar sx={{ borderRadius: '10px' }}>
                                  <EmailIcon sx={{color: color}} />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={'EMAIL'}
                                secondary={'patrickbell1302@gmail.com'}
                              />
                            </ListItem>
                          </FadeIn>
                          </List>

                          <List onClick={() => openCV()} sx={{cursor:'pointer', "&:hover":{opacity:0.7}}}>
                            <FadeIn>
                            <ListItem sx={{ borderRadius: '10px', p: 0 }}>
                              <ListItemAvatar>
                                <Avatar sx={{ borderRadius: '10px' }}>
                                  <DownloadIcon sx={{color: color}} />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={'CV'}
                                secondary={'Click to Download'}
                              />
                            </ListItem>
                            </FadeIn>
                          </List>

                          <List>
                            <FadeIn>
                            <ListItem sx={{ borderRadius: '10px', p: 0 }}>
                              <ListItemAvatar>
                                <Avatar sx={{ borderRadius: '10px' }}>
                                  <FmdGoodIcon sx={{color: color }} />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={'LOCATION'}
                                secondary={'UK, London'}
                              />
                            </ListItem>
                            </FadeIn>
                          </List>

                          <Divider sx={{my:3}} />
                        
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:"10px"}}>
                          {actions.map((action, i) => (
                            <Stagger key={i} index={i}>
                              <Tooltip title={action.text} arrow placement='bottom'>
                            <Box component={'a'} href={action.link} target='_blank' sx={{color:'grey', cursor:'pointer', "&:hover": { color: color}}}
                              onClick={(e) => handleActionClick(e, action)}
                            >{action.icon}</Box>
                            </Tooltip>
                            </Stagger>
                          ))}
                        </Box>
                   </Box>

                   <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Change Color</DialogTitle>
                    <Divider />
                    <DialogContent>
                      <DialogContentText>This will change the color of text to the color you decide here.</DialogContentText>
                      <input 
                        type="color" 
                        value={selectedColor} 
                        onChange={(e) => setSelectedColor(e.target.value)}
                        style={{
                          margin: '5px 0', 
                          border: 'none', 
                          outline: 'none', 
                          background: 'none', 
                          appearance: 'none', // Removes default browser styles
                          width: '40px', 
                          height: '40px',
                          cursor: 'pointer'
                        }} 
                      />
                      <Typography variant='subtitle2'>New color: <span style={{ color: selectedColor }}>{selectedColor}</span></Typography>
                      </DialogContent>
                      <Divider />
                      <DialogActions>
                        <Button onClick={() => setOpen(false)} sx={{color:'white'}}>Close</Button>
                        <Button sx={{background:'white'}} onClick={() => changeColor()} variant='contained'>Confirm</Button>
                      </DialogActions>
                   </Dialog>
     </Box>
  );
}

export default Sidebar;
