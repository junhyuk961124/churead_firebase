import React, { useState } from 'react';

const InputFiled = ({ inputName, type, inputText, onChange }) => {
  // logic
  /**
   * 입력값을 부모컴포넌트에 넘겨주기
   * 1. input태그에 onChange 이벤트 연결
   * 2. 연결된 함수에서 사용자 입력값 받아오기
   * 3. 받아온 입력값 state에 저장
   * 4. 부모에게 입력값 보내주기
   */

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('🚀 ~ handleChange ~ value:', value);
    setValue(value); // value state 변경
    onChange(value, inputName); //부모에게 이벤트, 데이터 보내기
  };

  // view
  return (
    <input
      name={inputName}
      type={type}
      value={value}
      placeholder={inputText}
      className="mt-2 block w-80 h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 pl-2"
      onChange={handleChange}
    />
  );
};

export default InputFiled;
