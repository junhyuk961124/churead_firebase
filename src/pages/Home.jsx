import React from 'react';

import Header from '../components/Header';
import HomeItem from '../components/HomeItem';
import { Link } from 'react-router-dom';
import ImageLink from './../components/ImageLink';
import { GoHome } from 'react-icons/go';
import { GoHomeFill } from 'react-icons/go';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { BiSolidMessageSquareAdd } from 'react-icons/bi';
import { RiUserHeartLine } from 'react-icons/ri';
import { RiUserHeartFill } from 'react-icons/ri';

const Home = () => {
  //Logic

  // View
  return (
    // 전체틀
    <div className="p-3 pt-20  ">
      <Header />
      <div>
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
          <ImageLink
            linkTo="/"
            icon={
              <GoHome
                size={'28px'}
                // icon={<GoHomeFill size={'28px'}
              />
            }
          />
          <ImageLink
            linkTo="/post"
            icon={<BiMessageSquareAdd size={'28px'} />}
            // icon={<BiSolidMessageSquareAdd size={'28px'} />}
          />
          <ImageLink linkTo="/" icon={<RiUserHeartLine size={'28px'} />} />
          {/* <ImageLink linkTo="/" icon={<RiUserHeartFill size={'28px'} />} /> */}
        </nav>
      </div>
    </div>
  );
};

export default Home;
