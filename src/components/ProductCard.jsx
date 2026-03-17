import React from "react";
const ProductCard = () => {
  return (
    <div className='card'>
      <img src='/images/nike.jpg' alt='Nike' className='card-img' />
      <h2 className='card-title'>Nike Air Max</h2>
      <p className='card-price'>Price: $150</p>
      <button className='card-button'>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
