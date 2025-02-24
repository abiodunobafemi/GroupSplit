import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://obi.kean.edu/~aobafemi@kean.edu/GroupSplit/backend/register.php", {
        name,
        email,
        password
      });
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div className="main-container">
      <div className="section-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
