import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { experience } from '../api/experience'; // Assuming experience is an array of job objects
import Stagger from '../animations/Stagger';
import { projects } from '../api/projects';
import CheckIcon from '@mui/icons-material/Check';



const Experience = ({ setSelectedProject, color }) => {

    const handleClick = (project) => {
        const selectProject = projects.find(p => p.id === project.id)
        setSelectedProject(selectProject)
        window.scrollTo({top:0})
    }


    return (
        <Box sx={{ mt: 4 }}>
            {experience.map((job, i) => (
                <Box key={i} sx={{ mb: 4 }}>
                    {/* Job Title and Company */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                        <Typography variant='subtitle1' sx={{ color: color }}>
                            {job.title} {/* Dynamically displaying job title */}
                        </Typography>
                        <Typography variant='subtitle1' sx={{ color: color }}>
                            {job.client} {/* Dynamically displaying company name */}
                        </Typography>
                    </Box>

                    {/* Job Description */}
                    <Box sx={{ mt: 1 }}>
                        <Typography variant='subtitle2' color="text.secondary">
                            {job.desc} {/* Dynamically displaying the description */}
                        </Typography>

                        {/* Responsibilities List */}
                        <Box component="ul" color="text.secondary" sx={{ paddingLeft: 4, mt: 1 }}>
                            {job.responsibilities?.map((task, j) => (
                                <Stagger index={j}>
                                <Typography variant='subtitle2' key={j} style={{display:'flex', alignItems:'center', margin:'5px 0'}}>
                                    <CheckIcon sx={{color:color, mr:1}} />{task} {/* Dynamically displaying the tasks */}
                                </Typography>
                                </Stagger>
                            ))}
                        </Box>

                        {/* Technologies */}
                        <Typography variant='subtitle2' color="text.secondary">
                            Technologies: {job.tech.join(', ')} {/* Dynamically displaying technologies */}
                        </Typography>

                        {/* Links */}
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography onClick={() => handleClick(job)} variant='caption' sx={{ color: 'grey', ml: 1, cursor:'pointer', "&:hover":{color: color} }}>
                                Read More
                            </Typography>
                            <Typography component={'a'} href={job.website} target='_blank' variant='caption' sx={{ color: 'grey', ml: 1, textDecoration:'none', "&:hover":{color: color} }}>
                                View Website
                            </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ mt: 3 }} />
                </Box>
            ))}
        </Box>
    );
};

export default Experience;
