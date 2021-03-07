import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import ProfileButton from "./ProfileButton";

const NavBar = ({ setAuthenticated }) => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  const onSearch = async (e) => {
    e.preventDefault();
    //dispatch the search query
    //history.push('/search-results)
  };
  return (
    <nav>
      <div className="menu">
        <div className="icon-container">
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              src="https://andromedaplants.s3.amazonaws.com/plonts/yuccado.jpg"
              className="home-icon"
            />
          </NavLink>
          <div className="banner"> Andromeda Plants</div>
        </div>
        <div className="search-container">
          <form onSubmit={onSearch}>
            <input placeholder="Search" className="searchbar" />
          </form>
        </div>
        <div className="nav-group">
          <div className="buttonWrapper">
            <ProfileButton setAuthenticated={setAuthenticated} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
