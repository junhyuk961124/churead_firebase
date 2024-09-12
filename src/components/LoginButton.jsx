import React from 'react';

const LoginButton = ({ buttonName }) => {
  return (
    <button
      type="button"
      className="border-0 rounded-md w-80 h-12 mb-2 ring-1 border-md flex justify-center items-center"
    >
      {buttonName}
    </button>
  );
};

export default LoginButton;
