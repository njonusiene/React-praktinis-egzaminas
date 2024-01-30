import React from 'react'
import { FaFacebook, FaInstagramSquare, FaPinterestSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <footer>  
      <div className="social-footer">
        <p>Folow US:</p> 
      <div>
        <Link to="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
        <Link to="https://www.instagram.com/" target="_blank"><FaInstagramSquare /></Link>
        <Link to="https://www.pinterest.com/search/pins/?q=flower%20store&rs=typed" target="_blank"><FaPinterestSquare /></Link>
      </div>
      </div>
      <div className="map">
      <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528704.4739571055!2d14.583875512500015!3d51.7616002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcac2db6f7e9b%3A0xf8ca14b65513c58e!2sFlowers%20Shop!5e0!3m2!1sen!2slt!4v1706522733693!5m2!1sen!2slt"
          width="450"
          height="100"
          style={{ border: '0', borderRadius: '5px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  )
}

export default HomeFooter
