import React from "react";
import { Link } from "react-router-dom";
import '../pages/pages.css';

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Laptop" },
];

const Products = () => {
  return (
    <div className="page">
      <h1 className="page-title">Products</h1>
      <p className="page-desc">Chọn sản phẩm để xem chi tiết:</p>
      <ul className="product-link-list">
        {products.map((product) => (
          <li key={product.id} className="product-link-item">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
