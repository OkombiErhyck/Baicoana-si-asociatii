import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Fade,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Phone as PhoneIcon, KeyboardArrowDown as ArrowIcon } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const CallbackDialog = ({ open, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle callback request submission
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Request a Discreet Callback</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Preferred Time"
            type="text"
            fullWidth
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            required
            variant="outlined"
            placeholder="e.g., 'Morning' or 'After 6 PM'"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" variant="text">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Request Callback
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const Header = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [servicesAnchor, setServicesAnchor] = useState(null);
  const [callbackDialogOpen, setCallbackDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { language, setLanguage } = useLanguage();
  const locale = translations[language] || translations.en;
  const navigation = locale.nav.items;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleOpenServices = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleCloseServices = () => {
    setServicesAnchor(null);
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? 'background.paper' : 'transparent',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.05)' : 'none',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid' : 'none',
          borderColor: 'divider',
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
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: { xs: 64, sm: 70, md: 80 }, 
              transition: 'min-height 0.3s ease',
              justifyContent: 'space-between',
            }}>
            {/* Logo for desktop */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 4,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Cormorant',
                fontWeight: 600,
                color: 'text.primary',
                textDecoration: 'none',
                letterSpacing: 1,
                whiteSpace: 'nowrap',
              }}
            >
              BAICOANA & ASSOCIATES
            </Typography>

            {/* Mobile menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: '100%',
                    top: '0 !important',
                    left: '0 !important',
                    right: '0',
                    height: '100vh',
                    maxHeight: 'none',
                    borderRadius: 0,
                  }
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  p: 2,
                  borderBottom: '1px solid',
                  borderColor: 'divider'
                }}>
                  <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                      fontFamily: 'Cormorant',
                      fontWeight: 600,
                      color: 'text.primary',
                      textDecoration: 'none',
                    }}
                  >
                    B&A
                  </Typography>
                  <IconButton onClick={handleCloseNavMenu}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                {navigation.map((item) => (
                  <MenuItem 
                    key={item.label} 
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      py: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Typography>{item.label}</Typography>
                  </MenuItem>
                ))}
                <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
                  <Button
                    fullWidth
                    size="small"
                    variant={language === 'en' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => setLanguage('en')}
                  >
                    {locale.nav.languageSwitch.english}
                  </Button>
                  <Button
                    fullWidth
                    size="small"
                    variant={language === 'ro' ? 'contained' : 'outlined'}
                    color="primary"
                    onClick={() => setLanguage('ro')}
                  >
                    {locale.nav.languageSwitch.romanian}
                  </Button>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleCloseNavMenu();
                      setCallbackDialogOpen(true);
                    }}
                  >
                    {locale.nav.requestCallback}
                  </Button>
                </Box>
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Cormorant',
                fontWeight: 600,
                color: 'text.primary',
                textDecoration: 'none',
                letterSpacing: 0.5,
              }}
            >
              B&A
            </Typography>

            {/* Desktop menu */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }, 
                justifyContent: 'center', 
                gap: { md: 1, lg: 2 },
                mx: { md: 4, lg: 6 }
              }}
            >
              {navigation.map((item) =>
                item.submenu ? (
                  <Box key={item.label}>
                    <Button
                      onClick={handleOpenServices}
                      endIcon={<ArrowIcon sx={{ 
                        transition: 'transform 0.2s',
                        transform: Boolean(servicesAnchor) ? 'rotate(180deg)' : 'rotate(0)',
                      }} />}
                      sx={{
                        color: 'text.primary',
                        px: { md: 2, lg: 3 },
                        py: 1,
                        fontSize: { md: '0.9rem', lg: '1rem' },
                        fontWeight: 500,
                        transition: 'all 0.2s',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'action.hover',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      anchorEl={servicesAnchor}
                      open={Boolean(servicesAnchor)}
                      onClose={handleCloseServices}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          mt: 1,
                          minWidth: 200,
                          borderRadius: 1,
                          boxShadow: 2,
                        }
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <MenuItem 
                          key={subItem.label} 
                          onClick={handleCloseServices}
                          sx={{
                            py: 1.5,
                            px: 2,
                            '&:hover': {
                              backgroundColor: 'action.hover',
                            }
                          }}
                        >
                          <Typography variant="body2">{subItem.label}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={item.label}
                    href={item.path}
                    sx={{
                      color: 'text.primary',
                      px: 2,
                      py: 1,
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>

            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  mr: { md: 2 },
                }}
              >
                <Button
                  size="small"
                  variant={language === 'en' ? 'contained' : 'text'}
                  color={language === 'en' ? 'primary' : 'inherit'}
                  onClick={() => setLanguage('en')}
                  sx={{
                    minWidth: 0,
                    px: 1.5,
                    py: 0.5,
                    fontWeight: 600,
                  }}
                >
                  {locale.nav.languageSwitch.english}
                </Button>
                <Button
                  size="small"
                  variant={language === 'ro' ? 'contained' : 'text'}
                  color={language === 'ro' ? 'primary' : 'inherit'}
                  onClick={() => setLanguage('ro')}
                  sx={{
                    minWidth: 0,
                    px: 1.5,
                    py: 0.5,
                    fontWeight: 600,
                  }}
                >
                  {locale.nav.languageSwitch.romanian}
                </Button>
              </Box>
            )}

            {/* Contact buttons */}
            {!isMobile && (
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: { md: 1, lg: 2 }, 
                  alignItems: 'center',
                  ml: 'auto'
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<PhoneIcon sx={{ fontSize: '1.25rem' }} />}
                  onClick={() => setCallbackDialogOpen(true)}
                  sx={{ 
                    borderRadius: 2,
                    px: { md: 2, lg: 3 },
                    py: 1,
                    fontSize: { md: '0.875rem', lg: '0.9rem' },
                    fontWeight: 500,
                    borderWidth: 1.5,
                    '&:hover': {
                      borderWidth: 1.5,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {locale.nav.requestCallback}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  href="/consultation"
                  sx={{ 
                    borderRadius: 2,
                    px: { md: 2, lg: 3 },
                    py: 1,
                    fontSize: { md: '0.875rem', lg: '0.9rem' },
                    fontWeight: 500,
                    boxShadow: 2,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  {locale.nav.freeConsultation}
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;