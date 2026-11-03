import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
} from "react-icons/fc";

import { MdBiotech } from "react-icons/md";

import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
          
            

            <li className="nav-item-mobileview">
              <Switch onChange={changeTheme} checked={theme === "light"} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
