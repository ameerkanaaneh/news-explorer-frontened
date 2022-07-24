import React from "react";

function Navigation(props) {
  return (
    <div className={props.isOpened ? "navBar navBar_mobile" : "navBar "}>
      {props.isOpened && <div className="navBar__overlay"></div>}
      <p
        className={
          props.isOpened ? "navBar__title navBar__title_white" : "navBar__title"
        }
      >
        NewsExplorer
      </p>
      {props.children}
      <button
        className={
          props.isOpened
            ? "navBar__close"
            : props.color
            ? "navBar__hamburger navBar__hamburger_black"
            : "navBar__hamburger"
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
