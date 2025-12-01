
import { Typography, Box, Card, CardContent, CardMedia, Divider, CardActionArea, Button, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { courses } from '../api/courses';
import Stagger from '../animations/Stagger';


const Courses = ({ color }) => {

  return (
    <>
        {/* Content */}
        <Box sx={{ mt: 3}}>

            {courses.map((course, i) => (
        <Stagger index={i}>
        <Box color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, textDecoration:'none' }}>
            <Typography variant="body2">{course.title}</Typography>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <CheckIcon sx={{color: color}} fontSize="small" />
            </Box>
        </Box>
        </Stagger>
            ))}


       
      
        </Box>
    </>  
  );
};

export default Courses;
