import { useState } from "react";
import "../App.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { backendBaseURL } from "../config";





const ResetPassword = () => {
    const navigate = useNavigate();
    //get token param
    const [searchParams] = useSearchParams()


    //check loading
    const [loading, setLoading] = useState(false)

    //intiate the form entry data
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })

    //handle on change event
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    //handle submission function
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        setLoading(true);

        //reset password url
        const resetPasswordUrl = `${backendBaseURL}/api/auth/reset_password`
        
        //token
        const token = searchParams.get('token')


        try {
            const response = await fetch(resetPasswordUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: token,
                    password: formData.password
                })
            })

            if (response.ok) {
                alert("Password Reset Successfully");

                navigate("/login");
            } else {
                alert("Invalid or Expired token");
            }

        } catch (err) {
            alert("Server error, please try again later.");
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className="container">
            <div className="card">

                <h2>Reset Password</h2>

                <form
                    action=""
                    className="form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    {
                        loading ? 'Resetting Password...' : formData.confirmPassword &&
                            formData.password !== formData.confirmPassword && (
                                <p style={{ color: "red" }}>Passwords do not match.</p>
                            )
                    }

                    <button className="button" >Reset Password</button>

                </form>

            </div>
        </div>
    )
}


export default ResetPassword;