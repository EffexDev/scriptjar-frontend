import "./App.css";
import { AuthProvider, useAuth } from "./config/AuthContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { useEffect, ReactElement } from "react";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

// Define types for the ProtectedRoute component props
interface ProtectedRouteProps {
  element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="flex w-full h-screen text-center justify-center items-center text-5xl">Loading...</div>;
  }

  return user ? element : null;
};

const AuthRedirect: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthRedirect />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
