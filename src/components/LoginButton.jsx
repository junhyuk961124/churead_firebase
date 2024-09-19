import React from 'react';

const LoginButton = ({ buttonName, buttonActive, buttonClass }) => {
  const buttonClick = (event) => {
    buttonActive(event);
  };

  return (
    <button
      type="button"
      className={`border-0 rounded-md w-80 h-12 mb-2 ring-1 border-md flex justify-center items-center hover:bg-indigo-600 hover:text-white active:bg-in dark:bg-indigo-600 dark:text-white dark:hover:bg-white dark:hover:text-indigo-600 ${buttonClass}`}
      onClick={buttonClick}
    >
      {buttonName}
    </button>
  );
};

export default LoginButton;
