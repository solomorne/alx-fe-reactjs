import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Profile, { ProfileDetails, ProfileSettings } from './components/Profile';

// Dynamic Content Component
const BlogPost = () => {
  const { postId } = useParams();
  return <div style={{ padding: '20px' }}><h3>Viewing Blog Post ID: {postId}</h3></div>;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f4f4f4' }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/profile">Profile (Protected)</Link> | {" "}
        <Link to="/post/101">Blog Post 101</Link> | {" "}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome Home!</h2>} />
        
        {/* Dynamic Route */}
        <Route path="/post/:postId" element={<BlogPost />} />

        {/* Protected + Nested Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested children: /profile/details and /profile/settings */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;