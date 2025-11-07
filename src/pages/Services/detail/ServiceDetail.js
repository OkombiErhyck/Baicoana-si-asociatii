import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import PageHero from '../../../components/PageHero';
import FAQSection from '../../../components/FAQSection';

const ServiceDetail = ({ service }) => {
  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.backgroundImage}
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Overview Section */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom color="primary">
              Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {service.overview}
            </Typography>

            {/* Key Services */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Our Services Include
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {service.keyServices.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      border: 1,
                      borderColor: 'divider',
                      height: '100%',
                    }}
                  >
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

            {/* Why Choose Us */}
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Why Choose Us
            </Typography>
            <Typography variant="body1" paragraph>
              {service.whyChooseUs}
            </Typography>

            {/* FAQs */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" gutterBottom>
                Frequently Asked Questions
              </Typography>
              <FAQSection faqs={service.faqs} />
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                border: 1,
                borderColor: 'divider',
                position: 'sticky',
                top: 24,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Get Expert Legal Advice
              </Typography>
              <Typography variant="body2" paragraph color="text.secondary">
                Schedule a consultation with our {service.title.toLowerCase()} experts to discuss your case.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                href="/consultation"
                sx={{ mb: 2 }}
              >
                Free Consultation
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                href="/contact"
              >
                Contact Us
              </Button>

              {service.expertise && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Our Expertise
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.expertise.map((item, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ServiceDetail;