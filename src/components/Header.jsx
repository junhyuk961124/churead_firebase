import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    //  {/* header 상단 로고, 로그인버튼 */}
    <div className="flex justify-center fixed top-0 w-screen p-2 pt-4 h-14 left-1/2 transform -translate-x-1/2 bg-white max-w-[400px] border-2 ">
      <img src="./images/logo.png" className="h-auto" />
      {/* <Link to={'/login'} className="text-red-600 ">
        로그인하기
      </Link> */}
    </div>
  );
};

export default Header;
