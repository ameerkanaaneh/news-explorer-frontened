import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import React from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/NewsApi";
import mainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
  const [isSignInFormOpened, setIsSignInformOpened] = React.useState(false);
  const [isSignUpFormOpened, setIsSignUpformOpened] = React.useState(false);
  const [signInState, setSignInState] = React.useState(true);
  const [signUpState, setSignUpState] = React.useState(true);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);
  const [isSuccessFormOpened, setIsSuccessformOpened] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [maxArticlesRows, setMaxArticlesRows] = React.useState(1);
  const [searchWorld, setSearchWorld] = React.useState("");
  const [preloaderOpened, setPreloaderOpened] = React.useState(false);
  const [savedNews, setSavedNews] = React.useState([]);
  const [signUpError, setSignUpError] = React.useState("");
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [data, setData] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  React.useEffect(() => {
    if (token) {
      mainApi
        .getSavedArticles(token)
        .then((articles) => {
          if (articles) {
            setSavedNews(articles.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token, savedNews]);

  React.useEffect(() => {
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setCurrentUser(res.data);
          setIsLoggedIn(true);
        })
        .then(() => {
          navigate("/saved-news");
        })
        .catch((err) => console.log(err));
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

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
    setSignUpError("");
  };

  const handleDelete = (token, id) => {
    return mainApi.deleteArticle(token, id);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setToken("");

    localStorage.removeItem("token");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    mainApi
      .register(data.email, data.password, data.username)
      .then((data) => {
        if (!data.message) {
          closeAllPopups(e);
          return data;
        } else {
          setSignUpError(data.message);
        }
      })
      .then((data) => {
        if (data) {
          setIsRegistered(true);
          setIsSuccessformOpened(true);
        }
      });
  };

  const handleSaveClick = (article) => {
    const date = new Date(article.publishedAt).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return mainApi.saveCard(
      searchWorld,
      article.title,
      article.description,
      date,
      article.source.name,
      article.url,
      article.urlToImage,
      token
    );
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    mainApi
      .authorize(data.email, data.password)
      .then((data) => {
        if (data) {
          setToken(data.token);
          setIsLoggedIn(true);
          closeAllPopups(e);
          navigate("/saved-news");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchWorld(e.target.value);
  };

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    setMaxArticlesRows(maxArticlesRows + 1);
  };

  const showPreloader = () => {
    setPreloaderOpened(true);
  };

  const hidePreloader = () => {
    setPreloaderOpened(false);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setArticles([]);
    showPreloader();
    api
      .getArticles(searchWorld)
      .then((data) => {
        setMaxArticlesRows(1);
        setArticles(data.articles);

        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        hidePreloader();

        // setSearchWorld("");
      });
  };

  const openNavBar = (e) => {
    e.preventDefault();
    setIsMobileNavbarOpen(true);
  };
  const closeNavBar = (e) => {
    e.preventDefault();
    setIsMobileNavbarOpen(false);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              handleDelete={handleDelete}
              handleSaveClick={handleSaveClick}
              handleLogoutClick={handleLogoutClick}
              handleSignIn={handleSignIn}
              signUpError={signUpError}
              setErrors={setErrors}
              errors={errors}
              isSignInFormOpened={isSignInFormOpened}
              setIsSignUpformOpened={setIsSignUpformOpened}
              setIsSignInformOpened={setIsSignInformOpened}
              isSignUpFormOpened={isSignUpFormOpened}
              setSignInState={setSignInState}
              signInState={signInState}
              setSignUpState={setSignUpState}
              signUpState={signUpState}
              closeAllPopups={closeAllPopups}
              isRegistered={isRegistered}
              isSuccessFormOpened={isSuccessFormOpened}
              setIsSuccessformOpened={setIsSuccessformOpened}
              handleSignUp={handleSignUp}
              data={data}
              setData={setData}
              handleShowMoreClick={handleShowMoreClick}
              maxArticlesRows={maxArticlesRows}
              isLoggedIn={isLoggedIn}
              articles={articles}
              preloaderOpened={preloaderOpened}
              handleSearchClick={handleSearchClick}
              handleSearchChange={handleSearchChange}
              searchWorld={searchWorld}
              setIsOpened={setIsMobileNavbarOpen}
              handleOpenClick={openNavBar}
              handleCloseClick={closeNavBar}
              isOpened={isMobileNavbarOpen}
              token={token}
            />
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoute
              path="/saved-news"
              defaultRoute="/"
              loggedIn={isLoggedIn}
            >
              <SavedNews
                handleDelete={handleDelete}
                savedNews={savedNews}
                handleLogoutClick={handleLogoutClick}
                isLoggedIn={isLoggedIn}
                handelOpenClick={openNavBar}
                handleCloseClick={closeNavBar}
                isOpened={isMobileNavbarOpen}
                token={token}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            isLoggedIn ? <Navigate to="/saved-news" /> : <Navigate to="/" />
          }
        ></Route>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
