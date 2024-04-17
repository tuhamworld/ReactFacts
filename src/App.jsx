import React, { useState } from "react";
import "./index.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
