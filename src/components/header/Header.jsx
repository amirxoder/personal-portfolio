import React, { useState } from "react";
import { haederData } from "../../utils/data";
import "./header.css";

const Header = () => {
  // toggle menu
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Amir,
        </a>

        <div className={`nav__menu ${toggle && "show"}`}>
          <ul className="nav__list grid">
            {haederData.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={`#${item.href}`} className={`nav__link `}>
                  <i className={`uil uil-${item.icons} nav__icon`}></i>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close " onClick={toggleHandler}></i>
        </div>

        <div className="nav__toggle" onClick={toggleHandler}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
