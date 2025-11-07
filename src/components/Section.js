import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Section = ({ 
  children, 
  title, 
  subtitle,
  centered = false,
  maxWidth = 'lg',
  backgroundColor = 'background.default',
  spacing = { xs: 8, md: 12 },
}) => {
  return (
    <Box
      component="section"
      sx={{
        py: spacing,
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: backgroundColor,
      }}
    >
      <Container maxWidth={maxWidth}>
        {(title || subtitle) && (
          <Box sx={{ 
            mb: { xs: 6, md: 8 },
            maxWidth: '800px',
            mx: centered ? 'auto' : 'initial',
            textAlign: centered ? 'center' : 'left',
          }}>
            {title && (
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography 
                variant="subtitle1" 
                color="text.secondary"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;