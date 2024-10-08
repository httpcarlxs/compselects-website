import React from 'react';
import './styles.css';
import ProductPhoto from "../../assets/ProductPhoto.svg"
import ProductPhoto1 from "../../assets/ProductPhoto(1).svg"
import ProductPhoto2 from "../../assets/ProductPhoto(2).svg"

const NewReleases = () => {
  
    return (
    <div className="new-releases-container">
      <div className="text-section">
        <h2 className="section-title">Explore Nossos Livros</h2>
        <p className="section-description">
          Explore nossa coleção e descubra livros que vão inspirar, emocionar e transformar suas leituras.
        </p>
        <button className="subscribe-button">Inscrever-se</button>
      </div>

      <div className="book-gallery">
        <div className="book-item">
          <img 
            src={ProductPhoto} 
            alt="I Want a Better Catastrophe" 
            className="book-image"
          />
        </div>
        <div className="book-item">
          <img 
            src={ProductPhoto1}  
            alt="Book 2 Title" 
            className="book-image"
          />
        </div>
        <div className="book-item">
          <img 
            src={ProductPhoto2}  
            alt="Book 3 Title" 
            className="book-image"
          />
        </div>
      </div>
    </div>
  );
};

export default NewReleases