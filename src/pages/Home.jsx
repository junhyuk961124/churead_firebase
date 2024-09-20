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
  /** 1. navList라는 변수를 만든다(배열)
   *  2. navList 배열에는 각 네비게이션에 대한 데이터를 객체로 작성
   *  2-1. li태그 한 개만 남기고 다 삭제(map으로 return하기 때문에)
   *  3. html부분에서 li태그를 navList의 map을 이용해서 반복 생성함
   *  4. li태그에 key라는 prop에 요소의 id값 dusruf
   *  5. 각 html요소에 속성값을 (to, icon)을 navList의 각 객체의 값으로 연결
   */

  const navList = [
    {
      id: 1,
      linkTo: '/',
      icon: <GoHome size={'28px'} />,
      activeIcon: <GoHomeFill size={'28px'} />,
    },
    {
      id: 2,
      linkTo: '/post',
      icon: <BiMessageSquareAdd size={'28px'} />,
      activeIcon: <BiSolidMessageSquareAdd size={'28px'} />,
    },
    {
      id: 3,
      linkTo: '/profile',
      icon: <RiUserHeartLine size={'28px'} />,
      activeIcon: <RiUserHeartFill size={'28px'} />,
    },
  ];

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
          {navList.map((nav) => (
            <ul>
              <li key={nav.id}>
                {
                  <ImageLink
                    linkTo={nav.linkTo}
                    icon={nav.icon}
                    // activeIcon={<GoHomeFill size={'28px'} />}
                  />
                }
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Home;
