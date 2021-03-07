import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const ProfileButton = ({ setAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  let profileButtons = (
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
  );
  return (
    <>
      <div className="button-container">
        <button
          onClick={() => setShowMenu(showMenu === true ? false : true)}
          id="dropdown_button"
        >
          <AccountBoxIcon fontSize="large" />
        </button>

        {showMenu && profileButtons}
      </div>
    </>
  );
};

export default ProfileButton;
