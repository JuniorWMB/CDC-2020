import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "../App.css";
import { MdViewHeadline } from "react-icons/md";
import { MdPanoramaFishEye } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Navigation from "./Navigation";

function Header() {
  let menu = useRef(null);
  const tl = gsap.timeline();

  const [state, setState] = useState({
    clicked: false,
    menuName: "menu",
  });

  const handleClick = () => {
    if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
      });
      console.log("1");
    } else {
      setState({
        clicked: !state.clicked,
      });
      console.log("2");
    }
  };

  // useEffect(() => {
  //   if (state.clicked === false) {
  //     menu.style.display = "none";
  //   } else if (state.clicked === true) {
  //     menu.style.display = "block";
  //     tl.to(".menu__show2", {});
  //   }
  // }, [state.clicked]);

  useEffect(() => {
    if (state.clicked === false) {
      tl.to(".menu__show2", { duration: 0, css: { display: "none" } });
    } else if (state.clicked === true) {
      tl.from(".menu__show2", { x: 200, opacity: 1 });
    }
  }, [tl]);

  return (
    <div className="menu__container">
      <div className="menu__showorhidden">
        <div className="menu__show"></div>
        <div ref={(el) => (menu = el)} className="menu__show2">
          <Navigation />
        </div>
      </div>
      <header className="menu">
        <div className="menu__nav">
          <MdViewHeadline onClick={handleClick} />
        </div>
        <p>By Junior Wembopa</p>
        <p>
          <b>Conquerants</b>
        </p>
        <div className="menu__right ">
          <p>Caen</p>
          <div className="menu__trait"></div>
          <div className="menu__xxx">
            <ImCross />
            <MdPanoramaFishEye />
            <ImCross />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
