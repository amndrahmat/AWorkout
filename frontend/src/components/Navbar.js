import { useState } from "react";
import "../style/Navbar.css";

const MobileMenu = () => {
  return (
    <div className={"mobile-menu"}>
      <a href="#Home">Home</a>
      <a href="#Membership">Membership</a>
      <a href="#PersonalTraining">Personal Training</a>
      <a href="#Classes">Classes</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#privacy">Privacy Policy</a>
    </div>
  );
};

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="topnav">
        {/* Your Logo/Brand here */}
        <div className="logo">
          A<span>WORKOUT</span>
        </div>

        <div className="menu">
          <a href="#Home" className="active-link">Home</a>
          <a href="#Membership">Membership</a>
          <a href="#PersonalTraining">Personal Training</a>
          <a href="#Classes">Classes</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>

        {/* This button only shows up on small screens. It is used to open the mobile menu */}
        <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
          &#8801;
        </button>
      </div>

      {/* The mobile menu and the close button */}
      {isShown && <MobileMenu />}
      {isShown && (
        <button className="close-mobile-menu-button" onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
};

export default Navbar;
