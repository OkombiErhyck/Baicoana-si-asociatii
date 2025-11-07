import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import PageHero from '../../components/PageHero';

const PrivacyPolicy = () => {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and manage your personal information"
        backgroundImage="/images/legal-hero.jpg"
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Last updated: November 6, 2025
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information that you provide directly to us, including:
            - Contact information (name, email address, phone number)
            - Case-related information
            - Communication preferences
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
            - Provide legal services
            - Communicate with you about your case
            - Send important updates and notifications
            - Improve our services
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            4. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
            - Access your personal data
            - Correct inaccurate data
            - Request deletion of your data
            - Withdraw consent at any time
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            5. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us at privacy@baicoana.com
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default PrivacyPolicy;