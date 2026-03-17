import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../pages/pages.css';

const productNames = {
  1: "Iphone",
  2: "Samsung",
  3: "Laptop",
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const name = productNames[id];

  const handleBuy = () => {
    navigate("/checkout");
  };

  if (!name) {
    return (
      <div className="page">
        <h1 className="page-title">Product not found</h1>
        <p className="page-desc">Không tìm thấy sản phẩm với ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="detail-card">
        <h2>{name}</h2>
        <p>Product ID: {id}</p>
        <button className="buy-btn" onClick={handleBuy}>Mua hàng</button>
      </div>
    </div>
  );
};

export default ProductDetail;
