import React from "react";
import "./TopBar.css"; // Import the CSS file for styling

const TopBar = () => {
  return (
    <div className="top-bar ">
      <div className="container">
        <div className="logo ">Logo</div>
        <ul className="menu">
          <li>+1 234 5678 910</li>
          <li>demo@example.com</li>
          <li>
            <span>Login</span> | <span>Sign Up</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
