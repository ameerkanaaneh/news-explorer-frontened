import React from "react";
import Header from "../Header/Header";
import CardsSection from "../CardsSection/CardsSection";
import About from "../About/About";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Preloader from "../Preloader/Preloader";
function Main({
  isSuccessFormOpened,
  setIsSuccessformOpened,
  setIsSignInformOpened,
  setIsSignUpformOpened,
  isSignInFormOpened,
  isSignUpFormOpened,
  handleSignIn,
  handleSaveClick,
  errors,
  setErrors,
  signInState,
  signUpState,
  setSignInState,
  setSignUpState,
  data,
  setData,
  handleLogoutClick,
  signUpError,
  handleDelete,
  token,
  ...props
}) {
  const validEmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
  );
  const closeAllPopups = (e) => {
    e.preventDefault();
    setIsSignInformOpened(false);
    setIsSignUpformOpened(false);
    setIsSuccessformOpened(false);
    setData({
      email: "",
      password: "",
      username: "",
    });
    setErrors({
      email: "",
      password: "",
      username: "",
    });
    setSignInState(true);
    setSignUpState(true);
  };
  const handleLogInClick = (e) => {
    e.preventDefault();
    setIsSignInformOpened(true);
    props.setIsOpened(false);
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    setIsSignUpformOpened(true);
  };
  const handleAltBtnClick = (e) => {
    e.preventDefault();
    if (isSignInFormOpened) {
      closeAllPopups(e);
      handleSignUpClick(e);
    } else {
      closeAllPopups(e);
      handleLogInClick(e);
    }
  };
  const validateInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errorsData = errors;
    switch (name) {
      case "email":
        errorsData.email = validEmailRegex.test(value)
          ? ""
          : e.target.validationMessage;
        break;
      case "username":
        errorsData.username =
          value.length < 2 ? e.target.validationMessage : "";
        break;
      case "password":
        errorsData.password =
          value.length < 8 ? e.target.validationMessage : "";

        break;
      default:
        break;
    }
    setErrors(errorsData);
    setData({ ...data, [name]: value });
    setSignInState(!e.target.closest("form").checkValidity());
    setSignUpState(!e.target.closest("form").checkValidity());
  };
  return (
    <div className="main">
      <Header
        handleLogoutClick={handleLogoutClick}
        handleSearchClick={props.handleSearchClick}
        handleSearchChange={props.handleSearchChange}
        handleOpenClick={props.handleOpenClick}
        handleCloseClick={props.handleCloseClick}
        isOpened={props.isOpened}
        isLoggedIn={props.isLoggedIn}
        handleLogInClick={handleLogInClick}
        searchWorld={props.searchWorld}
      />
      <main className="main__content">
        {props.preloaderOpened && <Preloader />}
        {props.articles.length !== 0 && (
          <CardsSection
            token={token}
            handleDelete={handleDelete}
            handleSaveClick={handleSaveClick}
            isLoggedIn={props.isLoggedIn}
            articles={props.articles}
            handleShowMoreClick={props.handleShowMoreClick}
            maxArticlesRows={props.maxArticlesRows}
          />
        )}
        <PopupWithForm
          handleAltBtnClick={handleAltBtnClick}
          isOpened={isSignInFormOpened}
          closeAllPopups={closeAllPopups}
          title="Sign in"
          altButton="Sign up"
        >
          <label htmlFor="email" className="popup__label">
            Email
          </label>
          <input
            required
            className="popup__input"
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={validateInput}
            value={data.email}
          />
          <span className="popup__error">{errors.email}</span>
          <label htmlFor="password" className="popup__label">
            Password
          </label>
          <input
            required
            className="popup__input"
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            minlength="8"
            value={data.password}
            onChange={validateInput}
          />

          <span className="popup__error">{errors.password}</span>

          <input
            className="popup__submit"
            disabled={signInState}
            onClick={handleSignIn}
            type="button"
            value="Sign in"
          ></input>
        </PopupWithForm>
        <PopupWithForm
          handleAltBtnClick={handleAltBtnClick}
          isOpened={isSignUpFormOpened}
          closeAllPopups={closeAllPopups}
          title="Sign Up"
          altButton="Sign in"
        >
          <label htmlFor="email" className="popup__label">
            Email
          </label>
          <input
            required
            className="popup__input"
            id="email"
            type="email"
            placeholder="Enter email"
            name="email"
            value={data.email}
            onChange={validateInput}
          />
          <span className="popup__error">{errors.email}</span>
          <label htmlFor="password" className="popup__label">
            Password
          </label>
          <input
            required
            className="popup__input"
            id="password"
            type="password"
            placeholder="Enter password"
            name="password"
            minlength="8"
            value={data.password}
            onChange={validateInput}
          />
          <span className="popup__error">{errors.password}</span>
          <label htmlFor="username" className="popup__label">
            Username
          </label>
          <input
            required
            className="popup__input"
            id="username"
            type="text"
            placeholder="Enter your username"
            name="username"
            minlength="2"
            value={data.username}
            onChange={validateInput}
          />
          <span className="popup__error">{errors.username}</span>
          <span className="popup__error popup__error_type_submit">
            {signUpError}
          </span>
          <input
            className="popup__submit"
            disabled={signUpState}
            onClick={props.handleSignUp}
            type="button"
            value="Sign up"
          ></input>
        </PopupWithForm>
        <PopupWithForm
          handleAltBtnClick={handleAltBtnClick}
          isOpened={isSuccessFormOpened}
          closeAllPopups={closeAllPopups}
          title="Registraion succesfully completed!"
          altButton="Sign in"
        />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
