import React, { useEffect } from "react";
import { MdPanoramaFishEye } from "react-icons/md";
import { ImCross } from "react-icons/im";
import gsap from "gsap";

function TextConquerant() {
  let tl = gsap.timeline();

  return (
    <div className="text__conquerant content">
      <section>
        <div className="scroll ">
          <div>
            <span style={{ marginLeft: "10px" }}> Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={69} />
              <MdPanoramaFishEye size={72} />
              <ImCross color="#EAB543" size={69} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>
            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={69} />
              <MdPanoramaFishEye size={72} />
              <ImCross color="#EAB543" size={69} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>

            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={69} />
              <MdPanoramaFishEye size={72} />
              <ImCross color="#EAB543" size={69} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>

            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={69} />
              <MdPanoramaFishEye size={72} />
              <ImCross color="#EAB543" size={69} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextConquerant;
