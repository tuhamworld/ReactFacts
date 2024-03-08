import React, { useState } from "react";
import "./index.css";
import Main from "./components/Main.jsx";
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
      <Main darkMode={dark} />
      <Footer darkMode={dark} />
    </div>
  );
};

export default App;
