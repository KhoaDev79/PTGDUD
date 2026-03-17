import React from "react";
import ProductCard from "./ProductCard";
import './ProductList.css';

const products = [
  { id: 1, name: "Nike Air Max", price: "$150", image: "/images/nike.jpg" },
  { id: 2, name: "Adidas Ultraboost", price: "$180", image: "/images/nike.jpg" },
  { id: 3, name: "Puma RS-X", price: "$120", image: "/images/nike.jpg" },
  { id: 4, name: "New Balance 574", price: "$110", image: "/images/nike.jpg" },
  { id: 5, name: "Converse Chuck 70", price: "$85", image: "/images/nike.jpg" },
  { id: 6, name: "Vans Old Skool", price: "$70", image: "/images/nike.jpg" },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
