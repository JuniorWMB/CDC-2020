import React from "react";
import { ImCross } from "react-icons/im";
import { MdPanoramaFishEye } from "react-icons/md";

function Resultat() {
  return (
    <div className="resultat__contain">
      <div className="resultat__score">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p>Dernier résultat</p>
        </div>
        <div>
          <ImCross />
          <MdPanoramaFishEye />
          <ImCross />
          <MdPanoramaFishEye />
          <ImCross />
          <MdPanoramaFishEye />
          <ImCross />
        </div>
        <div className="resultat__score2">
          <span>Conquerants de Caen</span>
          <h3>13</h3>
          <span>:</span>
          <h3>5</h3>
          <span>Spartiate</span>
        </div>
      </div>
    </div>
  );
}

export default Resultat;
