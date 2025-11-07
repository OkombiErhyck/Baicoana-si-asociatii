import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import HomePage from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load other pages
const Services = React.lazy(() => import('./pages/Services'));
const Lawyers = React.lazy(() => import('./pages/Lawyers'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ClientPortal = React.lazy(() => import('./pages/ClientPortal'));
const About = React.lazy(() => import('./pages/About'));
const Consultation = React.lazy(() => import('./pages/Consultation'));

// Legal Pages
const PrivacyPolicy = React.lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfUse = React.lazy(() => import('./pages/Legal/TermsOfUse'));
const CookiePolicy = React.lazy(() => import('./pages/Legal/CookiePolicy'));

// Service Detail Pages
const CorporateLaw = React.lazy(() => import('./pages/Services/detail/CorporateLaw'));
const RealEstateLaw = React.lazy(() => import('./pages/Services/detail/RealEstateLaw'));

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            maxWidth: '2000px',
            mx: 'auto',
            overflow: 'hidden',
            bgcolor: 'background.default',
          }}
        >
          <Header />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <React.Suspense 
              fallback={
                <Box 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '50vh'
                  }}
                >
                  Loading...
                </Box>
              }
            >
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/lawyers" element={<Lawyers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portal" element={<ClientPortal />} />
                <Route path="/consultation" element={<Consultation />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/cookies" element={<CookiePolicy />} />

                {/* Service Detail Pages */}
                <Route path="/services/corporate-law" element={<CorporateLaw />} />
                <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
              </Routes>
            </React.Suspense>
          </Box>
          <Footer />
        </Box>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
