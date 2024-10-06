import React from 'react';
import './topAutores.css'
import ProductPhoto3 from "../../assets/avatar1.jpg"
import ProductPhoto4 from "../../assets/avatar2.jpg"
import ProductPhoto5 from "../../assets/avatar3.jpg"

// Dados fictícios para os autores

const topAutores = [
    {
        name: 'Will Leitch',
        biography: 'Um autor clássico',
        imgUrl: ProductPhoto3,
        publications: 'Publicações do Will',
    },
    {
        name: 'Andrew Boyd',
        biography: 'Um amante das palavras',
        imgUrl: ProductPhoto4,
        publications: 'Publicações do Andrew',
    },
    {
        name: 'Rasheed Newson',
        biography: 'Um grande estudioso',
        imgUrl: ProductPhoto5,
        publications: 'Publicações do Rasheed',
    }
]


const AuthorCard = ({ name, biography, imgUrl, publications }) => {
    console.log(imgUrl)
    return (
        <div className="author-card">
            <img src={imgUrl} alt={name} className="author-image" />
            <h3>{name}</h3>
            <p>{biography}</p>
            <p>{publications}</p>
        </div>
    );
};

const AuthorSection = ({ title, authors }) => {
    return (
        <div className="author-section">
            <h2>{title}</h2>
            <div className="author-list">
                {authors.map((author, index) => (
                    <AuthorCard key={index} {...author} />
                ))}
            </div>
        </div>
    );
};

const TopAutores = () => {
    return (
        <div className="author-store">
            <AuthorSection title="Autores em Destaque" authors={topAutores} />
        </div>
    );
};

export default TopAutores;
