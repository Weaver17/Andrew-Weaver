import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
