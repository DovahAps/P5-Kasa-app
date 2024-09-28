import React from 'react';
import '../../sass/utiles/rating.scss';

const Rating = (props) => {
  
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-solid fa-star ${index < props.rating ? 'filled-star' : 'empty-star'}`}
    ></i>
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
