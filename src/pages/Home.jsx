import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  //Logic

  // View
  return (
    <div>
      <Link to={'/login'} className="text-red-600">
        로그인하기
      </Link>
    </div>
  );
};

export default Home;
