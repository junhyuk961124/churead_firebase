import React from 'react';

const DarkMode222 = ({ darkbutton222, buttonName }) => {
  const aaaaa = () => {
    darkbutton222();
  };
  return (
    <button
      type="button"
      name={buttonName}
      onClick={aaaaa}
      className="absolute top-0 right-5 p-5"
    >
      ❤️
    </button>
  );
};

export default DarkMode222;
