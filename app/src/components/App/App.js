import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import React from "react";

function App() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);
  const openNavBar = (e) => {
    e.preventDefault();
    setIsMobileNavbarOpen(true);
  };
  const closeNavBar = (e) => {
    e.preventDefault();
    setIsMobileNavbarOpen(false);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            handleOpenClick={openNavBar}
            handleCloseClick={closeNavBar}
            isOpened={isMobileNavbarOpen}
          />
        }
      />
      <Route
        path="/saved-news"
        element={
          <SavedNews
            handelOpenClick={openNavBar}
            handleCloseClick={closeNavBar}
            isOpened={isMobileNavbarOpen}
          />
        }
      />
    </Routes>
  );
}

export default App;
