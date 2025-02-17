import { Box, Typography, Button, Avatar, Tooltip, Divider, Grid, useMediaQuery } from "@mui/material";


const FeedbackCard = ({ review, name, job, image }) => {

    return (

        <>

        <Box sx={{boxShadow:2, p:2,}}>
                <Typography sx={{fontStyle:'italic', color:'grey'}} variant="subtitle2">{review}</Typography>
                <Box>
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="subtitle2" fontWeight="bold">{name}</Typography>
            <Box sx={{margin:'0 5px', color:'grey'}}>|</Box>
            <Typography variant="body2" color="grey">{job}</Typography>
            </Box>
            <Box>
            <img style={{height:'35px'}} src={image} />
            </Box>
          </Box>
            </Box>
        </Box>
        
        
        </>
    )
}

export default FeedbackCard