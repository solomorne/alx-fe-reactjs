import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema using Yup
const RegistrationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  return (
    <div style={{ maxWidth: '300px', marginTop: '40px' }}>
      <h2>Formik + Yup Form</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulating API Call
          setTimeout(() => {
            console.log('Mock API Submission (Formik):', values);
            alert('Registration Successful (Formik)!');
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;