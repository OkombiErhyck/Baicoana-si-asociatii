import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import PageHero from '../../components/PageHero';

const TermsOfUse = () => {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Terms and conditions for using our services"
        backgroundImage="/images/legal-hero.jpg"
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Terms of Use
          </Typography>
          <Typography variant="body1" paragraph>
            Last updated: November 6, 2025
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using this website, you accept and agree to be bound by these Terms of Use and our Privacy Policy.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. Use License
          </Typography>
          <Typography variant="body1" paragraph>
            Permission is granted to temporarily access the materials on our website for personal, non-commercial use only.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            The materials on our website are provided on an 'as is' basis. The information presented is for general informational purposes only and should not be considered as legal advice.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            4. Limitations
          </Typography>
          <Typography variant="body1" paragraph>
            Baicoana & Associates shall not be held liable for any damages arising from the use or inability to use the materials on our website.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            5. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These terms shall be governed by and construed in accordance with the laws of Romania, without regard to its conflict of law provisions.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            6. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about these Terms of Use, please contact us at legal@baicoana.com
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default TermsOfUse;