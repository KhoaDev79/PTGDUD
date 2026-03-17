import React, { useState, useEffect } from "react";
import './TodoApp.css';

const API_URL = 'http://localhost:3001/todos';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // GET: load danh sách todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch todos');
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // POST: thêm todo mới
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle.trim(), completed: false }),
      });
      if (!res.ok) throw new Error('Failed to add todo');
      const created = await res.json();
      setTodos((prev) => [...prev, created]);
      setNewTitle('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // DELETE: xóa todo
  const handleDelete = async (id) => {
    setError(null);
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete todo');
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="todo-status">Loading todos...</div>;

  return (
    <div className="todo-app">
      {error && <p className="todo-error">{error}</p>}

      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new todo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          disabled={submitting}
        />
        <button
          type="submit"
          className="todo-add-btn"
          disabled={submitting || !newTitle.trim()}
        >
          {submitting ? 'Adding...' : 'Add'}
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-title">{todo.title}</span>
            <button
              className="todo-delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              ×
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="todo-empty">No todos yet. Add one above!</li>
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
