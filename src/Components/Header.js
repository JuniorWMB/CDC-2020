import React from "react";
import "../App.css";
import { MdViewHeadline } from "react-icons/md";

function Header() {
  return (
    <div className="menu__container">
      <div className="menu__showorhidden">
        <div className="menu__show"></div>
        <div className="menu__show2"></div>
      </div>
      <header className="menu">
        <div className="menu__nav">
          <MdViewHeadline />
        </div>
        <p>By Junior Wembopa</p>
        <p>Conquerant</p>
        <div className="menu__right ">
          <p>Caen</p>
          <div className="menu__trait"></div>
          <div className="menu__xxx">
            <p>X</p>
            <p>X</p>
            <p>X</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
