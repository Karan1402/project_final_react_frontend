import React from "react";
import "./Welcome.css"

export default function Welcome() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Welcome</h1>
          <h2>To</h2>
          <h2>ART Gallery</h2>
        </div>
        <div className="sphere-container">
        <div className="sphere sphere1"></div>
        <div className="sphere sphere2"></div>
        <div className="sphere sphere3"></div>
      </div>
      </div>
     
    </>
  );
}
