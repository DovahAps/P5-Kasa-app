import React from 'react';
import '../components/collapseAbout/collapseAbout.scss';
import Header from '../components/header/header';
import BannerAbt from '../components/bannerAbout/bannerAbout';
import CollapseAbout from '../components/collapseAbout/collapseAbout';
import Footer from '../components/footer/footer';


const About = () => {
  const collapseData = [
    {
      title: 'Fiabilité',
      content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatore ou de perturbation du voisinage entraînera une exclusion de notre plataforme',
    },
    {
      title: 'Service',
      content: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nous locataires soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critéres etc.',
    },
  ];

  return (
    <div>
      <Header />
      <BannerAbt />
      <div className="about-container">
        {collapseData.map((item, index) => (
          <CollapseAbout key={index} title={item.title} content={item.content} />
        ))}
      
      </div>
      <Footer/>
    </div>
  );
};

export default About;