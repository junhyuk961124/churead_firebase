import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { isButtonElement } from 'react-router-dom/dist/dom';

const Login = () => {
  // Logic
  // const history = useNavigate();
  // const goToHome = () => {
  //   history('/');
  // };

  // view
  return (
    <div>
      <h2>로그인</h2>
      {/* <button type="button" onClick={goToHome}>
        로그인
      </button> */}
      <Link to={'/'}>로그인</Link>
    </div>
  );
};

export default Login;
