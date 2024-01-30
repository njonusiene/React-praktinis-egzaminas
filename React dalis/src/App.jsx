import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reviews from './pages/ReviewPage/Reviews';
import Flowers from './pages/FlowerPage/Flowers';
import Contact from './pages/Conatact';
import Home from './pages/HomePage/Home';
import AddReview from './pages/ReviewPage/AddReview';
import Page404 from './pages/Page404';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import './styles/style.scss';
import AddFlower from './pages/FlowerPage/AddFlower';


const App = () => {

  //Dark/light rėžimas
  const [isDarkMode, setIsDarkMode] = useState(() => {
    //Užkrovimas "mode" iš local storage
    const savedTheme = localStorage.getItem('isDarkMode')
    return savedTheme !== null ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    // Update CSS styles pagal mode
    const root = document.documentElement;
    root.classList.toggle('dark-mode', isDarkMode)

    // Išsaugojimas local storage
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="toggle" onClick={toggleDarkMode}><MdDarkMode />/<CiLight /></button>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Flowers/addflower" element={<AddFlower />} />
          <Route path="/reviews/:productId" element={<Reviews />} />
          <Route path="/reviews/:productId/new-review" element={<AddReview />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/*" element={<Page404/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
