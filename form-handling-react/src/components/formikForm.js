import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  return (
    <div style={containerStyles}>
      <h2>Formik Registration</h2>
      
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulating an API call
          console.log('Formik Submission:', values);
          alert('Registration Successful via Formik!');
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form style={formStyles}>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={errorStyle} />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={errorStyle} />

            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={errorStyle} />

            <button type="submit" disabled={isSubmitting} style={buttonStyles}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Styles for consistency
const containerStyles = { maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' };
const formStyles = { display: 'flex', flexDirection: 'column', gap: '10px' };
const errorStyle = { color: 'red', fontSize: '12px', marginTop: '-8px' };
const buttonStyles = { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' };

export default FormikForm;