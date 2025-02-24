import React, { useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen";
import Dashboard from "./pages/Dashboard";
import "./App.css";

// Protected Route Component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <Link to="/">Home</Link>
          {isAuthenticated && <Link to="/subscriptions">Subscriptions</Link>}
          {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
          {!isAuthenticated && <Link to="/login">Login</Link>}
          {!isAuthenticated && <Link to="/register">Register</Link>}
        </nav>
      </header>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen setAuth={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterScreen />} />

        {/* Protect Subscriptions and Dashboard Routes */}
        <Route
          path="/subscriptions"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><SubscriptionScreen /></ProtectedRoute>}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>}
        />
      </Routes>
    </div>
  );
};

export default App;
