import React from 'react';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import PageHero from '../../components/PageHero';

const ClientPortal = () => {
  return (
    <>
      <PageHero
        title="Client Portal"
        subtitle="Secure access to your case information and documents"
        backgroundImage="/images/portal-hero.jpg"
      />
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
          <Typography variant="h5" gutterBottom align="center">
            Client Portal Coming Soon
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph align="center">
            Our secure client portal is currently under development. Soon you'll be able to:
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Access case documents and updates
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • Communicate securely with your legal team
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              • View billing information and make payments
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              • Schedule appointments and consultations
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ClientPortal;