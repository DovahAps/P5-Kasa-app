import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import '../../sass/components/CardsPage.scss';
import data from "../../data/houses.json";
import CollapseItem from "../collapseItem/collapseItem";
import CardHeader from "../cardInfo/cardHeader";



const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };
  const showButtons = images.length > 1;

  return (
    <div className="slideshow">
    <div className="slide-img">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
    {showButtons && (
      <>
        <button className="img-slider-btn" onClick={showPrevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="img-slider-btn" onClick={showNextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </>
    )}
  </div>
  );
};

const CardsPageLocation = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const card = data.find((item) => item.id === id); 


  useEffect(() => {
    if (!card) {
      navigate("my-app/src/pages/notfound.jsx")
    }
  }, [card, navigate]);
  if (!card) {
    return null; 
  }


  return (
    <div className="card-page">
      <Slideshow images={card.pictures} /> 
      <CardHeader title={card.title} 
      location={card.location} 
      host={card.host} 
      rating={card.rating}
      tags={card.tags}
      />
      <div className="collapse-container">
        <CollapseItem title="Description" content={card.description} />
        <CollapseItem
          title="Equipments"
          content={<ul>{card.equipments.map((item, index) => <li key={index}>{item}</li>)}</ul>}
        />
      </div>
    </div>
  );
};

export default CardsPageLocation;