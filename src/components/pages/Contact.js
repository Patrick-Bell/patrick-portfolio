
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";
import { contact } from "../api/contact";
import Stagger from "../animations/Stagger";


const Contact = ({ color }) => {


  return (
    <>
    
        {/* Content */}
        <Box sx={{ mt: 3}}>
          {contact.map((con, i) => (
            <Stagger key={i} index={i}>
            <Box component={'a'} target="_blank" href={con.href} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'grey', mb: 1, textDecoration:'none', "&:hover": { color: color } }}>
            <Typography variant="body2">{con.name}</Typography>
            <OpenInNewIcon fontSize="small" />
           </Box>
           </Stagger>
          ))}
         </Box>
      </>
     
  );
};

export default Contact;
