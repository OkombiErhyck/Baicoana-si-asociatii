import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Fade,
  Card,
  Chip,
} from '@mui/material';
import {
  Gavel,
  Security,
  Groups,
  Assessment,
  ArrowForward as ArrowIcon,
  BusinessCenter as BusinessIcon,
  AccountBalance as CourtIcon,
  Home as RealEstateIcon,
  Person as ClientIcon,
} from '@mui/icons-material';
import TestimonialCard from '../../components/TestimonialCard';
import Section from '../../components/Section';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  
  const [selectedService, setSelectedService] = useState(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { language } = useLanguage();
  const locale = translations[language]?.home || translations.en.home;

  // Apply global styles
  React.useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [theme.palette.background.default]);
  
  useEffect(() => {
    setIsHeroVisible(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureIcons = [<Gavel />, <Security />, <Groups />, <Assessment />];
  const servicesIcons = [
    <BusinessIcon />,
    <CourtIcon />,
    <RealEstateIcon />,
    <ClientIcon />,
  ];

  const stats = locale.stats;

  const features = locale.features.items.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index] || featureIcons[0],
  }));

  const services = locale.services.items.map((service, index) => ({
    ...service,
    icon: servicesIcons[index] || servicesIcons[0],
  }));

  const testimonials = locale.testimonials.items;

  const handleConsultationClick = () => {
    navigate('/consultation', { 
      state: { service: selectedService } 
    });
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '2000px',
        mx: 'auto',
        bgcolor: 'background.default',
        minHeight: '100vh',
      }}
    >
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: { 
            xs: 'calc(100vh - 64px)', 
            sm: 'calc(100vh - 70px)', 
            md: 'calc(100vh - 80px)' 
          },
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          pt: { xs: 4, sm: 6, md: 0 },
          pb: { xs: 6, sm: 8, md: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, 
              ${theme.palette.secondary.main}15, 
              ${theme.palette.primary.main}10
            )`,
            opacity: hasScrolled ? 0.8 : 1,
            transition: 'opacity 0.4s ease-in-out',
          },
        }}
      >
        <Container
          maxWidth={isDesktop ? false : 'lg'}
          sx={{
            position: 'relative',
            zIndex: 1,
            px: { xs: 2, sm: 3, md: 4, lg: 8, xl: 16 },
            py: { xs: 4, md: 6 },
            maxWidth: isDesktop ? '1600px' : undefined,
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 6, md: 8, lg: 10 }}
            alignItems="center"
            sx={{
              minHeight: { xs: '75vh', md: 'auto' },
              py: { xs: 4, md: 6 },
            }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <Fade in={isHeroVisible} timeout={1200}>
                <Box
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    maxWidth: { xs: '100%', md: '90%' },
                  }}
                >
                  <Typography
                    variant="overline"
                    color="secondary.main"
                    sx={{
                      mb: { xs: 1, md: 2 },
                      display: 'block',
                      fontSize: { xs: '0.875rem', md: '1rem', lg: '1.1rem' },
                      letterSpacing: '0.15em',
                      fontWeight: 500,
                    }}
                  >
                    {locale.hero.overline}
                  </Typography>
                  <Typography
                    variant="h1"
                    color="text.primary"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4.25rem', lg: '4.75rem' },
                      fontWeight: 600,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      mb: { xs: 2, md: 3 },
                    }}
                  >
                    {locale.hero.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{
                      mb: 4,
                      maxWidth: { xs: '100%', md: '600px', lg: '700px' },
                      fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                      mx: { xs: 'auto', md: 0 },
                    }}
                  >
                    {locale.hero.subtitle}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: { xs: 2, md: 3 },
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'stretch', sm: 'center' },
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleConsultationClick}
                      sx={{
                        px: { xs: 4, md: 6, lg: 8 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: (theme) => theme.shadows[8],
                        },
                      }}
                    >
                      {locale.hero.primaryCta}
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      onClick={() => navigate('/services')}
                      sx={{
                        px: { xs: 4, md: 6, lg: 8 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                          backgroundColor: 'background.paper',
                        },
                      }}
                    >
                      {locale.hero.secondaryCta}
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            {isDesktop && (
              <Grid item lg={7}>
                <Fade in={isHeroVisible} timeout={1500}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      height: '100%',
                    }}
                  >
                    <Box
                      component="img"
                      src="/images/hero-image.jpg"
                      alt="Premium legal services"
                      sx={{
                        width: '90%',
                        maxWidth: '700px',
                        height: 'auto',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: theme.shadows[4],
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                </Fade>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section - Responsive: 1/2/3/4 columns */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            sx={{
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    borderLeft: index !== 0 ? '2px solid' : 'none',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Typography
                    variant="h2"
                    color="primary"
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      fontSize: '3.5rem'
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.disabled"
                    sx={{
                      lineHeight: 1.6,
                      maxWidth: 220,
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section - Fixed 4 columns */}
      <Section
        title={locale.features.title}
        subtitle={locale.features.subtitle}
        centered
      >
        <Grid
          container
          spacing={4}
          sx={{
            mt: 4,
            alignItems: 'stretch',
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: 'background.paper',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: (theme) => `0 10px 30px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.08)'}`,
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    flexShrink: 0,
                    '& svg': {
                      fontSize: '1.75rem',
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Box sx={{ 
                  textAlign: 'center',
                  width: '100%',
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Services Section - Fixed 4 columns */}
      <Section
        title={locale.services.title}
        subtitle={locale.services.subtitle}
        backgroundColor="background.paper"
      >
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'stretch',
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
          }}
        >
          {services.map((service, index) => (
            <Grid item xs={3} key={index}>
              <Card
                variant="outlined"
                onClick={() => navigate(service.link)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  p: 4,
                  gap: 2,
                  cursor: 'pointer',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => `0 16px 40px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(44, 54, 57, 0.08)'}`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    borderRadius: 2,
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : 'background.subtle',
                    width: '80px',
                    height: '80px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    '& svg': {
                      fontSize: '2rem',
                      color: 'primary.main',
                    },
                  }}
                >
                  {service.icon}
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 2,
                      lineHeight: 1.6,
                      maxWidth: '280px',
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'center',
                    mt: 'auto',
                  }}>
                    <Chip
                      label={service.badge}
                      color="secondary"
                      size="small"
                      sx={{ 
                        fontWeight: 500,
                        borderRadius: 1,
                      }}
                    />
                    <ArrowIcon 
                      sx={{ 
                        fontSize: '1rem',
                        transition: 'transform 0.2s ease',
                        transform: 'translateX(0)',
                        '.MuiCard-root:hover &': {
                          transform: 'translateX(4px)',
                        },
                      }} 
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Testimonials Section - Fixed 3 columns */}
      <Section
        title={locale.testimonials.title}
        subtitle={locale.testimonials.subtitle}
        centered
      >
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'stretch',
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Grid item xs={4} key={index}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};

export default HomePage;