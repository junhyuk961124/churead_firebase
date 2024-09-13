import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HomeItem from '../components/HomeItem';

const Home = () => {
  //Logic

  // View
  return (
    // 전체틀
    <div className="p-3 pt-4  ">
      <Header />
      <div className="  top-0 overflow-auto">
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
        <HomeItem />
      </div>
      {/* 하단 네비게이션 */}
      <div className=" ">
        <nav className="flex justify-between w-screen max-w-[400px] left-1/2 transform -translate-x-1/2 px-10 py-5 bg-slate-600 fixed bottom-0">
          <img src="./images/home.svg" />
          <img src="./images/home.svg" />
          <img src="./images/home.svg" />
        </nav>
      </div>
    </div>
  );
};

export default Home;
