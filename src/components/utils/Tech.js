import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
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

const Tech = ({ skill }) => {
  return (
    <Box>
      <List sx={{ maxWidth: 300 }} key={skill.name}>
        <ListItem sx={{ borderRadius: '10px', bgcolor: '#f5f5f5', p: 1 }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: skill.color, borderRadius: '10px' }}>
              {skill.icon} {/* Ensure this is a JSX element */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={skill.name}
            secondary={skill.desc}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Tech;


/* certificates

- freecodecamp
- codeacademy


*/

