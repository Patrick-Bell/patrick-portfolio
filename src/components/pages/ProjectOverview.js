import '../../App.css'
import { useState } from "react";
import { Typography, Grid, Box, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, useMediaQuery, IconButton} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CheckIcon from '@mui/icons-material/Check';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import StarIcon from '@mui/icons-material/Star';
import Reveal from '../animations/Reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloseIcon from '@mui/icons-material/Close';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { cartTrackerSlider, cointologySlider, copyKitSlider, fiortechSlider, qrSlider } from "../api/slider";

const ProjectOverview = ({ project, color }) => {
  const [openModal, setOpenModal] = useState(false); // For controlling the modal visibility

  const handleOpen = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);



  // Change the breakpoint to check for screens larger than 1200px
  const isLargeScreen = useMediaQuery("(min-width: 1600px)");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const determineSlider = (project) => {
    switch (project.name) {
      case 'Admin Dashboard':
        return cartTrackerSlider
      case 'Fiortech':
        return fiortechSlider
      case 'CopyKit':
        return copyKitSlider
      case 'Cointology':
        return cointologySlider
      case 'QRLite':
        return qrSlider
      default:
        return []
    }
  }

  return (
    <>
      <Box sx={{ p: 2, maxWidth:'100%' }}>
        {/* Project Description */}
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          {project.desc}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Display features if available */}
        {project.features.length > 0 && (
          <>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Features
            </Typography>
            <Grid container sx={{maxWidth:'100%'}}>
              {project.features.map((feature, i) => (
                <Grid item xs={12} sm={6} key={feature.name}>
                  <Reveal index={i}>
                    <List>
                      <ListItem sx={{ borderRadius: '10px', p: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: color, borderRadius: '10px' }}>
                            <CheckIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={feature.name}
                          secondary={feature.desc}
                        />
                      </ListItem>
                    </List>
                  </Reveal>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />
          </>
        )}

        {/* Display challenges if available */}
        {project.challenges.length > 0 && (
          <>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Challenges
            </Typography>
            <Box>
              {project.challenges.map((challenge, i) => (
                <Reveal index={i} key={i}>
                  <Box sx={{ marginTop: '10px', lineHeight: 1.8 }}>
                    <Typography sx={{ mb: 2 }}>
                      <span style={{ fontWeight: 800, textTransform: 'uppercase' }}>Problem: </span>{challenge.challenge}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      <span style={{ fontWeight: 800, textTransform: 'uppercase' }}>Issue: </span>{challenge.problem}
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                      <span style={{ fontWeight: 800, textTransform: 'uppercase' }}>Method: </span>{challenge.howIOvercameIt}
                    </Typography>
                    <Typography sx={{ mb: 2, border: `1px dotted ${color}`, p: 1, borderRadius: '10px' }}>
                      <span style={{ fontWeight: 800, textTransform: 'uppercase' }}>Outcome: </span>{challenge.outcome}
                    </Typography>
                    <Divider />
                  </Box>
                </Reveal>
              ))}
            </Box>
          </>
        )}

        {/* Display achievements if available */}
        {project.results.length > 0 && (
          <>
            <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mt: 2 }}>
              Achievements
            </Typography>
            <Grid container>
              {project.results.map((result, i) => (
                <Grid item xs={12} key={result.name}>
                  <Reveal index={i}>
                    <List>
                      <ListItem sx={{ borderRadius: '10px', p: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: color, borderRadius: '10px' }}>
                            <StarIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={result.name}
                          secondary={result.desc}
                        />
                      </ListItem>
                    </List>
                  </Reveal>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />
          </>
        )}

        {/* Display updates if available */}
        {project.updates.length > 0 && (
          <>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Updates
            </Typography>
            <Grid container>
              {project.updates.map((update, i) => (
                <Grid item xs={12} key={update.name}>
                  <Reveal index={i}>
                    <List>
                      <ListItem sx={{ borderRadius: '10px', p: 1 }}>
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: color, borderRadius: '10px' }}>
                            <HourglassEmptyIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={update.name}
                          secondary={update.desc}
                        />
                      </ListItem>
                    </List>
                  </Reveal>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />
          </>
        )}

        {determineSlider(project).length > 0 && (
        <Box>
        {/* Show the Screenshots section */}
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Screenshots
        </Typography>
        
        {/* For smaller screens, show a message about device size */}
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            To view screenshots, please click <span style={{color:color, fontWeight:800, cursor:'pointer', "&:hover":{transform:'scale(1.1)'}}} onClick={() => handleOpen()}>here</span>.
            To navigate, you can click on the dots, or swipe on both mobile and desktop.
          </Typography>
        

        {/* Full-screen Modal */}
        <Dialog
        open={openModal}
        onClose={handleClose}
        fullScreen
      >
        {/* Close Button */}
        <Box
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          zIndex: 10, // Ensures button is above content
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

        {/* Swiper Container */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '10px', md: '20px' }, // Adjust padding for smaller screens
          }}
        >
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {determineSlider(project).map((slide, i) => (
              <SwiperSlide key={i}>
                <List>
                  <ListItem sx={{ borderRadius: '10px', p: 1 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: color, borderRadius: '10px' }}>{i + 1}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={slide.title} secondary={slide.desc} />
                  </ListItem>
                </List>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img
                    style={{
                      width: '100%',
                      maxHeight: '90vh', // Ensures image fits properly on different screens
                      objectFit: 'contain', // Ensures image is not cropped
                      borderRadius: '0',
                    }}
                    src={slide.image}
                    alt={slide.title}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Dialog>
  </Box>
      )}
  </Box>
  
    </>
  );
};

export default ProjectOverview;
