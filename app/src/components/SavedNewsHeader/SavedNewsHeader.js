import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import logoutImg from "../../images/logout.svg";

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
            isOpened ? "navBar__menu navBar__menu_view_mobile" : "navBar__menu"
          }
        >
          <li className="navBar__item">
            <NavLink
              className="navBar__link navBar__link_color_black navBar__link_border_none"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navBar__item navBar__item__color_black">
            <NavLink
              className="navBar__link navBar__link_color_black"
              to="/saved-news"
            >
              Saved articles
            </NavLink>
          </li>
          <li className="navBar__item ">
            <button
              className="navBar__button navBar__button_color_black"
              type="button"
            >
              <span>Elise</span>
              <img src={logoutImg} className="navBar__icon" alt="icon"></img>
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
