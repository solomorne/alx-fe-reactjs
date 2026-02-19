import { useState } from 'react';

const RegistrationForm = () => {
  // Individual state hooks for each field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation: check if any field is empty
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('Controlled Form Submitted:', { username, email, password });
    alert('Success! Check the console for your data.');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h2>Controlled Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />

      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button type="submit">Register</button>
    </form>
  );
};

const formStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: '12px', 
  maxWidth: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px'
};

export default RegistrationForm;