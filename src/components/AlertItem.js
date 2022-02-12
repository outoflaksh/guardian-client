import React from "react";
import { AiFillAlert } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";

const AlertItem = ({ type, name, distance }) => {
  const alertMsg = {
    help: `${name} needs help!`,
    burgulary: "Burgulary alert!",
  };
  return (
    <div className="alert-card">
      <AiFillAlert
        size="1.6rem"
        color="#faf8ff"
        style={{ marginLeft: "20px" }}
      />
      <p>
        {alertMsg[type]} <span>{distance}m</span>
      </p>
      <span className="map-btn">
        <FaMapMarkedAlt size="1.3rem" color="#faf8ff" />
      </span>
    </div>
  );
};

export default AlertItem;
