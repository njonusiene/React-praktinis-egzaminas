import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Product = ({ id, title, image, price, description }) => {
  const [savedProducts, setSavedProducts] = useState(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const isProductSaved = savedProducts.some((product) => product.id === id);

  const handleToggleSave = () => {
    if (isProductSaved) {
      // Jeigu produktas jau yra išsaugotas, jį pašaliname iš sąrašo
      const updatedProducts = savedProducts.filter((product) => product.id !== id);
      setSavedProducts(updatedProducts);
      localStorage.setItem("savedProducts", JSON.stringify(updatedProducts));
    } else {
      // Jeigu produktas nėra išsaugotas, pridedame jį į sąrašą
      const updatedProducts = [...savedProducts, { id, title, image, price, description }];
      setSavedProducts(updatedProducts);
      localStorage.setItem("savedProducts", JSON.stringify(updatedProducts));
    }
  };

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
      className="input"
    >
      <img src={image} alt={title} />
      <br />
      <h2>{title}</h2>
      <h4>Price: {price} €</h4>
      <br />
      <p>{description}</p>
      <div className="buttons">
        <Link to={`/reviews/${id}`}>Show Reviews</Link>
        <button className={isProductSaved ? 'heart red' : 'heart'} onClick={handleToggleSave}></button>
      </div>
    </motion.div>
  );
}

export default Product;
