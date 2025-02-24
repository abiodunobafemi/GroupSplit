import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://obi.kean.edu/~aobafemi@kean.edu/GroupSplit/backend/login.php", {
        email,
        password
      });
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="main-container">
      <div className="section-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
