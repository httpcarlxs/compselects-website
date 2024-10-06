import React from 'react';
import './sejaAutor.css';
import ProductPhoto from "../../assets/avatar4.jpg"
import ProductPhoto1 from "../../assets/avatar5.jpg"
import ProductPhoto2 from "../../assets/avatar6.jpg"

const SejaAutor = () => {
  
    return (
    <div className="seja-autor-container">
      <div className="text-section">
        <h2 className="section-title">Seja Autor!</h2>
        <p className="section-description">
          Faça parte deste seleto grupo de profissionais que elevaram suas carreiras publicando conosco.
        </p>
        <button className="subscribe-button">Inscrever-se</button>
      </div>

      <div className="author-gallery">
        <div className="author-item">
          <img 
            src={ProductPhoto} 
            alt="author 1" 
            className="author-image"
          />
        </div>
        <div className="author-item">
          <img 
            src={ProductPhoto1}  
            alt="author 2" 
            className="author-image"
          />
        </div>
        <div className="author-item">
          <img 
            src={ProductPhoto2}  
            alt="author 3" 
            className="author-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SejaAutor