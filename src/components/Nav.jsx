import React from 'react';
import ImageLink from './ImageLink';
import { GoHome, GoHomeFill } from 'react-icons/go';
import { BiMessageSquareAdd, BiSolidMessageSquareAdd } from 'react-icons/bi';
import { RiUserHeartFill, RiUserHeartLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  // logic
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

  /**
   * 사용자가 현재 머무르는 페이지에 따라 nav 아이콘 활성환 아이콘으로 변경
   * 1. 사용자가 현재 머무르는 페이지의 pathname 가져오기
   * 2. 해당 pathname과 map 을 돌리는 nav라는 요소의 pathname이 같은지 체크
   * 3. 체크한 값이 true면 activeIcon으로 변경
   * 4. 체크한 값이 false면 icon으로 보여주기
   */
  const location = useLocation(); //현재 머무르는 페이지 정보 객체
  console.log('🚀 ~ Home ~ location:', location.pathname, navList[2].linkTo);

  return (
    // {/* 하단 네비게이션 */}
    <div className=" ">
      <nav>
        <ul className="flex justify-between w-screen max-w-[400px] left-1/2 transform -translate-x-1/2 px-10 py-5 bg-slate-600 fixed bottom-0">
          {navList.map((nav) => (
            <li key={nav.id}>
              {
                <ImageLink
                  linkTo={nav.linkTo}
                  icon={
                    location.pathname === nav.linkTo ? nav.activeIcon : nav.icon
                  }
                />
              }
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
