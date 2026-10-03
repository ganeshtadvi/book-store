import { useState } from "react";
import { signUp } from "../../services/authService.js";
import { useNavigate, Link } from "react-router-dom";
import Notification from "./Notification.jsx";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [msg, setMsg] = useState(null);
  const [notificationStyle, setNotificationType] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      name,
      password,
      email,
    };

    signUp(newUser)
      .then(() => {
        setMsg("🎉 Account created successfully! Redirecting to login…");
        setNotificationType("success");

        setTimeout(() => {
          setMsg(null);
          setNotificationType(null);
          navigate("/login");
        }, 4000);
      })
      .catch((err) => {
        setMsg("⚠️ " + (err.response?.data?.error || "Signup failed"));
        setNotificationType("failed");

        setTimeout(() => {
          setMsg(null);
          setNotificationType(null);
        }, 4000);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        {/* LEFT SIDE */}
        <div className="signup-brand">
          <h2>📖 Book Store</h2>

          <h1>Start Your Journey!</h1>

          <p>
            Create your account and discover your next favorite book with us.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="signup-form-container">
          <h1>Create Account</h1>

          <p className="signup-subtitle">
            <Notification msg={msg} notificationStyle={notificationStyle} />
            Enter your details to create your account
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              required
            />

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              required
            />

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />

            <label>
              Password
              <div className="signup-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <div className="signup-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button className="social-button">Sign Up with Google</button>

          <button className="social-button">Sign Up with Facebook</button>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
