import React from "react";
import "./Evnetlayout.css";

function Evnetlayout(props) {
  return (
    <div
      className="Evnetlayout"
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="Evnetlayout-Detail">
        <h1>{props.Name}</h1>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default Evnetlayout;
