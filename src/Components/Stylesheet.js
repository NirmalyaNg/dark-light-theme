import React from "react";
import "./Stylesheet.css";
const stylesheet = ({ handleDarkMode, handleLightMode, dark }) => {
  return (
    <div>
      {dark ? (
        <button className="light-btn" onClick={handleLightMode}>
          Light Mode
        </button>
      ) : (
        <button className="dark-btn" onClick={handleDarkMode}>
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default stylesheet;
