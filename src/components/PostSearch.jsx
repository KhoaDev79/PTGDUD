import React, { useState, useEffect } from "react";
import './PostSearch.css';

const PostSearch = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="post-search-status">Loading posts...</div>;
  if (error) return <div className="post-search-status post-search-error">Error: {error}</div>;

  return (
    <div className="post-search">
      <input
        type="text"
        className="post-search-input"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p className="post-search-count">
        {filteredPosts.length} / {posts.length} posts
      </p>

      <div className="post-list">
        {filteredPosts.slice(0, 20).map((post) => (
          <div key={post.id} className="post-card">
            <h4 className="post-title">{post.title}</h4>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <p className="post-search-status">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default PostSearch;
