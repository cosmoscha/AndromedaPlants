import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import ProfileButton from "./ProfileButton";
const NavBar = ({ setAuthenticated }) => {
  return (
    <nav>
      <div className="menu">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <ProfileButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
