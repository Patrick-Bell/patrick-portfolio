import { Box, Typography, Button, Avatar, Tooltip, Divider, Grid, useMediaQuery } from "@mui/material";


const FeedbackCard = ({ review, name, job, image }) => {

    return (

        <>

        <Box sx={{boxShadow:2, p:2, position:'relative', border:'1px solid #383838', borderRadius:'10px'}}>
                <Typography color="text.secondary"sx={{fontStyle:'italic'}} variant="subtitle2">{review}</Typography>
                <Box>
                  <Divider sx={{my:1}} />
          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="subtitle2" fontWeight="bold">{name}</Typography>
            <Box sx={{margin:'0 5px', color:'grey'}}>|</Box>
            <Typography variant="body2" color="grey">{job}</Typography>
            </Box>
            <Box>
            <img style={{height:'35px', position:'absolute', bottom:5, right:5}} src={image} />
            </Box>
          </Box>
            </Box>
        </Box>
        
        
        </>
    )
}

export default FeedbackCard