import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { BsPencilFill } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiTrash } from 'react-icons/hi2';

const HomeItem = ({ img, postText, userName, clickHeart }) => {
  const iconList = [
    {
      id: 1,
      linkTo: '/post',
      icon: <BsPencil size={'16px'} />,
      actionIcon: <BsPencilFill size={'16px'} />,
    },
    {
      id: 2,
      linkTo: '/',
      icon: <HiOutlineTrash size={'18px'} />,
      actionIcon: <HiTrash size={'18px'} />,
    },
  ];

  const location = useLocation();

  return (
    // {/* 중앙 post 게시글 */}
    <div className="flex flex-col ">
      <div className="p-3 flex items-start">
        <div className="rounded-full overflow-hidden ">
          <img src={img} className="w-20 pr" />
        </div>
        <div className="block  pl-3">
          <div className="flex justify-between pr-2">
            <h4>{userName}</h4>
            <ul className="flex justify-end">
              {iconList.map((icon) => (
                <li>
                  <Link to={icon.linkTo}>
                    <div className="pr-2">
                      {' '}
                      {location.pathname === icon.linkTo
                        ? icon.activeIcon
                        : icon.icon}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-left">{postText}</p>
          <div className="text-left mt-3">{clickHeart}</div>
        </div>
      </div>
      <hr className="1" />
    </div>
  );
};

export default HomeItem;
