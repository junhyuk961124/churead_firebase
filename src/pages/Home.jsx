import React, { useEffect } from 'react';

import Header from '../components/Header';
import HomeItem from '../components/HomeItem';

import Nav from '../components/Nav';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chureadState, postListState } from '../data/atom';

const Home = () => {
  //Logic

  const churead = useRecoilValue(chureadState);
  /**
   * 피드 데이터셋
   */
  const [postList, setPostList] = useRecoilState(postListState);
  const handleDelete = (data) => {
    console.log('🚀 ~ handleDelete ~ data:', data);
    const newPostList = postList.filter((item) => item.id !== data.id);
    setPostList(newPostList);
  };

  /**
   * 아이템 삭제하기
   * 1. 휴지통 아이콘을 클릭한다
   * 2. 클릭 이벤트가 발생한다
   * 3. 클릭 이벤트 발생 시  handleDelete라는 함수가 호출된다
   * 4. handleDelete함수 내부논리
   * 4-1 . windows.confirm창을 띄운다
   * 4-2 . 사용자가 선택한 값을 ok라는 변수에 저장한다 boolean type
   * 4-3 . 사용자의 선택 값이 true일 경우 onDelete 이벤트를 호출한다
   * 4-4 . onDelete라는 이벤트에서 선택도니 아이템 즉 data를 인자에 넣어서 부모에게 올려준다.
   * 5 . 부모는 onDelete라는 이벤트에 handleDelete라는 함수를 연결한다.
   * 5-1 . feedList에 filter함수를 사용한다
   * 6 . filter함수에서 각 요소들의 id값과 자식으로부터 받아온 인자 아이템의 id값을 비교하여 일치하지 않는 요소들만 뽑아온다
   * 7 . filter함수로 리턴받은 배열을 feedList라는 state에 반영한다
   */

  /**
   * Edit 추가하기
   * 1. 수정 아이콘을 클릭한다
   * 2. 클릭 이벤트가 발생한다
   * 2-1. home에서 app.js로 이벤트를 전달해주고 edit페이지에서 되받는다
   * 3. Edit페이지로 이동한다
   * 3-1. 수정하기를 눌렀을 경우 해당 글이 기본값으로 정해진다
   * 4. Edit페이지의 문구를 수정한다
   * 5. 게시를 누른다
   * 6. 클릭이벤트가 발생한다
   * 6-1. edit 페이지에서 app.js로 이벤트를 전달해주고 home페이지에서 되받는다
   * 7. Home화면에 글씨가 수정된다.
   */

  useEffect(() => {
    if (!churead) return;

    const newPost = {
      id: postList.length + 1,
      userName: 'chutzrit',
      userProfileImage: 'https://i.ibb.co/DYVyL5c/logo3.png',
      churead,
      likeCount: 0,
    };
    setPostList([newPost, ...postList]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('postList', postList);
  }, [postList]);

  // View
  return (
    // 전체틀
    <div className="p-3 pt-20 ">
      <Header />
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <HomeItem data={post} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
      <Nav />
    </div>
  );
};
// console.log('🚀 ~ Home ~ data:', data);

export default Home;
