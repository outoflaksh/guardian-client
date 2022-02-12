import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-brand">GUARDIAN</div>
      <div className="nav-links">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a href="/signup">Signup</a>
        </li>
      </div>
    </div>
  );
};

export default Nav;
