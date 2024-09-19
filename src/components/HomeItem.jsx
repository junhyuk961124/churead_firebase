import React from 'react';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { BsPencilFill } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiTrash } from 'react-icons/hi2';

const HomeItem = () => {
  return (
    // {/* 중앙 post 게시글 */}
    <div className="flex flex-col ">
      <div className="p-3 flex items-start">
        <img src="./images\profile-image.svg" className="pr-3 " />
        <div className="block">
          <div className="flex justify-between pr-2">
            <h4>Albert Einstein</h4>
            <div className="flex justify-end">
              <Link to={'/post'}>
                <div className="pr-2">
                  {' '}
                  <BsPencil size={'16px'} />
                </div>
                {/* <BsPencilFill /> */}
              </Link>
              <Link to={'/'}>
                <HiOutlineTrash size={'18px'} />
                {/* <HiTrash /> */}
              </Link>
            </div>
          </div>
          <p className="text-left">
            The mst beautiful experience we can have is the mysterious. It's the
            fundamental emotion which stands at the cradle of true art and
            science. Whoever does not know it can no longer wonder, no longer
            marvel, is as good as dead, and his eyes are dimmed.
          </p>
          <div className="text-left mt-3">❤️ 12</div>
        </div>
      </div>
      <hr className="1" />
    </div>
  );
};

export default HomeItem;
