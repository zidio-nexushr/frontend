
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h1>Welcome to NexusHR</h1>
        <p>Human Resource Management System</p>

        <Link to="/login">
          <button
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>

        <br />
        <br />

        <Link to="/register">
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#28A745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;