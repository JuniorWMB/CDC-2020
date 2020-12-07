import React, { useEffect } from "react";
import "../App.css";
import conquerant from "../Assets/conquerant.JPG";
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ExpoScaleEase);

function BackgroundPicture() {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".picture",
      { scale: 8 },
      { duration: 3, scale: 1, ease: ExpoScaleEase.config(8, 1) }
    );
  }, []);
  return (
    <div className="background__text">
      <img className="picture" src={conquerant} alt="test" />
    </div>
  );
}

export default BackgroundPicture;
