import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

function Languages() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>Languages</Typography>

      {/* Coding Languages */}
      <Typography variant="h6">Coding Languages</Typography>
      <List>
        <ListItem>
          <ListItemText primary="JavaScript" secondary="95%" />
        </ListItem>
        <ListItem>
          <ListItemText primary="TypeScript" secondary="95%" />
        </ListItem>
        {/* Add more coding languages as needed */}
      </List>

      {/* Human Languages */}
      <Typography variant="h6" mt={2}>Human Languages</Typography>
      <List>
        <ListItem>
          <ListItemText primary="English" secondary="Fluent" />
        </ListItem>
        <ListItem>
          <ListItemText primary="German" secondary="Fluent" />
        </ListItem>
        {/* Add more human languages as needed */}
      </List>
    </Box>
  );
}

export default Languages;
