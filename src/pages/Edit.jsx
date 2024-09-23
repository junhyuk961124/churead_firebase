import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postListState, seletedItemState } from '../data/atom';

const Edit = () => {
  const [postList, setPostList] = useRecoilState(postListState);

  const navigate = useNavigate();

  const selectedItem = useRecoilValue(seletedItemState);

  const [value, setvalue] = useState(selectedItem ? selectedItem.churead : '');

  const postit = () => {
    //포스트리스트 수정작업
    console.log('🚀 ~ Edit ~ seletedItem:', selectedItem);
    console.log('🚀 ~ Edit ~ value:', value);
    const resultPostList = postList.map((post) =>
      post.id === selectedItem.id ? { ...post, churead: value } : { ...post }
    );
    console.log('🚀 ~ postit ~ resultPostList:', resultPostList);
    setPostList(resultPostList);
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
        <div className="w-10 rounded-full overflow-hidden">
          <img
            src={selectedItem.userProfileImage}
            className="pr-3 "
            alt="profile"
          />
        </div>
        <div className="block content-center w-full">
          <h4 className="font-bold text-left">{selectedItem.userName}</h4>
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
          buttonName={'수정'}
          buttonClass={'dark:bg-white dark:text-indigo-900 w-14 ml-auto'}
          buttonActive={postit}
        />
      </div>
    </div>
  );
};

export default Edit;
