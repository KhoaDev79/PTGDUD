import React, { useState } from "react";
import '../pages/pages.css';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';
import Alert from '../components/Alert';
import ProductList from '../components/ProductList';
import UserList from '../components/UserList';
import UserSearch from '../components/UserSearch';
import PostSearch from '../components/PostSearch';
import TodoApp from '../components/TodoApp';

const Home = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'success', message: 'Thao tác thành công!' },
    { id: 2, type: 'warning', message: 'Cảnh báo: Dung lượng sắp đầy.' },
    { id: 3, type: 'error', message: 'Lỗi: Không thể kết nối server.' },
  ]);

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: '40px 20px' }}>
      <h1 style={{ margin: 0 }}>Bài 1 – Product Card</h1>
      <ProductCard />

      <h1 style={{ margin: 0 }}>Bài 2 – Button Component</h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
      </div>

      <h1 style={{ margin: 0 }}>Bài 3 – Login Form</h1>
      <LoginForm />

      <h1 style={{ margin: 0 }}>Bài 4 – Alert / Notification</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', alignItems: 'center' }}>
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => removeAlert(alert.id)}
          />
        ))}
      </div>

      <h1 style={{ margin: 0 }}>Bài 5 – Responsive Product List</h1>
      <ProductList />

      <hr style={{ width: '100%', border: 'none', borderTop: '2px solid #e2e2ee', margin: '16px 0' }} />

      <h1 style={{ margin: 0 }}>Fetch Bài 1+2 – User List</h1>
      <UserList />

      <h1 style={{ margin: 0 }}>Fetch Bài 3 – User Search</h1>
      <UserSearch />

      <h1 style={{ margin: 0 }}>Fetch Bài 4 – Post Search</h1>
      <PostSearch />

      <h1 style={{ margin: 0 }}>Fetch Bài 5 – Todo CRUD</h1>
      <TodoApp />
    </div>
  );
};

export default Home;
