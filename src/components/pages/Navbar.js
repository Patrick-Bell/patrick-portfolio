import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function Navbar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#34495e', p: 2 }}>
      <Button sx={{ color: 'white' }}>About</Button>
      <Button sx={{ color: 'white' }}>Projects</Button>
      <Button sx={{ color: 'white' }}>Certificates</Button>
      <Button sx={{ color: 'white' }}>Contact</Button>
      <Button sx={{ color: 'white' }}>More</Button>
    </Box>
  );
}

export default Navbar;
