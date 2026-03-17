import React from "react";
import './ProductCard.css';

const ProductCard = ({ name = "Nike Air Max", price = "$150", image = "/images/nike.jpg" }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} className='card-img' />
      <h2 className='card-title'>{name}</h2>
      <p className='card-price'>{price}</p>
      <button className='card-btn'>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
