import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import { useState, useEffect } from "react";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();
  const storedDarkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : false
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode); // Apply dark mode class to body
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode)); // Save user preference to local storage
  }, [isDarkMode]);

  return (
    <div className="wrappingDiv">
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">Store Logo</Link>
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="mode-toggle-button">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="navbar__account">
          {loggedIn() === false ? (
            <>
            <div className="navbar__account__buttons">
              <button onClick={() => navigate("/sign-up")}>Sign Up</button>
              <button onClick={() => navigate("/login")}>Login</button></div>
            </>
          ) : (
            <button onClick={() => logout()}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
