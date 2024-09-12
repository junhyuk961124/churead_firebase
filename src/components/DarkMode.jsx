import React from 'react';

const DarkMode = ({ buttonName, buttonActive }) => {
  const buttonClick = () => {
    buttonActive();
  };

  return (
    <button
      type="button"
      className="block size-20 mt20 absolute right-0 "
      onClick={buttonClick}
    >
      {buttonName}
    </button>
  );
};

export default DarkMode;
