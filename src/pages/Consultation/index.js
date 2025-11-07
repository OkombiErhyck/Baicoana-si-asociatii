import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PageHero from '../../components/PageHero';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  serviceType: yup.string().required('Please select a service type'),
  preferredDate: yup.date().required('Please select a preferred date'),
  preferredTime: yup.string().required('Please select a preferred time'),
  description: yup.string().required('Please provide a brief description'),
  consent: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

const ConsultationPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Personal Information', 'Service Details', 'Schedule', 'Review'];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM',
  ];

  const services = [
    'Corporate Law',
    'Real Estate Law',
    'Family Law',
    'Criminal Defense',
    'Intellectual Property',
    'Tax Law',
  ];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      serviceType: '',
      preferredDate: null,
      preferredTime: '',
      description: '',
      consent: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Service Type</InputLabel>
                <Select
                  id="serviceType"
                  name="serviceType"
                  value={formik.values.serviceType}
                  onChange={formik.handleChange}
                  error={formik.touched.serviceType && Boolean(formik.errors.serviceType)}
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Brief Description of Your Case"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Preferred Date"
                  value={formik.values.preferredDate}
                  onChange={(value) => formik.setFieldValue('preferredDate', value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={formik.touched.preferredDate && Boolean(formik.errors.preferredDate)}
                      helperText={formik.touched.preferredDate && formik.errors.preferredDate}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Preferred Time</InputLabel>
                <Select
                  id="preferredTime"
                  name="preferredTime"
                  value={formik.values.preferredTime}
                  onChange={formik.handleChange}
                  error={formik.touched.preferredTime && Boolean(formik.errors.preferredTime)}
                >
                  {timeSlots.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Review Your Information
              </Typography>
              <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: 'divider' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Name:</Typography>
                    <Typography>{`${formik.values.firstName} ${formik.values.lastName}`}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">Contact:</Typography>
                    <Typography>{formik.values.email}</Typography>
                    <Typography>{formik.values.phone}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Service Type:</Typography>
                    <Typography>{formik.values.serviceType}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Appointment:</Typography>
                    <Typography>
                      {formik.values.preferredDate && new Date(formik.values.preferredDate).toLocaleDateString()}
                      {' at '}
                      {formik.values.preferredTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">Case Description:</Typography>
                    <Typography>{formik.values.description}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="consent"
                    checked={formik.values.consent}
                    onChange={formik.handleChange}
                  />
                }
                label="I agree to the terms and conditions and privacy policy"
              />
              {formik.touched.consent && formik.errors.consent && (
                <Typography color="error" variant="caption">
                  {formik.errors.consent}
                </Typography>
              )}
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHero
        title="Free Consultation"
        subtitle="Schedule a free consultation with our legal experts"
        backgroundImage="/images/consultation-hero.jpg"
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider' }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={formik.handleSubmit}>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.values.consent}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default ConsultationPage;