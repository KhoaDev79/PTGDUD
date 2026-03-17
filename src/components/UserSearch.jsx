import React, { useState, useEffect } from "react";
import './UserSearch.css';

const UserSearch = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = Number(userId);
    if (!userId || id < 1 || id > 10) {
      setUser(null);
      setError(userId ? 'User not found (ID must be 1–10)' : null);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) throw new Error('User not found');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setUser(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="user-search">
      <input
        type="number"
        className="user-search-input"
        placeholder="Enter User ID (1–10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        min="1"
        max="10"
      />

      {loading && <p className="user-search-status">Loading...</p>}
      {error && <p className="user-search-status user-search-error">{error}</p>}

      {user && (
        <div className="user-search-card">
          <h3 className="user-search-name">{user.name}</h3>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
