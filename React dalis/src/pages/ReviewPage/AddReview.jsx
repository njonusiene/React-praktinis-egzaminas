import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';


const AddReview = () => {
    const {productId} = useParams()
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const [title, setTitle] = useState("")
    const [comment, setComment] = useState("")
    const [product, setProduct] = useState(null)

    const API = "http://localhost:4012/reviews"
    const navigate = useNavigate()

    const fetchNameData = async () => {
      const resp = await fetch(`http://localhost:4012/reviews/${productId}`);
      const json = await resp.json();
      setProduct(json);
    }
    
  
    useEffect(() => {
      fetchNameData()
    }, [])

    const fetchProductData = async () => {
      const resp = await fetch(`http://localhost:4012/reviews/${productId}`);
      const json = await resp.json();
      setProduct(json);
      };
      
      useEffect(() => {
        fetchProductData();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const logData = {
              name,
              rating,
              title,
              comment,
              product_id: productId,
            };

            if(!name || !rating || !title || !comment) return alert("Please fill all flields");
            
            const resp = await fetch(API, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json" 
                },
                body: JSON.stringify(logData)
              });
          
              console.log(resp)
              if (resp.ok) {
                navigate("/reviews/" + productId)
              }

        } catch(error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
  
        switch(name) {
          case "name": setName(value); break;
          case "rating": setRating(value); break;
          case "title": setTitle(value); break;
          case "comment": setComment(value); break;
        }
    }

  return (
    <motion.div 
      className='form-container'
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }}
    >
        <h1>New Review</h1>
        <div className="content-wrapper">
          <form onSubmit={handleSubmit}>
            <label>Name Surname</label>
            <input onChange={handleChange} type="text" name="name" placeholder='e.g. Jhony Bravo' autoComplete="off"/>

            <label>Rating</label>
            <input onChange={handleChange} type="number" name="rating" placeholder="from 1-5" min="1" max="5" autoComplete="off"/>

            <label>Title</label>
            <input onChange={handleChange} type="text" name="title" placeholder='Comment title' autoComplete="off"/>

            <label>Your Comment</label>
            <textarea onChange={handleChange} name="comment" placeholder="We love to hear Your comment..." autoComplete="off" ></textarea>

          <div className="buttons">
            <button className="button">Add Review</button>
            <Link to={"/reviews/" + productId} className="button outline">  Go back</Link>
          </div>
          </form>
          <img src="https://images.unsplash.com/photo-1516827096346-bfb65d850f70?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Flower" className="flower-image" />
        </div>
    </motion.div>
  )
}

export default AddReview