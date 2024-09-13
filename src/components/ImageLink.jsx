import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ img, linkTo }) => {
  return (
    <Link to={linkTo}>
      <img src={img} />
    </Link>
  );
};

export default ImageLink;
