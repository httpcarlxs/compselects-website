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
      price: 27.89,
      oldPrice: 30.99,
      imgUrl: ProductPhoto3,
    },
    {
      title: 'I Want a Better Catastrophe',
      author: 'Andrew Boyd',
      price: 26.99,
      oldPrice: 29.99,
      imgUrl: ProductPhoto4,
    },
    {
      title: 'My Government Means to Kill Me',
      author: 'Rasheed Newson',
      price: 26.99,
      oldPrice: 29.99,
      imgUrl: ProductPhoto5,
    }
  ],
  recommended: [
    {
      title: 'Pride and Protest',
      author: 'Nikki Payne',
      price: 15.50,
      oldPrice: 18.50,
      imgUrl: ProductPhoto6,
    },
    {
      title: 'Forget a Mentor, Find a Sponsor',
      author: 'Sylvia Ann Hewlett',
      price: 29.99,
      oldPrice: 32.99,
      imgUrl: ProductPhoto7,
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 18.99,
      oldPrice: 22.99,
      imgUrl: ProductPhoto8,
    }
  ]
};

const BookCard = ({ title, author, price, oldPrice, imgUrl }) => {
  console.log(imgUrl)
  return (
    <div className="book-card">
      <img src={imgUrl} alt={title} className="book-image" />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>
        <span className="price">${price.toFixed(2)}</span>
        {oldPrice && <span className="old-price"> ${oldPrice.toFixed(2)}</span>}
      </p>
      <button className="add-to-basket">Add to basket</button>
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
