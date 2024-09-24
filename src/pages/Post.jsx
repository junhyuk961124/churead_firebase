import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import { useRecoilState } from 'recoil';
import { chureadState } from '../data/atom';

const Post = () => {
  const navigate = useNavigate();

  const textareaRef = useRef(null);

  const [churead, setChuread] = useRecoilState(chureadState);
  const [value, setvalue] = useState('');
  const postit = () => {
    const resultChuread = churead.trim();

    if (!resultChuread) {
      alert('츄레드를 입력해주세요');
      return;
    }

    navigate('/');
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // 1.텍스트에서 불필요한 공백 제거하기
    //2. 제거한 텍스트를 기준을 빈 스트링인지 체크하기
    //3. 빈 스트링인 경우 알람창에 "츄레드를 입력해주세요"라고 메시지 뜨기
    // 4.빈 스트링 아닌경우 기존처럼 아이템 추가하기

    setvalue(value);
    setChuread(value);
  };

  useEffect(() => {
    // textareaRef.current && <textareaRef className="current focus"></textareaRef>;
    const length = value.length;
    textareaRef.current && textareaRef.current.focus();
    textareaRef.current &&
      textareaRef.current.setSelectionRange(length, length);
    console.log('🚀 ~ useEffect ~ textareaRef:', textareaRef);
  }, [value.length]);

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
        <div className="m-10 rounded-full overflow-hidden">
          {' '}
          <img
            src="./images\profile-image.svg"
            className="pr-3 "
            alt="profile"
          />
        </div>
        <div className="block content-center w-full">
          <h4 className="font-bold text-left">Albert Einstein</h4>
          <textarea
            value={value}
            className="caret-gray-700  dark:text-slate-900 p-1 w-full"
            rows={5}
            placeholder="문구를 작성하세요"
            onChange={handleChange}
            ref={textareaRef}
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
