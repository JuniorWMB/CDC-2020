import React from "react";
import "../App.css";

import conquerant from "../Assets/conquerant.JPG";
function BackgroundPicture() {
  return (
    <div className="background__text">
      <img className="picture" src={conquerant} alt="test" />
      {/* <div className="text__deroulant">
        <div className="text_h2">
          <h2>conquerant de caen xox football americain</h2>
        </div>
      </div> */}
    </div>
  );
}

export default BackgroundPicture;
