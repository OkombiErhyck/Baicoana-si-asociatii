import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+40 123 456 789',
    },
    {
      icon: <Email />,
      title: 'Email',
      content: 'contact@baicoana.com',
    },
    {
      icon: <LocationOn />,
      title: 'Office',
      content: 'Strada Exemplu 123, București, Romania',
    },
  ];

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team of legal experts"
        backgroundImage="/images/contact-hero.jpg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom color="primary">
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              Our team is ready to assist you with any legal matters. Contact us for a consultation.
            </Typography>
            <Box sx={{ mt: 4 }}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    border: 1,
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      {info.title}
                    </Typography>
                    <Typography variant="body1">
                      {info.content}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <ContactForm onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;