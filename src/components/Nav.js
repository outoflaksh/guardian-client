import React from "react";
import { BsRecordCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-brand">
        <BsRecordCircle
          size="1.6rem"
          color="white"
          style={{ marginRight: "8px" }}
        />
        GUARDIAN
      </div>
      <div className="nav-links">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">Family Tracker</a>
        </li>
        <li className="nav-item">
          <a href="/">My Location</a>
        </li>
        <li className="nav-item">
          <a href="/">Profile</a>
        </li>
      </div>
    </div>
  );
};

export default Nav;
