import React from "react";
import AlertItem from "./AlertItem";

const alerts = [
  {
    type: "help",
    name: "A.",
    distance: 113,
  },
  {
    type: "burgulary",
    name: null,
    distance: 24,
  },
  {
    type: "help",
    name: "R.",
    distance: 236,
  },
];

const AlertList = () => {
  return (
    <div className="container">
      <h1>Active alerts:</h1>
      {alerts.map((alert, idx) => (
        <AlertItem
          type={alert.type}
          distance={alert.distance}
          name={alert.name}
          key={idx}
        />
      ))}
    </div>
  );
};

export default AlertList;
