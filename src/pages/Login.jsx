import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputFiled from '../components/InputFiled';
import LoginButton from '../components/LoginButton';
// import DarkMode from '../components/DarkMode';
// import { isButtonElement } from 'react-router-dom/dist/dom';

const Login = () => {
  // Logic
  // const darkMode = () => {
  //   const html = document.querySelector('html');
  //   html.classList.toggle('dark');
  // };

  // const history = useNavigate();
  // const goToHome = () => {
  //   history('/');
  // };

  // 데이터전달
  // 자식으로부터 받은inputValue의 값을 state에 저장
  /**
   * 1. handleInputChange함수에서 data라는 inputValue와 field라는 해당 input의 필드값을 받아온다
   * 2. 새로운 변수 선언하여 inputValue의 값을 넣어준다.(rorcpgudxo)
   * 3. setFormData를 이용해서 새로운 변수의 값으로 변경한다.
   */

  // const [formData, setFormData] = useState({ email: '', password: '' });

  // const handleInputChange = (data, inputName) => {
  //   const newFormData = { ...formData, [inputName]: data };
  //   setFormData(newFormData);
  // };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const handleInputChange = (data, inputName) => {
    // if (inputName === 'email') {
    //   setEmail(data);
    // } else {
    //   setPassword(data);
    // }

    const NewFormData = { ...formData, [inputName]: data };
    setFormData(NewFormData);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('🚀 ~ handleLogin ~ handleLogin:', handleLogin);
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  // useEffect(() => {
  //   console.log('🚀 ~ handleInputChange ~ newFormData:', formData);
  // }, [formData]);

  const naver = () => {
    window.location.href = 'https://www.naver.com';
  };

  // view
  return (
    <div>
      <div className="flex justify-center p-16 my-auto h-[100vh] ">
        <div className="flex justify-center items-center flex-col">
          <img
            src="./images/logo 1.svg"
            className="mx-auto h-36 w-auto
          "
            alt="chuzrit"
          />
          <h4 className="mt-10 text-center text-2xl font-bold leading-3 tracking-tight text-gray-900 dark:text-white">
            Churead에서 소통해보세요
          </h4>
          <form id="login-form" className="m-10">
            <InputFiled
              inputName="email"
              type="email"
              inputText="Email"
              onChange={handleInputChange}
            />
            <InputFiled
              inputName="password"
              type="password"
              inputText="Password"
              onChange={handleInputChange}
            />
          </form>

          <LoginButton buttonName="로그인" buttonActive={handleLogin} />
          {/* <Link to={'/'}>로그인</Link> */}
          <div className="flex justify-center">
            <p className="pr-1">계정이 없으신가요?</p>
            <Link to={'/signup'} className="pl-1">
              가입하기
            </Link>
          </div>

          <hr className="mt-3 pb-3" />
          <LoginButton buttonName="구글로그인" buttonActive={naver} />
        </div>
      </div>
    </div>
  );
};

export default Login;
