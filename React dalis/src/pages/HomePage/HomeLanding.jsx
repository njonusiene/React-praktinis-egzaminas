import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import HomeFooter from './HomeFooter';
import HomeSection from './HomeSection';

function HomeLanding() {
  const [scroll, setScroll] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)

  const scrollFooter = () => {
    if (scroll >= footerHeight) {
      document.querySelector('footer').style.bottom = '0px'
    } else {
      document.querySelector('footer').style.bottom = `-${footerHeight}px`
    }
  }

  useEffect(() => {
    console.log("useEffect is called");
    const windowHeight = window.innerHeight;
    const heightDocument = windowHeight + document.querySelector('.content').offsetHeight + footerHeight - 20;
    console.log("heightDocument:", heightDocument); // Pasitikrinimas ekrano aukscio su console.log
    document.getElementById('scroll-animate').style.height = `${heightDocument}px`;
    document.querySelector('header').style.height = `${windowHeight}px`;
    document.querySelector('header').style.lineHeight = `${windowHeight}px`;
    document.querySelector('.wrapper-parallax').style.marginTop = `${windowHeight}px`;
  
    scrollFooter();
  
    window.onscroll = () => {
      const newScroll = window.scrollY;
      console.log("New Scroll Value:", newScroll); // Pasitikrinimas ekrano aukscio su console.log
      document.getElementById('scroll-animate-main').style.top = `-${newScroll}px`;
      document.querySelector('header').style.backgroundPositionY = `${50 - (newScroll * 100 / heightDocument)}%`;
      setScroll(newScroll);
    }
  }, [footerHeight, scroll])

  useEffect(() => {
    setFooterHeight(document.querySelector('footer').offsetHeight)
  }, [])

  return (
    <>
    <Navbar/>
    <div id="scroll-animate">
      <div id="scroll-animate-main">
        <div className="wrapper-parallax">
          <header>
            <h1>THE BIGGEST SELECTION OF FRESH FLOWERS!</h1>
          </header>
          <HomeSection/>
          <HomeFooter/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeLanding
