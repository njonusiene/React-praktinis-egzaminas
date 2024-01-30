import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const AddFlower = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("mix"); // Default value "mix"
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [product, setProduct] = useState(null);

  const API = "http://localhost:4012/bouquet";
  const navigate = useNavigate();

  const fetchProductData = async () => {
    const resp = await fetch(API);

    const json = await resp.json();
    setProduct(json);
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const flowerData = {
        title,
        category,
        price,
        description,
        image,
      };
  
      if (!title || !category || !price || !description || !image) {
        return alert("Please fill all fields");
      }
  
      const resp = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flowerData),
      });
  
      if (resp.ok) {
        navigate("/Flowers");
      } else {
        alert("Failed to add flower. Please try again.");
      }
    } catch (error) {
      console.error("Error adding flower:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "category":
        setCategory(value);
        break;
        case "price":
          // Patikriname, ar įvesta reikšmė yra skaičius su kableliu
          if (/^-?\d*\.?\d*$/.test(value)) {
            setPrice(value);
          }
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className='form-container'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }}
    >
      <h1>New Flower</h1>
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input onChange={handleChange} type="text" name="title" placeholder='e.g. A New Day' autoComplete="off" />

          <label>Category</label>
          <select onChange={handleChange} name="category" value={category}>
            <option value="mix">🌈Mix</option>
            <option value="white">⚪White</option>
            <option value="yellow">🟡Yellow</option>
            <option value="red">🔴Red</option>
            <option value="pink">🌸Pink</option>
          </select>

          <label>Price</label>
          <input onChange={handleChange} type="text" name="price" placeholder="e.g. 36.5" autoComplete="off" />

          <label>Description</label>
          <textarea onChange={handleChange} name="description" placeholder="Flowers to put a smile on their face..." autoComplete="off"></textarea>

          <label>Image URL</label>
          <input onChange={handleChange} type="text" name="image" placeholder="URL of the flower image" autoComplete="off" />

          <div className="buttons">
            <button className="button">Add Flower</button>
            <Link to={"/flowers"} className="button outline">Go back</Link>
          </div>
        </form>
        <img
        src="https://images.unsplash.com/photo-1516827096346-bfb65d850f70?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flower"
        className="flower-image"
        />
      </div>
    </motion.div>
  );
};

export default AddFlower;
