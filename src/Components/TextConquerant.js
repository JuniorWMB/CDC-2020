import React, { useEffect } from "react";
import { MdPanoramaFishEye } from "react-icons/md";
import { ImCross } from "react-icons/im";
import gsap from "gsap";

function TextConquerant() {
  let tl = gsap.timeline();

  //   useEffect(() => {
  //     tl.to(".deroule", { duration: 2.8, x: 900, repeat: -1, yoyo: true });
  //   }, []);
  return (
    <div className="text__conquerant content">
      {/* <div className="message">
        <span className="deroule" style={{ marginLeft: "50px" }}>
          Conquerants de caen
        </span>
        <span className="text__icon deroule">
          <ImCross color="#EAB543" size={47} />
          <MdPanoramaFishEye size={52} />
          <ImCross color="#EAB543" size={47} />
        </span>
        <span className="deroule">your lands </span>
      </div> */}
      <section>
        <div className="scroll ">
          <div>
            <span style={{ marginLeft: "10px" }}> Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={47} />
              <MdPanoramaFishEye size={52} />
              <ImCross color="#EAB543" size={47} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>
            {/* 
            <span style={{ color: "white" }}>test - Online </span>
            <span style={{ color: "white" }}>test - Online </span> */}
            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={47} />
              <MdPanoramaFishEye size={52} />
              <ImCross color="#EAB543" size={47} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>

            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={47} />
              <MdPanoramaFishEye size={52} />
              <ImCross color="#EAB543" size={47} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>

            <span style={{ marginLeft: "10px" }}>Conquerants de caen</span>
            <span style={{ marginLeft: "10px" }}>
              <ImCross color="#EAB543" size={47} />
              <MdPanoramaFishEye size={52} />
              <ImCross color="#EAB543" size={47} />
            </span>
            <span style={{ marginLeft: "10px" }}>protect the land /</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextConquerant;
