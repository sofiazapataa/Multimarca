import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // después metemos un loader lindo
  return user ? children : <Navigate to="/login" replace />;
}
