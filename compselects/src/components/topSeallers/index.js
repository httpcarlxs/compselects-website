import React from 'react';
import './styles.css'
import ProductPhoto3 from "../../assets/ProductPhoto(3).svg"
import ProductPhoto4 from "../../assets/ProductPhoto(4).svg"
import ProductPhoto5 from "../../assets/ProductPhoto(5).svg"
import ProductPhoto6 from "../../assets/ProductPhoto(6).svg"
import ProductPhoto7 from "../../assets/ProductPhoto(7).svg"
import ProductPhoto8 from "../../assets/ProductPhoto(8).svg"

// Dados fictícios para os livros
const books = {
  topSellers: [
    {
      title: 'The Time Has Come',
      author: 'Will Leitch',
      imgUrl: ProductPhoto3,
    },
    {
      title: 'I Want a Better Catastrophe',
      author: 'Andrew Boyd',
      imgUrl: ProductPhoto4,
    },
    {
      title: 'My Government Means to Kill Me',
      author: 'Rasheed Newson',
      imgUrl: ProductPhoto5,
    }
  ],
  recommended: [
    {
      title: 'Pride and Protest',
      author: 'Nikki Payne',
      imgUrl: ProductPhoto6,
    },
    {
      title: 'Forget a Mentor, Find a Sponsor',
      author: 'Sylvia Ann Hewlett',
      imgUrl: ProductPhoto7,
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      imgUrl: ProductPhoto8,
    }
  ]
};

const BookCard = ({ title, author, imgUrl }) => {
  console.log(imgUrl)
  return (
    <div className="book-card">
      <img src={imgUrl} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

const BookSection = ({ title, books }) => {
  return (
    <div className="book-section">
      <h2>{title}</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

const TopSellers = () => {
  return (
    <div className="book-store">
      <BookSection title="Mais vendidos" books={books.topSellers} />
      <BookSection title="Recomendados pra você" books={books.recommended} />
    </div>
  );
};

export default TopSellers;
