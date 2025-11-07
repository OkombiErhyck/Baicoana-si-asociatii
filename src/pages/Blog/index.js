import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import PageHero from '../../components/PageHero';

const Blog = () => {
  return (
    <>
      <PageHero
        title="Legal Insights & Updates"
        subtitle="Stay informed about the latest legal developments and expert analysis"
        backgroundImage="/images/blog-hero.jpg"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Our blog section is currently under development. Check back soon for expert legal insights and updates.
        </Typography>
      </Container>
    </>
  );
};

export default Blog;