import React from 'react';
import '../../sass/components/cardHeader.scss';
import Rating from '../rating/rating';
import Tags from '../tags/tag';


const CardHeader = (props) => {
  return (
    <div className="card-header">
      <div className='card-info'>
      <h1>{props.title}</h1>
      <h4>{props.location}</h4>
      <div className='tags-container'>
        <Tags tags={props.tags} /> 
      </div>
      </div>
      
      <div className="host-info">
        <div className='host-data'>
        <h3>{props.host.name}</h3>
        <img src={props.host.picture} alt={props.host.name} />
        </div>
       
        <div className='location-rating'>
        <Rating rating={parseInt(props.rating)} />
        
        </div>
        
      </div>
    </div>
  );
};

export default CardHeader;