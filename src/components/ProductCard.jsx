import React from "react";
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className='card'>
      <img src='/images/nike.jpg' alt='Nike' className='card-img' />
      <h2 className='card-title'>Nike Air Max</h2>
      <p className='card-price'>$150</p>
      <button className='card-btn'>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
