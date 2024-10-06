import React from 'react';
import './blogList.css';

function BlogList({ posts, onClickPost }) {
  return (
    <div className="blog-list">
      <h2>Últimas Postagens</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-card" onClick={() => onClickPost(post)}>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
