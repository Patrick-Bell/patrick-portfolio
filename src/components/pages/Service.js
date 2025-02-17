import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

function Service() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>Primary Focus</Typography>
      <Grid container spacing={2}>
        {/* Web Design & Development */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./assets/images/icon-dev.svg"
              alt="Web Design"
            />
            <CardContent>
              <Typography variant="h6">Web Design & Development</Typography>
              <Typography variant="body2">Creating attractive, easy-to-use websites for businesses and individuals.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Full-Stack Solutions */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./assets/images/icon-frameworks.svg"
              alt="Full Stack"
            />
            <CardContent>
              <Typography variant="h6">Full-Stack Solutions</Typography>
              <Typography variant="body2">Building scalable web applications with JavaScript frameworks, SQL databases, and more.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Mobile Apps */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./assets/images/icon-app.svg"
              alt="Mobile Apps"
            />
            <CardContent>
              <Typography variant="h6">Mobile Apps & Games</Typography>
              <Typography variant="body2">Developing engaging mobile apps and games for iOS and Android.</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Marketing & SEO */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="./assets/images/icon-marketing.svg"
              alt="Marketing"
            />
            <CardContent>
              <Typography variant="h6">Marketing & SEO</Typography>
              <Typography variant="body2">Using SEO and marketing strategies to boost online visibility.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Service;
