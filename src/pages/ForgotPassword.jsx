
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendBaseURL } from "../config";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);


  //generate forgot password url
  const forgotPassword_URL = `${backendBaseURL}/api/auth/forgot_password`

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true)

    try {

      const response = await fetch(forgotPassword_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email: email
        }
      });

      if (response.ok) {
        alert("Password reset link sent to email 📩");
      } else {
        alert("Invalid Email")
      }
    } catch (error) {
      alert("Server error, please try again later.");
    } finally {
      setLoading(false)
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          {
            loading ? <p>Loading...</p> : <p></p>
          }

          <button type="submit" style={styles.button}>
            Send Reset Link
          </button>
        </form>

        <p style={styles.linkText}>
          Back to{" "}
          <span onClick={() => navigate("/login")} style={styles.link}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2"
  },
  card: {
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px gray",
    width: "300px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  linkText: {
    marginTop: "10px",
    fontSize: "14px"
  },
  link: {
    color: "blue",
    cursor: "pointer"
  }
};

export default ForgotPassword;