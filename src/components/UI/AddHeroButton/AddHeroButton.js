import React from "react";
import "./AddHeroButton.css";

const AddHeroButton = ({ addingHeroHandeler }) => {
  return (
    <button onClick={addingHeroHandeler} className="add-hero-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M256 112v288M400 256H112"
        />
      </svg>
    </button>
  );
};

export default AddHeroButton;
