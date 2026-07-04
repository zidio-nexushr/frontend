
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendBaseURL } from "../config";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    setLoading(true)

    //login url
    const loginURL = `${backendBaseURL}/api/auth/login`
    console.log(`Trying ${process.env.REACT_APP_BD_BASE_URL}`);

    try {
      const response = await fetch(loginURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      })

      if (response.ok) {
        alert("Login Successful 🎉");

        navigate("/");
      }else{
        alert("Invalid Credentials");
      }
    } catch (error) {
      alert("Server error, please try again later.");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          {
                        loading ? 'Resetting Password...' : <p></p>
                            
                    }

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.linkText}>
          Forgot Password?{" "}
          <span onClick={() => navigate("/forgot-password")} style={styles.link}>
            Click here
          </span>
        </p>

        <p style={styles.linkText}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} style={styles.link}>
            Register
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
    backgroundColor: "blue",
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

export default Login;