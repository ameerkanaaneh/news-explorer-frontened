import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import React from "react";

function Header({
  handleLogInClick,
  handleOpenClick,
  handleCloseClick,
  isOpened,
}) {
  return (
    <header className="header">
      <Navigation
        isOpened={isOpened}
        handleHamburgerClick={handleOpenClick}
        handleCloseClick={handleCloseClick}
      >
        <ul
          className={
            isOpened
              ? "nav-bar__menu nav-bar__menu_view_mobile"
              : "nav-bar__menu"
          }
        >
          <li className="nav-bar__item">
            <NavLink className="nav-bar__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-bar__item">
            <button
              onClick={handleLogInClick}
              className="nav-bar__button"
              type="button"
            >
              Sign in
            </button>
          </li>
        </ul>
      </Navigation>
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm />
    </header>
  );
}

export default Header;
