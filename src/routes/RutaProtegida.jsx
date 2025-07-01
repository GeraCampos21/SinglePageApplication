import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function RutaProtegida({ children }) {
  const { isAuthenticated, loading } = UserAuth();

  if (loading) return null; 

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
