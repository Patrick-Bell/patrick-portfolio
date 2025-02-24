import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const actions = [
    { id: 1, icon: <EmailIcon />, link: 'mailto:patrickbell1302@gmail.com', text: 'Email' },
    { id: 2, icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/patrick-bell-1bb0a6216/', text: 'LinkedIn'},
    { id: 3, icon: <GitHubIcon />, link: 'https://github.com/Patrick-Bell', text: 'GitHub'},
    { id: 4, icon: <ArticleIcon />, link: 'http://localhost:3002/patrick-portfolio/static/media/patrick-bell-cv.8c918eb67783362ccb1e.pdf', text: 'CV'},
    { id: 5, icon: <ColorLensIcon />, text: 'Change Color'},
]