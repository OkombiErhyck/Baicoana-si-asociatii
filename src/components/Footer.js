import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Phone,
  Email,
  WhatsApp,
  Facebook,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Our Team', path: '/lawyers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Client Portal', path: '/portal' },
  ];

  const practiceAreas = [
    'Corporate Law',
    'Real Estate',
    'Family Law',
    'Criminal Defense',
    'Intellectual Property',
    'Tax Law',
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
        },
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          width: '100%',
          maxWidth: '2000px',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4} lg={3}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ 
                fontFamily: 'Cormorant',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                mb: { xs: 2, md: 3 },
                letterSpacing: 1,
              }}
            >
              BAICOANA & ASSOCIATES
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: '400px',
              }}
            >
              Your trusted legal partner providing comprehensive legal services with integrity and excellence.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: 'text.primary',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Phone sx={{ mr: 2, fontSize: 22, color: 'primary.main' }} />
                +40 123 456 789
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  color: 'text.primary',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Email sx={{ mr: 2, fontSize: 22, color: 'primary.main' }} />
                contact@baicoana.com
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  color: 'text.primary',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <WhatsApp sx={{ mr: 2, fontSize: 22, color: 'primary.main' }} />
                WhatsApp: +40 123 456 789
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1.25rem', md: '1.375rem' },
                fontWeight: 600,
              }}
            >
              Quick Links
            </Typography>
            <Grid container spacing={2}>
              {quickLinks.map((link) => (
                <Grid item xs={6} key={link.title}>
                  <Link
                    href={link.path}
                    color="text.secondary"
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      transition: 'all 0.2s',
                      '&:hover': { 
                        color: 'primary.main',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {link.title}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Practice Areas */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1.25rem', md: '1.375rem' },
                fontWeight: 600,
              }}
            >
              Practice Areas
            </Typography>
            <Grid container spacing={1}>
              {practiceAreas.map((area) => (
                <Grid item xs={12} key={area}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.main',
                        paddingLeft: '4px',
                      },
                    }}
                  >
                    {area}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Baicoana & Associates. All rights reserved.
              <Link href="/privacy" color="inherit" sx={{ ml: 2 }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" sx={{ ml: 2 }}>
                Terms of Use
              </Link>
              <Link href="/cookies" color="inherit" sx={{ ml: 2 }}>
                Cookie Policy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
            </Box>
            </Grid>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              sx={{ 
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '1.25rem', md: '1.375rem' },
                fontWeight: 600,
              }}
            >
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton 
                color="primary"
                sx={{ 
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton 
                color="primary"
                sx={{ 
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                color="primary"
                sx={{ 
                  border: 1,
                  borderColor: 'divider',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Bar */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 3, md: 4 },
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 2, md: 0 },
          }}
        >
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.875rem', md: '0.9rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {new Date().getFullYear()} Baicoana & Associates. All rights reserved.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: { xs: 2, md: 3 },
              justifyContent: 'center',
            }}
          >
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((text) => (
              <Link
                key={text}
                href="#"
                color="text.secondary"
                sx={{
                  textDecoration: 'none',
                  fontSize: { xs: '0.875rem', md: '0.9rem' },
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;