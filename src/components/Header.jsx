import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator('/login');
  };

  return (
    //  {/* header 상단 로고, 로그인버튼 */}
    <div className="flex justify-center fixed top-0 w-screen p-2 pt-4 h-14 left-1/2 transform -translate-x-1/2 bg-white max-w-[400px] border-2 ">
      <Link to={'/login'} className="h-full">
        <img src="./images/logo.png" className="h-full" alt="logo" />
      </Link>

      <div className=" absolute left-4 text-indigo-800 ring-2 ring-indigo-800 px-3 py-1 rounded-full top-1/2 transform -translate-y-1/2">
        <button type="button" onClick={handleClick}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Header;
