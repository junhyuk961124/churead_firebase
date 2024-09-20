import React, { useState } from 'react';
import Header from '../components/Header';
import ImageLink from '../components/ImageLink';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

const Post = ({ onPost }) => {
  const navigate = useNavigate();
  const [value, setvalue] = useState('');
  const postit = () => {
    onPost(value);
    navigate('/');
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setvalue(value);
  };

  return (
    <div className="w-[100vw] h-[100vh]  max-w-[400px]">
      <div className="">
        <header className="flex justify-center p-5">
          <Link to="/home" className="absolute left-5">
            취소
          </Link>
          <h2 className="content-center font-bold text-lg ">새로운 스레드</h2>
        </header>
        <hr />
      </div>
      {/* // 중간 바디 부분 */}
      <div className="flex p-5 items-start">
        <img src="./images\profile-image.svg" className="pr-3 " />
        <div className="block content-center w-full">
          <h4 className="font-bold text-left">Albert Einstein</h4>
          <textarea
            value={value}
            className="caret-gray-700  dark:text-slate-900 p-1 w-full"
            rows={5}
            placeholder="문구를 작성하세요"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* 하단 게시문구 */}
      <div className="flex text- justify-between p-5 items-center bottom-0 fixed w-full  max-w-[400px]">
        <h3>누구에게나 답글 및 인용 허용</h3>
        <LoginButton
          buttonName={'게시'}
          buttonClass={'dark:bg-white dark:text-indigo-900 w-14 ml-auto'}
          buttonActive={postit}
        />
      </div>
    </div>
  );
};

export default Post;
