import "./LoginForm.css";
import { login } from "../../services/authService.js";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../UI/Notification.jsx";
import { setToken } from "../../services/bookServices.js";

const LoginForm = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);
  const [notificationStyle, setNotificationStyle] = useState("");

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = {
      email,
      password,
    };

    try {
      const user = await login(credentials);
      window.localStorage.setItem("loggedInUser", JSON.stringify(user));
      setToken(user.token);

      setNotificationStyle("success");
      setMsg("Logging Successful...redirect to Homepage!");

      setTimeout(() => {
        setMsg(null);
        setNotificationStyle(null);
        navigate("/");
      }, 4000);
    } catch (error) {
      console.log("LOGIN FAILED");
      console.log(error);
      console.log(error.response?.data);
      setNotificationStyle("failed");
      setMsg(error.response?.data?.error);

      setTimeout(() => {
        setMsg(null);
        setNotificationStyle(null);
      }, 4000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <h2>📖 Book Store</h2>
          <h1>Welcome Back!</h1>
          <p>Login to continue your reading journey</p>
        </div>

        <div className="login-form-container">
          <h1>Login</h1>
          <p className="login-subtitle">
            <Notification msg={msg} notificationStyle={notificationStyle} />
            Enter your credentials to access your account
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={({ target }) => setEmail(target.value)}
            />

            <label>
              Password
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={({ target }) => setPassword(target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="login-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button className="social-button">Login with Google</button>

          <button className="social-button">Login with Facebook</button>

          <p className="signup-text">
            Didn't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
