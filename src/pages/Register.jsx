
import React, { useState } from "react";
import { backendBaseURL } from "../config";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigator = useNavigate();


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: ""
  });

  //loaging state
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //set the laoding state to be true while fetching from BE
    setLoading(true)

    //register URL
    const registerURL = `${backendBaseURL}/api/auth/register`

    console.log(`Trying ${process.env.REACT_APP_BD_BASE_URL}`);


    try {

      await fetch(registerURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        })
      })
      
      alert("Registration Successful (Demo)");

      navigator("/login");

    } catch (error) {
      alert("Server error, please try again later.");

    }finally{
      setLoading(false);
    }

  };

  return (
    <div style={styles.container}>
      <h2>Register Page</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="first_name"
          placeholder="Enter First Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Enter Last Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="role"
          onChange={handleChange}
          style={styles.input}
        >
          <option value="EMPLOYEE">EMPLOYEE</option>
          <option value="MANAGER">MANAGER</option>
          <option value="ADMIN">AdMIN</option>
          <option value="ADMIN">HR</option>
        </select>


        {
          loading ? <p>Loading</p>: <p></p>
        }


        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  form: { display: "flex", flexDirection: "column", width: "300px", margin: "auto" },
  input: { margin: "10px 0", padding: "10px" },
  button: { padding: "10px", backgroundColor: "green", color: "white", border: "none" }
};

export default Register;