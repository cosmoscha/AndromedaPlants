import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import ProfileButton from "./ProfileButton";
const NavBar = ({ setAuthenticated }) => {
  return (
    <nav>
      <div className="menu">
        <ProfileButton />
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div className="menuButtons">
          <div>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </div>
          <div>
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          </div>
          <div>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
