import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import HomeItem from '../components/HomeItem';

import { postList as postList2 } from './../data/response';
import Nav from '../components/Nav';

const Home = ({ churead }) => {
  //Logic

  /**
   * 피드 데이터셋
   */
  const [postList, setPostList] = useState(postList2);

  useEffect(() => {
    if (!churead) return;
    console.log('🚀 ~ churijhiiiead:', churead);

    const newPost = {
      id: postList.length + 1,
      userName: 'chutzrit',
      userProfileImage: 'https://i.ibb.co/DYVyL5c/logo3.png',
      churead: churead,
      likeCount: 0,
    };
    setPostList([newPost, ...postList]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // View
  return (
    // 전체틀
    <div className="p-3 pt-20 ">
      <Header />
      <ul>
        {postList.map((post) => (
          <li key={post.id}>
            <HomeItem
              img={post.userProfileImage}
              userName={post.userName}
              postText={post.churead}
              clickHeart={post.likeCount}
            />
          </li>
        ))}
      </ul>
      <Nav />
    </div>
  );
};

export default Home;
