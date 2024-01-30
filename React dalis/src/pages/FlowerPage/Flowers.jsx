import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";
import FlowerList from "./FlowerList";
import Navbar from "../../components/NavBar";

const Flowers = () => {
  const [listData, setListData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")

  useEffect(() => {
    fetchData()
  }, [categoryFilter, priceFilter])

  const fetchData = async () => {
    try {
      let url = 'http://localhost:4012/bouquet'
  
      if (categoryFilter !== "all") {
        url += `?category=${categoryFilter}`
      }
  
      const resp = await fetch(url)
      
      if (resp.ok) {
        const json = await resp.json()
  
        let filteredData = json
  
        if (priceFilter === "lowest") {
          filteredData = filteredData.sort((a, b) => a.price - b.price)
        } else if (priceFilter === "highest") {
          filteredData = filteredData.sort((a, b) => b.price - a.price)
        }
  
        setListData(filteredData)
      } else {
        console.error('Nepavyko gauti duomenų iš API')
        setListData([]); // Nustatome tusčią masyvą, jei duomenys nebuvo gauti
      }
    } catch (error) {
      console.error('Įvyko klaida:', error)
      setListData([]); // Nustatome tusčią masyvą klaidos atveju
    }
  }
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.8 }}
      >
        <Navbar/>
        <Filter
          onCategoryChange={(value) => setCategoryFilter(value)}
          onPriceChange={(value) => setPriceFilter(value)}
          categoryFilter={categoryFilter}
          priceFilter={priceFilter}
        />
        <FlowerList listData={listData} />
      </motion.div>
    </>
  )
}

export default Flowers
