import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
const PlantMenu = ({ setAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  let menuButtons = (
    <div className="sidebar-buttons">
      <NavLink to="/products">all plants</NavLink>
      <div>sample link</div>
      <div>sample link</div>
      <div>sample link</div>
      <div>sample link</div>
    </div>
  );
  return (
    <>
      <div className="side-container">
        <button
          onClick={() => setShowMenu(showMenu === true ? false : true)}
          className="sidebar-button-menu"
        >
          menu
        </button>
        {showMenu && menuButtons}
      </div>
    </>
  );
};

export default PlantMenu;
