import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Import fonts in index.html:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap">

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
  palette: {
    mode: 'light',
    primary: {
      main: '#7B6F63', // Warm taupe
      light: '#97867A',
      dark: '#5D544B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9B8C7A', // Mocha gray
      light: '#B3A596',
      dark: '#766B5C',
      contrastText: '#1E1A16',
    },
    accent: {
      main: '#D8B886', // Champagne gold
      light: '#E5C99E',
      dark: '#B99560',
      contrastText: '#3A2A20',
    },
    background: {
      default: '#F8F5F2', // Soft parchment
      paper: '#FFFCFA',
      subtle: '#F1EBE6',
      emphasis: '#FFFFFF', // Pure white for emphasis
    },
    text: {
      primary: '#181210',
      secondary: '#322922',
      disabled: '#9D8E83',
      hint: '#5F544A',
    },
    gold: {
      main: '#C7A879', // Warm antique gold
      light: '#D7BC95',
      dark: '#A48258',
      subtle: 'rgba(199, 168, 121, 0.16)',
    },
    divider: 'rgba(82, 72, 63, 0.16)',
    action: {
      active: 'rgba(62, 44, 53, 0.54)',
      hover: 'rgba(110, 75, 94, 0.08)',
      selected: 'rgba(110, 75, 94, 0.16)',
      disabled: 'rgba(92, 71, 83, 0.26)',
      disabledBackground: 'rgba(92, 71, 83, 0.12)',
      focus: 'rgba(110, 75, 94, 0.12)',
    },
    success: {
      main: '#4A665E',
      light: '#5B7D73',
      dark: '#3A4F49',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#9E4E46',
      light: '#B25E55',
      dark: '#7E3E37',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#546A76',
      light: '#657F8D',
      dark: '#43545E',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: '4rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      color: '#0E0A08',
      '@media (max-width:600px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      color: '#120D0A',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: '2.25rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      color: '#16100E',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h4: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontWeight: 500,
      fontSize: '1.875rem',
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      color: '#1D1613',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h5: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: '0.02em',
      lineHeight: 1.5,
      color: '#241C17',
    },
    h6: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      letterSpacing: '0.02em',
      lineHeight: 1.5,
      color: '#2A221C',
    },
    subtitle1: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontSize: '1.5rem',
      fontWeight: 500,
      letterSpacing: '0.01em',
      lineHeight: 1.6,
      color: '#312720',
    },
    subtitle2: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.01em',
      lineHeight: 1.6,
      color: '#352C26',
    },
    body1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
      color: '#352D26',
    },
    body2: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
      color: '#3C332C',
    },
    button: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.08em',
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '0.75rem',
      letterSpacing: '0.02em',
      lineHeight: 1.6,
    },
    overline: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      lineHeight: 1.6,
      color: '#8C6E82',
    },
    largeDisplay: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontSize: '5rem',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      '@media (max-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    quote: {
      fontFamily: '"Cormorant", "Times New Roman", serif',
      fontSize: '1.5rem',
      fontWeight: 500,
      fontStyle: 'italic',
      letterSpacing: '0',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '16px 32px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          fontWeight: 500,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'currentColor',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: 0.5,
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          },
          '&.Mui-disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
          },
          '&.MuiButton-containedPrimary, &.MuiButton-containedSecondary': {
            '&::after': {
              display: 'none',
            },
          },
          '@media (max-width:600px)': {
            padding: '12px 24px',
          },
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: 'primary.main',
          border: '1px solid rgba(199, 168, 121, 0.45)',
          '&:hover': {
            backgroundColor: 'primary.dark',
            boxShadow: '0px 12px 28px rgba(199, 168, 121, 0.28)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&.Mui-focusVisible': {
            boxShadow: '0 0 0 3px rgba(199, 168, 121, 0.25)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          borderColor: 'gold.main',
          '&:hover': {
            borderWidth: '1.5px',
            borderColor: 'gold.dark',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&.Mui-focusVisible': {
            boxShadow: '0 0 0 3px rgba(199, 168, 121, 0.25)',
          },
        },
        text: {
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-focusVisible': {
            backgroundColor: 'rgba(44, 54, 57, 0.1)',
          },
        },
        startIcon: {
          marginRight: '12px',
        },
        endIcon: {
          marginLeft: '12px',
        },
      },
      variants: [
        {
          props: { variant: 'discrete' },
          style: {
            color: 'text.secondary',
            borderBottom: '1px solid transparent',
            padding: '4px 8px',
            '&:hover': {
              borderBottom: '1px solid currentColor',
              backgroundColor: 'transparent',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'rgba(44, 54, 57, 0.1)',
            },
          },
        },
        {
          props: { variant: 'premium' },
          style: {
            backgroundColor: 'background.paper',
            color: 'text.primary',
            borderLeft: '3px solid',
            borderColor: 'gold.main',
            borderRadius: '0',
            padding: '16px 24px',
            '&:hover': {
              backgroundColor: 'background.subtle',
              transform: 'translateX(4px)',
            },
          },
        },
        {
          props: { variant: 'vip' },
          style: {
            backgroundColor: 'gold.subtle',
            color: 'text.primary',
            border: '1.5px solid',
            borderColor: 'gold.main',
            padding: '16px 32px',
            '&:hover': {
              backgroundColor: 'gold.light',
              borderColor: 'gold.dark',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0px 8px 24px rgba(45, 36, 28, 0.12)',
          borderTop: '3px solid rgba(199, 168, 121, 0.6)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 14px 36px rgba(45, 36, 28, 0.18)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'premium' },
          style: {
            borderLeft: '3px solid',
            borderColor: 'secondary.main',
          },
        },
        {
          props: { variant: 'service' },
          style: {
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'rgba(216, 184, 134, 0.35)',
            '&:hover': {
              borderColor: 'secondary.main',
            },
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(216, 184, 134, 0.4)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            '& fieldset': {
              borderWidth: '1.5px',
              transition: 'border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            '&:hover fieldset': {
              borderWidth: '1.5px',
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1.5px',
            },
            '&.Mui-error fieldset': {
              borderColor: 'error.main',
              borderWidth: '1.5px',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: 'primary.main',
            },
            '&.Mui-error': {
              color: 'error.main',
            },
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            '&.Mui-error': {
              color: 'error.main',
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          boxShadow: '0px 12px 48px rgba(44, 54, 57, 0.16)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '24px 32px',
          '& .MuiTypography-root': {
            fontFamily: '"Cormorant", "Times New Roman", serif',
            fontSize: '1.75rem',
            fontWeight: 500,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '24px 32px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '16px 32px 24px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '12px 24px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'background.subtle',
          },
          '&.Mui-selected': {
            backgroundColor: 'gold.subtle',
            '&:hover': {
              backgroundColor: 'gold.subtle',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          height: '28px',
          backgroundColor: 'rgba(216, 184, 134, 0.18)',
          color: '#3A2A20',
          borderColor: 'rgba(216, 184, 134, 0.35)',
          '&.MuiChip-outlined': {
            borderWidth: '1px',
          },
        },
        label: {
          fontSize: '0.75rem',
          fontWeight: 500,
          letterSpacing: '0.02em',
        },
      },
      variants: [
        {
          props: { variant: 'premium' },
          style: {
            backgroundColor: 'gold.subtle',
            color: 'text.primary',
            borderColor: 'gold.main',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(216, 184, 134, 0.7)',
            transform: 'scaleX(0)',
            transformOrigin: 'right',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
          '&:hover': {
            color: '#B99560',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
        },
        standardSuccess: {
          backgroundColor: 'success.light',
          color: 'success.contrastText',
        },
        standardError: {
          backgroundColor: 'error.light',
          color: 'error.contrastText',
        },
        standardInfo: {
          backgroundColor: 'info.light',
          color: 'info.contrastText',
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const theme = responsiveFontSizes(baseTheme);
export default theme;