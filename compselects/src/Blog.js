import React, { useState } from 'react';
import BlogList from './components/blogList/blogList';
import BlogPost from './components/blogPost/blogPost';
import "./styles/Blog.css";

const blogPosts = [
  {
    id: 1,
    title: 'Tendências em Inteligência Artificial',
    date: '10 de Outubro de 2024',
    excerpt: 'Descubra as últimas novidades no mundo da Inteligência Artificial.',
    content: 'Aqui está o conteúdo completo do post sobre Inteligência Artificial...',
  },
  {
    id: 2,
    title: 'Entrevista com o Autor do Livro Principios de Programação Web',
    date: '25 de Setembro de 2024',
    excerpt: 'Uma entrevista exclusiva com o autor do best-seller Livro Principios de Programação Web.',
    content: 'Aqui está o conteúdo completo da entrevista com o autor do Livro Principios de Programação Web...',
  },
  {
    id: 3,
    title: 'Novidades da Editora para 2025',
    date: '5 de Setembro de 2024',
    excerpt: 'Veja o que a nossa editora está preparando para o próximo ano!',
    content: 'Aqui está o conteúdo completo sobre as novidades da editora...',
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-page">
      {selectedPost ? (
        <BlogPost post={selectedPost} onBack={handleBack} />
      ) : (
        <BlogList posts={blogPosts} onClickPost={handlePostClick} />
      )}
    </div>
  );
}

export default Blog;
