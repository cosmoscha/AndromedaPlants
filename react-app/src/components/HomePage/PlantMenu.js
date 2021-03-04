import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
const PlantMenu = ({ setAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  let menuButtons = (
    <div className="sidebar-buttons">
      <div>sample text</div>
      <div>sample text</div>
      <div>sample text</div>
      <div>sample text</div>
      <div>sample text</div>
    </div>
  );
  return (
    <>
      <div className="side-container">
        <button
          onClick={() => setShowMenu(showMenu === true ? false : true)}
          id="dropdown_button"
        >
          button
        </button>
        {showMenu && menuButtons}
      </div>
    </>
  );
};

export default PlantMenu;
