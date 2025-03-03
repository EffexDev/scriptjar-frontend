import "./App.css";
import { AuthProvider, useAuth } from "./config/AuthContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function ProtectedRoute({ element }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            navigate("/");
        }
    }, [user, loading, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? element : null; 
}

function AuthRedirect() {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (user) {
                navigate("/dashboard");
            }
        }
    }, [user, loading, navigate]);

    return null;
}

function App() {
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
}

export default App;