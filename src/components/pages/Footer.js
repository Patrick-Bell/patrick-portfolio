import { Box, Typography, Grid, Divider } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <Box sx={{ background: '#f4f4f4', p: 4 }}>
        <Grid container spacing={4} textAlign={'center'}>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={800}>Quick Links</Typography>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Projects</Typography>
            <Typography>Skills</Typography>
            <Typography>Contact</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={800}>Projects</Typography>
            <Typography>Fiortech Recruitment Group</Typography>
            <Typography>Bandstand Merchandise Services</Typography>
            <Typography>CopyKit</Typography>
            <Typography>Cointology</Typography>
            <Typography>QRLite</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={800}>Contact</Typography>
            <Typography>Get in touch</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={800}>Socials</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <LinkedInIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
              <GitHubIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
            </Box>
          </Grid>

        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Patrick Bell Portfolio. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
