import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const Lawyers = () => {
  const lawyers = [
    {
      name: 'Alexandru Baicoana',
      position: 'Managing Partner',
      specialization: 'Corporate Law & Commercial Litigation',
      image: '/images/lawyer1.jpg',
    },
    {
      name: 'Maria Popescu',
      position: 'Senior Partner',
      specialization: 'Real Estate & Property Law',
      image: '/images/lawyer2.jpg',
    },
    {
      name: 'Ioan Dragomir',
      position: 'Partner',
      specialization: 'Family Law & Civil Litigation',
      image: '/images/lawyer3.jpg',
    },
    {
      name: 'Elena Constantinescu',
      position: 'Senior Associate',
      specialization: 'Intellectual Property & Technology Law',
      image: '/images/lawyer4.jpg',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        color="primary"
        gutterBottom
        sx={{ mb: 6, textAlign: 'center' }}
      >
        Our Legal Team
      </Typography>
      <Grid container spacing={4}>
        {lawyers.map((lawyer, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: 1,
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: '120%',
                  bgcolor: 'grey.200',
                }}
                image={lawyer.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {lawyer.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {lawyer.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lawyer.specialization}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Lawyers;