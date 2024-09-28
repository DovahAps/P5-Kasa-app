import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/cards.scss';
import data from "../../data/houses.json"

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/card/${id}`} className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

const Cards = () => {
  return (
    
    <div className="cards-container">
      {data.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
    
  );
};


export default Cards;