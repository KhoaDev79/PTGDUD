import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../pages/pages.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <nav className="dashboard-sidebar">
        <ul>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
