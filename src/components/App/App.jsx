import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
