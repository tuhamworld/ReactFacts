import React from "react";

const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <div className="container">
        <h1 className="fact-title">Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
};

export default Main;
