import React from 'react';
import { Box, Typography, Rating, Avatar, Paper } from '@mui/material';
import { FormatQuote as FormatQuoteIcon, Star as StarIcon } from '@mui/icons-material';

const TestimonialCard = ({ testimonial }) => {
  const { name, role, content, rating, image } = testimonial;
  const isAnonymous = name === 'Private Client';

  return (
    <Paper
      component="article"
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.paper',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'divider',
        borderRadius: 2,
        '&:hover': {
          borderColor: 'secondary.main',
          transform: 'translateY(-8px)',
          boxShadow: (theme) => `0 16px 40px ${theme.palette.mode === 'light' ? 'rgba(44, 54, 57, 0.08)' : 'rgba(0, 0, 0, 0.25)'}`,
          '& .quote-icon': {
            transform: 'rotate(-10deg) scale(1.1)',
            opacity: 0.15,
          },
        },
      }}
    >
      <FormatQuoteIcon
        className="quote-icon"
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          color: 'secondary.main',
          opacity: 0.1,
          fontSize: { xs: 40, md: 48 },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <Box sx={{ mb: { xs: 2, md: 3 } }}>
        <Rating 
          value={rating} 
          readOnly 
          precision={0.5}
          aria-label={`${rating} out of 5 stars rating`}
          icon={<StarIcon fontSize="small" />}
          emptyIcon={<StarIcon fontSize="small" />}
          sx={{
            '& .MuiRating-icon': {
              color: 'primary.main',
            },
            '& .MuiRating-iconEmpty': {
              color: 'action.disabled',
            },
            '& .MuiRating-iconFilled': {
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            },
          }}
        />
      </Box>

      <Typography
        component="blockquote"
        variant="body1"
        color="text.primary"
        sx={{
          mb: { xs: 3, md: 4 },
          flexGrow: 1,
          position: 'relative',
          zIndex: 1,
          fontSize: { xs: '1rem', md: '1.125rem' },
          lineHeight: 1.6,
          fontStyle: 'italic',
          '&::before': {
            content: '"""',
            color: 'primary.main',
            marginRight: '0.2em',
          },
          '&::after': {
            content: '"""',
            color: 'primary.main',
            marginLeft: '0.2em',
          },
        }}
      >
        {content}
      </Typography>

      <Box 
        component="footer"
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 2,
          pt: { xs: 2, md: 3 },
          borderTop: '1px solid',
          borderTopColor: 'divider',
        }}
      >
        {image ? (
          <Avatar
            src={image}
            alt={name}
            imgProps={{
              loading: 'lazy',
              referrerPolicy: 'no-referrer',
            }}
            sx={{
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              border: 2,
              borderColor: 'background.paper',
              boxShadow: (theme) => `0 4px 12px ${theme.palette.mode === 'light' ? 'rgba(44, 54, 57, 0.08)' : 'rgba(0, 0, 0, 0.15)'}`,
            }}
          />
        ) : (
          <Avatar
            aria-label={isAnonymous ? 'Anonymous client' : name}
            sx={{
              width: { xs: 48, md: 56 },
              height: { xs: 48, md: 56 },
              bgcolor: isAnonymous ? 'grey.300' : 'primary.main',
              color: isAnonymous ? 'text.primary' : 'primary.contrastText',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 600,
            }}
          >
            {isAnonymous ? 'PC' : name.charAt(0)}
          </Avatar>
        )}
        <Box>
          <Typography 
            variant="subtitle1"
            component="cite"
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '0.875rem', md: '1rem' },
              mb: 0.5,
              display: 'block',
              fontStyle: 'normal',
            }}
          >
            {name}
          </Typography>
          <Typography 
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.875rem' },
              fontWeight: 500,
            }}
          >
            {role}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default TestimonialCard;