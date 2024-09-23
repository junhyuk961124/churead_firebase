import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../data/atom';

const ImageLink = ({ icon, linkTo, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      <Link to={linkTo}>
        {/* <img src={img} /> */}
        {icon}
      </Link>
    </button>
  );
};

export default ImageLink;
