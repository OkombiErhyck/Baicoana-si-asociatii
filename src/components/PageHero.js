import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        color: 'white',
        minHeight: { xs: '300px', sm: '400px', md: '500px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: { xs: 4, sm: 6, md: 8 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.1)',
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          width: '100%',
          maxWidth: '2000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: 'Cormorant',
            fontWeight: 600,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
            lineHeight: 1.2,
            mb: { xs: 2, sm: 3 },
            maxWidth: '1200px',
            mx: 'auto',
            letterSpacing: -0.5,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h4"
            sx={{
              maxWidth: { xs: '100%', sm: '600px', md: '800px' },
              mx: 'auto',
              opacity: 0.95,
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              lineHeight: 1.6,
              fontWeight: 400,
              letterSpacing: 0.5,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default PageHero;