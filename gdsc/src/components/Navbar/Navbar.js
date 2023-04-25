import "./Navbar.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4 className="title">
          Google Developer Student Clubs <span>SVCE</span>
        </h4>
      </div>
      <div>
        {toggleMenu || screenWidth > 860 ? (
          <ul className="nav-elements">
            {toggleMenu && screenWidth < 860 ? (
              <i className="fa-solid fa-times" onClick={toggleNav}></i>
            ) : null}
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Schedule
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#register">
                <Button>Register</Button>
              </a>
            </li>
          </ul>
        ) : (
          <div className="sidebar-toggle">
            <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
          </div>
        )}
      </div>
      <div className={`${showSidebar ? "mobile-nav__wrapper" : "hide"}`}>
        <div className={`sidebar ${showSidebar ? "sidebar-open" : ""}`}>
          <ul className="sidebar-nav-elements">
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Schedule
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#register">
                <Button>Register</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
