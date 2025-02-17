import { Typography, Box, Card, CardContent, CardMedia, Divider, CardActionArea, Button } from '@mui/material';
import { projects } from '../api/projects';
import Image1 from '../assets/fiortech-hero.png';
import Image2 from '../assets/copykit-hero.png';
import Image3 from '../assets/cart-heor.png';
import Image4 from '../assets/cointology-hero.png';
import Image5 from '../assets/qr-scanner-hero.png';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

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
      return '';
  }
};

function Projects() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mt: 4 }}>
      {projects.map((project, i) => (
        <Card
          key={i}
          sx={{
            width: 400, // Controlled width
            borderRadius: '10px',
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
            padding: 1,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ height: 180, objectFit: 'contain' }} // Maintains image aspect ratio
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<ReadMoreIcon />}
                  onClick={() => navigate(`/projects/${project.id}`, '_blank')}
                >
                  Read More
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<GitHubIcon />}
                  onClick={() => window.open(project.repoLink, '_blank')}
                >
                  GitHub
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<LanguageIcon />}
                  onClick={() => window.open(project.demoLink, '_blank')}
                >
                  Website
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Projects;
