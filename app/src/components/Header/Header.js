import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { NavLink } from "react-router-dom";
import React from "react";
import logoutImgWhite from "../../images/logout-white.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleLogInClick,
  handleOpenClick,
  handleCloseClick,
  isOpened,
  searchWorld,
  handleSearchChange,
  handleSearchClick,
  handleLogoutClick,
  isLoggedIn,
}) {
  const currentUser = React.useContext(CurrentUserContext);

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
          {isLoggedIn && (
            <li className="nav-bar__item">
              <NavLink
                className="nav-bar__link nav-bar__link_border_none"
                to="/saved-news"
              >
                Saved articles
              </NavLink>
            </li>
          )}
          <li className="nav-bar__item">
            {isLoggedIn ? (
              <button
                onClick={handleLogoutClick}
                className="nav-bar__button"
                type="button"
              >
                <span className="nav-bar__user">{currentUser.name}</span>
                <img
                  src={logoutImgWhite}
                  className="nav-bar__icon"
                  alt="icon"
                ></img>
              </button>
            ) : (
              <button
                onClick={handleLogInClick}
                className="nav-bar__button"
                type="button"
              >
                Sign in
              </button>
            )}
          </li>
        </ul>
      </Navigation>
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
        searchWorld={searchWorld}
      />
    </header>
  );
}

export default Header;
