import React from "react";
import '../style/Button.css';

export const Button = ({ text, isButtonOfClic, handleEvent }) => {
  return (
    <button
      className={isButtonOfClic ? "button-clic" : "button-restart"}
      onClick={handleEvent}
    >
      {text}
    </button>
  );
};
