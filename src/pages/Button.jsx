import React from "react";
import "./Button.css";

const Button = ({ name, onClicked }) => {
  return (
    <div>
      <button onClick={onClicked} className="button-style">
        {name}
      </button>
    </div>
  );
};

export default Button;
