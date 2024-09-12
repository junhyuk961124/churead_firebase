import React from 'react';
import { Link } from 'react-router-dom';
import InputFiled from '../components/InputFiled';
import LoginButton from '../components/LoginButton';
// import { isButtonElement } from 'react-router-dom/dist/dom';

const Login = () => {
  // Logic

  // view
  return (
    <div className="flex justify-center p-16 my-auto">
      <div className="flex justify-center items-center flex-col">
        <img src="./images/logo 1.svg" className="mx-auto h-auto w-auto" />
        <h4 className="mt-10 text-center text-2xl font-bold leading-3 tracking-tight text-gray-900">
          Churead에서 소통해보세요
        </h4>
        <div className="m-10">
          <InputFiled inputName="email" type="email" inputText="Email" />
          <InputFiled
            inputName="password"
            type="password"
            inputText="Password"
          />
        </div>

        <LoginButton buttonName="로그인" />
        {/* <Link to={'/'}>로그인</Link> */}
        <div className="flex justify-center">
          <p className="pr-1">계정이 없으신가요?</p>
          <Link to={''} className="pl-1">
            가입하기
          </Link>
        </div>

        <hr className="mt-3 pb-3" />
        <LoginButton buttonName="구글로그인" />
      </div>
    </div>
  );
};

export default Login;
