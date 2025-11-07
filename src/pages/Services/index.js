import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const Services = () => {
  const services = [
    {
      title: 'Corporate Law',
      description: 'Expert legal guidance for businesses of all sizes, from startups to corporations.',
    },
    {
      title: 'Real Estate Law',
      description: 'Comprehensive legal services for real estate transactions and disputes.',
    },
    {
      title: 'Family Law',
      description: 'Sensitive and professional handling of family legal matters.',
    },
    {
      title: 'Criminal Defense',
      description: 'Strong defense representation for criminal cases.',
    },
    {
      title: 'Intellectual Property',
      description: 'Protection for your intellectual property rights and innovations.',
    },
    {
      title: 'Tax Law',
      description: 'Strategic tax planning and dispute resolution services.',
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
        Our Legal Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: 1,
                borderColor: 'divider',
                '&:hover': {
                  boxShadow: 2,
                },
              }}
            >
              <Typography variant="h5" gutterBottom color="primary">
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;