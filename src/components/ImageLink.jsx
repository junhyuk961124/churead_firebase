import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ icon, linkTo }) => {
  return (
    <Link to={linkTo}>
      {/* <img src={img} /> */}
      {icon}
    </Link>
  );
};

export default ImageLink;
