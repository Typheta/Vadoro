import React, { useState, useEffect } from 'react';
import './App.css'

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched data to state
        setPosts(data);
      })
      .catch(error => {
        // Handle error
        setError(error.message);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div id="posts-container">
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
