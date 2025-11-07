import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = ({ faqs, category }) => {
  return (
    <Box>
      {category && (
        <Typography
          variant="h6"
          color="primary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          {category}
        </Typography>
      )}
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          elevation={0}
          sx={{
            border: 1,
            borderColor: 'divider',
            '&:not(:last-child)': {
              borderBottom: 0,
            },
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: 'background.paper',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <Typography variant="subtitle1" fontWeight="medium">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;