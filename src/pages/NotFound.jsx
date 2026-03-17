import React from "react";
import { Link } from "react-router-dom";
import '../pages/pages.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! Trang bạn tìm không tồn tại.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;
