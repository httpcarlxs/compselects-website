import React, { useState } from 'react';
import './blogPost.css';

function BlogPost({ post, onBack }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="blog-post">
      <button onClick={onBack}>Voltar</button>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <div className="blog-content">{post.content}</div>

      {/* Botões de Compartilhamento */}
      <div className="share-buttons">
        <button onClick={() => window.open(`https://www.facebook.com/sharer.php?u=${window.location.href}`, '_blank')}>
          Compartilhar no Facebook
        </button>
        <button onClick={() => window.open(`https://twitter.com/share?url=${window.location.href}&text=${post.title}`, '_blank')}>
          Compartilhar no Twitter
        </button>
      </div>

      {/* Comentários */}
      <div className="comments-section">
        <h3>Comentários</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Deixe um comentário..."
            required
          />
          <button type="submit">Enviar Comentário</button>
        </form>
      </div>

      {/* Sugestões de Leitura */}
      <div className="related-posts">
        <h3>Sugestões de Leitura</h3>
        <ul>
          {/* Renderize sugestões de leitura aqui */}
          <li>Postagem Relacionada 1</li>
          <li>Postagem Relacionada 2</li>
          <li>Postagem Relacionada 3</li>
        </ul>
      </div>
    </div>
  );
}

export default BlogPost;
