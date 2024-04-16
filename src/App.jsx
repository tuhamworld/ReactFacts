import React, { useState } from "react";
import "./index.css";
import Body from "./components/Body.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark((prev) => !prev);
  };
  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={handleClick} />
      <Body darkMode={dark} />
      <Footer darkMode={dark} />
    </div>
  );
};

export default App;
