import { useState } from 'react';

const RegistrationForm = () => {
  // Individual state for each input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for handling error messages
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Explicit manual validation logic
    if (!username) {
      setErrors('Username is required');
      return;
    }

    if (!email) {
      setErrors('Email is required');
      return;
    }

    if (!password) {
      setErrors('Password is required');
      return;
    }

    // If validation passes
    setErrors('');
    console.log('User Registered:', { username, email, password });
    alert('Registration Successful!');
  };

  return (
    <div style={containerStyles}>
      <h2>Manual Registration</h2>
      
      {errors && <p style={{ color: 'red', fontWeight: 'bold' }}>{errors}</p>}

      <form onSubmit={handleSubmit} style={formStyles}>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button type="submit" style={buttonStyles}>Register</button>
      </form>
    </div>
  );
};

// Simple styles for clarity
const containerStyles = { maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' };
const formStyles = { display: 'flex', flexDirection: 'column', gap: '10px' };
const buttonStyles = { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' };

export default RegistrationForm;