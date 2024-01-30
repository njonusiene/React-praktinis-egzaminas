import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Navbar from '../../components/NavBar';
import { GiPeaceDove } from "react-icons/gi";
import { GiSpotedFlower } from "react-icons/gi";

const Reviews = () => {
  const { productId } = useParams()
  console.log('Product ID:', productId)
  const [reviews, setReviews] = useState([])
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details pagal productId
        const productResponse = await fetch(`http://localhost:4012/bouquet/${productId}`)
        const productData = await productResponse.json()
        setProduct(productData)
  
        // Fetch reviews naudojant productId
        const reviewsResponse = await fetch(`http://localhost:4012/reviews?product_id=${productId}`)
        const reviewsData = await reviewsResponse.json()
        setReviews(reviewsData)
      } catch (error) {
        console.error('Error fetching data:', error)
        setProduct(null)
        setReviews([])
      }
    }
    fetchData()
  }, [productId])

const handleDeleteReview = async (reviewId) => {
  try {
    // Ištrinti atsiliepimą
    const deleteResponse = await fetch(`http://localhost:4012/reviews/${reviewId}`, {
      method: 'DELETE',
    })
    if (!deleteResponse.ok) {
      console.error('Failed to delete review. Status:', deleteResponse.status)
      return
    }

    // Atnaujinti produktą ir atsiliepimus
    const [updatedProduct, updatedReviews] = await Promise.all([
      fetch(`http://localhost:4012/bouquet/${productId}`).then((res) => res.json()),
      fetch(`http://localhost:4012/reviews?product_id=${productId}`).then((res) => res.json()),
    ])
    console.log('Updated Product:', updatedProduct)
    console.log('Updated Reviews:', updatedReviews)

    setProduct(updatedProduct)
    setReviews(updatedReviews)
  } catch (error) {
    console.error('Error deleting review:', error)
  }
}

  return (
     <>
      <Navbar/>
      <div className="review-page">
        {product ? (<h2> " {product.title} " reviews:</h2>) : (<h2>Loading...</h2>)}
        <Link to="/Flowers"> Go Back </Link>
        <Link to={ `/reviews/${productId}/new-review`}> Add Review </Link>
        {reviews.length > 0 ? (
          <div className="review-cards-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="rating">
                  <span className="rating-label">Rating:</span>
                  {[...Array(5)].map((_, index) => (
                    <GiSpotedFlower key={index} className={index < review.rating ? 'green-star' : 'red-star'} />
                  ))}
                </div>
                <h3>{review.name}</h3>
                <p>{review.comment}</p>
                <div className="action-icons">
                  Don't like comment?
                  <FaTrashAlt className="trash-icon" onClick={() => handleDeleteReview(review.id)} />  
                </div>
              </div>
            ))}
          </div> ) : ( <p className="noReviews">No reviews available for this product. <GiPeaceDove /></p>
          )}
      </div>
      </>
  )
}

export default Reviews