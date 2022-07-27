import React from "react";

function Navigation(props) {
  return (
    <div
      className={props.isOpened ? "nav-bar nav-bar_view_mobile" : "nav-bar "}
    >
      {props.isOpened && <div className="nav-bar__overlay"></div>}
      <p
        className={
          props.isOpened
            ? "nav-bar__title nav-bar__title_color_white"
            : "nav-bar__title"
        }
      >
        NewsExplorer
      </p>
      {props.children}
      <button
        className={
          props.isOpened
            ? "nav-bar__close"
            : props.color
            ? "nav-bar__hamburger nav-bar__hamburger_color_black"
            : "nav-bar__hamburger"
        }
        onClick={
          props.isOpened ? props.handleCloseClick : props.handleHamburgerClick
        }
        type="button"
      ></button>
    </div>
  );
}

export default Navigation;
