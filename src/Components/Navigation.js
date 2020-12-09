import React, { useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

/* importation de gsap*/
import gsap from "gsap";

function Navigation({ handleClick }) {
  let text = useRef(null);
  let tl = gsap.timeline();
  useEffect(() => {
    tl.to(".ok1", {
      duration: 2,
      y: 500,
      ease: "power4.out",
      opacity: 0,
      delay: 1,
      skewY: 7,
      css: { color: "red" },
      stagger: {
        amount: 0.3,
      },
    });
  }, [tl]);

  return (
    <div className="navigation__container">
      <div className="nav__menu">
        <div className="ok">
          <p className="ok1">Actualités</p>
        </div>
        <div>Résultats</div>
        <div>Equipements</div>
        <div>Roster</div>
      </div>
      <div className="nav__crossandinfo">
        <RiCloseCircleLine onClick={handleClick} size={55} />
        <div>Contacts</div>
      </div>
    </div>
  );
}

export default Navigation;
