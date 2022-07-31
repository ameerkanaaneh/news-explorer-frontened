import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import logoutImg from "../../images/logout.svg";
import logoutImgWhite from "../../images/logout-white.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import React from "react";

function SavedNewsHeader({
  handelOpenClick,
  handleCloseClick,
  isOpened,
  handleLogoutClick,
  savedNews,
  token,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [keywords, setKeywords] = React.useState([]);

  React.useEffect(() => {
    const currentKeywords = [];
    for (let i = 0; i < savedNews.length; i++) {
      const currentKeyword = savedNews[i].keyword;
      if (!currentKeywords.includes(currentKeyword)) {
        currentKeywords.push(currentKeyword);
      }
    }

    setKeywords(currentKeywords);
  }, [token, savedNews]);
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
              onClick={handleLogoutClick}
            >
              <span>{currentUser.name}</span>
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
          {currentUser.name}, you have {savedNews.length} saved articles
        </h1>
        {keywords.length > 0 && (
          <p className="saved-news-header__keywords-container">
            By keywords:
            <span className="saved-news-header__keywords">
              {keywords.length > 2
                ? `${keywords[0]}, ${keywords[1]}, and ${
                    keywords.length - 2
                  } others`
                : `${keywords[0] !== undefined && keywords[0]}, ${
                    keywords[1] !== undefined ? keywords[1] : ""
                  }`}
            </span>
          </p>
        )}
      </div>
    </header>
  );
}

export default SavedNewsHeader;
