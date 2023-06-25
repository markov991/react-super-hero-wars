import React from "react";

import "./SearchHerosInput.css";

const SearchHerosInput = ({ searchPar }) => {
  const searchHeroHandler = (e) => {
    searchPar(e.target.value);
  };
  return (
    <div className="search-heroes-input-container">
      <div className="search-input-box">
        <input onChange={searchHeroHandler} type="text" />
        <div className="search-inpit-icons-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ddd"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dice-svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M69 153.99l187 110 187-110M256 463.99v-200"
            />
            <ellipse cx="256" cy="152" rx="24" ry="16" />
            <ellipse cx="208" cy="296" rx="16" ry="24" />
            <ellipse cx="112" cy="328" rx="16" ry="24" />
            <ellipse cx="304" cy="296" rx="16" ry="24" />
            <ellipse cx="400" cy="240" rx="16" ry="24" />
            <ellipse cx="304" cy="384" rx="16" ry="24" />
            <ellipse cx="400" cy="328" rx="16" ry="24" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchHerosInput;
