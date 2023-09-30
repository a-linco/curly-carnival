import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState(""); // New state for email
  const [password, setPassword] = useState(""); // New state for password
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(email, password); // Use email and password from state
      setMessage(message);
    } catch (error) {
      setMessage("Invalid credentials. Please try again.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            placeholder="Enter your password"
          />
        </div>
        <button onClick={attemptLogin}>Login</button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
