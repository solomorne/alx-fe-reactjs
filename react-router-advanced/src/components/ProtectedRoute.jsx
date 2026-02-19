import { Navigate, useLocation } from 'react-router-dom';

// Simulated custom hook for authentication
const useAuth = () => {
  // In a real app, this would check a token in localStorage or a Context state
  const user = JSON.parse(localStorage.getItem('user'));
  return { isAuthenticated: !!user };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the home page, but save the current location they 
    // were trying to go to. This allows you to redirect them back after login.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;