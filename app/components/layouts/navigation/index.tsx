/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const navigationMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Contract Us",
    link: "contact_us",
  },
];
const MainNavigation = () => {
  const [activeNav, setActiveNav] = useState(0);
  return (
    <header>
      {/* <div className="navigation">
            <nav className="navbar">
                <div className="navbar-container container">
                    <a href="#">
                        <img src="img/poly_logo.svg" className="img-fluid navbar-brand" alt="">
                    </a>
                    <input type="checkbox" name="" id="">
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <ul className="menu-items">
                        <li> <a href="" className="btn btn-primary">Get Started</a></li>
                    </ul>
                </div>
            </nav>
        </div>  */}

      <div className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#">
              <img
                src="/img/poly_logo.svg"
                className="img-fluid navbar-brand"
                alt="navbar-brand"
              />
            </a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="navbar-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              {navigationMenu?.map((navData, index) => (
                <li
                  key={navData.name}
                  className={
                    activeNav === index ? "active-secondary-color" : ""
                  }
                  onClick={() => setActiveNav(index)}
                >
                  <Link href={navData.link} passHref>
                    {navData.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href="" className="btn btn-primary">
            Talk with us
          </a>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
