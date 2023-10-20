import React from "react";
import "./styles.css";
import Chart from "./chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        MTC TEAMS PAGE
        <span className="follow"></span>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
