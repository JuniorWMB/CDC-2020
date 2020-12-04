import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Navigation() {
  return (
    <div className="navigation__title">
      <div className="navigation__menu">
        <h2>Actualités</h2>
        <h2>Entrainements</h2>
        <h2>Roster</h2>
        <h2>Photos</h2>
        <h2>Pratice</h2>
      </div>
      <div className="navigation__right">
        <div>
          <RiCloseCircleLine size={150} />
        </div>
        <div className="navigation__rightbottom">
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
