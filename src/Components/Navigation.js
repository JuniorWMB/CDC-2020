import React, { useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

/* importation de gsap*/
import gsap from "gsap";

function Navigation({ handleClick }) {
  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(".ok1", {
      duration: 1,
      delay: 1,
      y: 100,
      stagger: {
        amount: 0.5,
      },
    });
  }, [tl]);

  return (
    <div className="navigation__container">
      <div className="nav__menu">
        <div className="ok">
          <p className="ok1">Actualités</p>
        </div>
        <div className="ok">
          <p className="ok1">Résultats</p>
        </div>
        <div className="ok">
          <p className="ok1">Equipements</p>
        </div>
        <div className="ok">
          <p className="ok1">Roster</p>
        </div>
      </div>
      <div className="nav__crossandinfo">
        <RiCloseCircleLine onClick={handleClick} size={55} />
        <div>Contacts</div>
      </div>
    </div>
  );
}

export default Navigation;
