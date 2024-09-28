import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CardsPage from './pages/cardspage';
import About from './pages/about';
import NotFound from './pages/notfound';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardsPage />}/> 
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;