import React from 'react';

const InputFiled = ({ inputName, type, inputText }) => {
  return (
    <input
      name={inputName}
      type={type}
      placeholder={inputText}
      className="mt-2 block w-80 h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 pl-2"
    />
  );
};

export default InputFiled;
