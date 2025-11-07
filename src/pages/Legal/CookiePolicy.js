import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import PageHero from '../../components/PageHero';

const CookiePolicy = () => {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies"
        backgroundImage="/images/legal-hero.jpg"
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Cookie Policy
          </Typography>
          <Typography variant="body1" paragraph>
            Last updated: November 6, 2025
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            1. What Are Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and improve our services.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. Types of Cookies We Use
          </Typography>
          <Typography variant="body1" paragraph>
            - Essential cookies: Required for the website to function properly
            - Analytics cookies: Help us understand how visitors use our website
            - Preference cookies: Remember your settings and preferences
            - Marketing cookies: Used to deliver relevant advertisements
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Managing Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            4. Third-Party Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the privacy policies of these third parties.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            5. Updates to This Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about our Cookie Policy, please contact us at privacy@baicoana.com
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default CookiePolicy;