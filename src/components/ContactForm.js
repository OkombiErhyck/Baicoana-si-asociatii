import React from 'react';
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9+()-\s]*$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 characters'),
  consent: yup
    .boolean()
    .oneOf([true], 'You must accept the privacy policy'),
});

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit?.(values);
    },
  });

  return (
    <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Your Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={formik.values.consent}
                  onChange={formik.handleChange}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  I agree to the processing of my personal data in accordance with the privacy policy
                </Typography>
              }
            />
            {formik.touched.consent && formik.errors.consent && (
              <Typography color="error" variant="caption">
                {formik.errors.consent}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactForm;