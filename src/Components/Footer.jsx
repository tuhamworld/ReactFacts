import React from "react";

export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <small>
        Designed by{" "}
        <a href="https://tundesanusi.vercel.app" target="_blank">
          Tunde Sanusi (Tuham)
        </a>
      </small>
    </footer>
  );
}
