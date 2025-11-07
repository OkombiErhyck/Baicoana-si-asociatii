import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import PageHero from '../../components/PageHero';
import { Balance, Gavel, GroupWork, Timeline } from '@mui/icons-material';

const About = () => {
  const values = [
    {
      icon: <Balance />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our legal practice, ensuring the highest quality service for our clients.',
    },
    {
      icon: <Gavel />,
      title: 'Integrity',
      description: 'Our practice is built on unwavering integrity and ethical conduct in all our dealings.',
    },
    {
      icon: <GroupWork />,
      title: 'Collaboration',
      description: 'We work closely with our clients, fostering strong partnerships to achieve optimal results.',
    },
    {
      icon: <Timeline />,
      title: 'Innovation',
      description: 'We embrace innovative legal solutions while maintaining traditional values of service and dedication.',
    },
  ];

  const timeline = [
    {
      year: '2010',
      title: 'Firm Founded',
      description: 'Baicoana & Associates was established with a commitment to legal excellence.',
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded our practice areas and opened new offices to better serve our clients.',
    },
    {
      year: '2020',
      title: 'Technology Integration',
      description: 'Implemented advanced legal technology solutions for improved client service.',
    },
    {
      year: '2025',
      title: 'International Practice',
      description: 'Extended our services to international clients and cross-border cases.',
    },
  ];

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A legacy of legal excellence and client dedication"
        backgroundImage="/images/about-hero.jpg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Mission Statement */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto' }}>
            To provide exceptional legal services with integrity and dedication, while fostering long-lasting relationships with our clients based on trust, understanding, and successful outcomes.
          </Typography>
        </Box>

        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom color="primary" textAlign="center">
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: 1,
                    borderColor: 'divider',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{
                    display: 'inline-flex',
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    mb: 2,
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom color="primary" textAlign="center">
            Our Journey
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {timeline.map((item, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    border: 1,
                    borderColor: 'divider',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -10,
                      opacity: 0.05,
                      fontSize: '8rem',
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary">
                    {item.year}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Ready to Work Together?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ mt: 2 }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default About;