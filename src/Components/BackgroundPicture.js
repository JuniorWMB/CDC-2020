import React from "react";
import "../App.css";
import conquerant from "../Assets/conquerant.JPG";
function BackgroundPicture() {
  return (
    <div>
      <img className="picture" src={conquerant} alt="test" />
      <div className="text__deroulant">ok</div>
    </div>
  );
}

export default BackgroundPicture;
