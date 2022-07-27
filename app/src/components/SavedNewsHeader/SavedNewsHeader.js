import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import logoutImg from "../../images/logout.svg";
import logoutImgWhite from "../../images/logout-white.svg";

function SavedNewsHeader({ handelOpenClick, handleCloseClick, isOpened }) {
  return (
    <header className="saved-news-header">
      <Navigation
        color="black"
        handleHamburgerClick={handelOpenClick}
        handleCloseClick={handleCloseClick}
        isOpened={isOpened}
      >
        <ul
          className={
            isOpened
              ? "nav-bar__menu nav-bar__menu_view_mobile"
              : "nav-bar__menu"
          }
        >
          <li className="nav-bar__item">
            <NavLink
              className="nav-bar__link nav-bar__link_color_black nav-bar__link_border_none"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-bar__item nav-bar__item__color_black">
            <NavLink
              className="nav-bar__link nav-bar__link_color_black"
              to="/saved-news"
            >
              Saved articles
            </NavLink>
          </li>
          <li className="nav-bar__item ">
            <button
              className="nav-bar__button nav-bar__button_color_black"
              type="button"
            >
              <span>Elise</span>
              <img
                src={isOpened ? logoutImgWhite : logoutImg}
                className="nav-bar__icon"
                alt="icon"
              ></img>
            </button>
          </li>
        </ul>
      </Navigation>
      <div className="saved-news-header__content">
        <p className="saved-news-header__word">Saved articles</p>
        <h1 className="saved-news-header__description">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-news-header__keywords-container">
          By keywords:{" "}
          <span className="saved-news-header__keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
