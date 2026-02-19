import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Profile, { ProfileDetails, ProfileSettings } from './components/Profile';

// Component to handle dynamic blog routing
const BlogPost = () => {
  const { id } = useParams(); // Matches the :id in the Route path
  return (
    <div style={{ padding: '20px' }}>
      <h3>Reading Blog Post</h3>
      <p>Currently viewing article ID: <strong>{id}</strong></p>
    </div>
  );
}

const toggleLogin = () => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  } else {
    localStorage.setItem('user', JSON.stringify({ name: 'User123' }));
  }
  // Force a re-render to update the route protection
  window.location.reload(); 
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/blog/react-router">Blog Post 2</Link>
        <Link to="/profile">Profile (Protected)</Link>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        {/* Step 2: Dynamic Routing for Blog Posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Step 3: Protected Route wrapper with Nested Routes inside */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes inside Profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Catch-all for 404s */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

const navStyle = {
  display: 'flex',
  gap: '15px',
  padding: '1rem',
  background: '#eee',
  alignItems: 'center'
};

export default App;