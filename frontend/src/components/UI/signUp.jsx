import { useState } from "react";
import { signUp } from "../../services/authService.js";
import { Navigate, useNavigate } from "react-router-dom";
import Notification from "./Notification.jsx";
import "./signUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      .then((response) => {
        setMsg("🎉 Account created successfully! Redirecting to login…");
        setNotificationType("success");

        setTimeout(() => {
          setMsg(null);
          setNotificationType(null);
          navigate("/login");
        }, 4000);
      })
      .catch((err) => {
        setMsg("⚠️ " + err.response?.data?.error);
        setNotificationType("failed");

        setTimeout(() => {
          setMsg(null);
          setNotificationType(null);
        }, 4000);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <Notification msg={msg} notificationStyle={notificationStyle} />

        <label>
          Name:{" "}
          <input
            placeholder="Enter Your Name"
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Username:{" "}
          <input
            placeholder="Enter Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>
          Email Address:{" "}
          <input
            placeholder="Enter Email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          password:{" "}
          <input
            placeholder="Enter Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
