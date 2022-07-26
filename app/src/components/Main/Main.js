import React from "react";
import Header from "../Header/Header";
import CardsSection from "../CardsSection/CardsSection";
import About from "../About/About";
import Footer from "../Footer/Footer";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Preloader from "../Preloader/Preloader";
function Main(props) {
  const [isSignInFormOpened, setIsSignInformOpened] = React.useState(false);
  const [isSignUpFormOpened, setIsSignUpformOpened] = React.useState(false);
  const [isSuccessFormOpened, setIsSuccessformOpened] = React.useState(false);
  const [signInState, setSignInState] = React.useState(true);
  const [signUpState, setSignUpState] = React.useState(true);
  const [data, setData] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    username: "",
  });

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
          : "Invalid email address";
        break;
      case "username":
        errorsData.username =
          value.length < 2 ? "username must be at least 2 characters long" : "";
        break;
      case "password":
        errorsData.password =
          value.length < 8 ? "Password must be at least 8 characters long" : "";

        break;
      default:
        break;
    }
    setErrors(errorsData);
    setData({ ...data, [name]: value });
    let signInBtnState =
      errors.email.length > 0 ||
      !data.password.length > 0 ||
      errors.password.length > 0 ||
      !data.email.length > 0
        ? true
        : false;
    let signUpBtnState =
      signInBtnState || errors.username.length > 0 || data.username > 0;
    setSignInState(signInBtnState);
    setSignUpState(signUpBtnState);
  };
  return (
    <main className="main">
      <Header
        handleOpenClick={props.handleOpenClick}
        handleCloseClick={props.handleCloseClick}
        isOpened={props.isOpened}
        handleLogInClick={handleLogInClick}
      />
      <Preloader />
      <CardsSection />
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
          value={data.password}
          onChange={validateInput}
        />

        <span className="popup__error">{errors.password}</span>

        <input
          className="popup__submit"
          disabled={signInState}
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
          value={data.username}
          onChange={validateInput}
        />
        <span className="popup__error">{errors.username}</span>
        <input
          className="popup__submit"
          disabled={signUpState}
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
      <Footer />
    </main>
  );
}

export default Main;
