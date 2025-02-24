import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="main-container">
      <div className="section-container">
        <h1>
          WELCOME TO <span>GROUPSPLIT</span>
        </h1>
        <p>Manage and split subscriptions with your friends easily.</p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
