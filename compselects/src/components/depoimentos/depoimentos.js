import React from 'react';
import './depoimentos.css'; // Importa o arquivo de estilos

const reportsData = [
  {
    name: 'Andrew Boyd',
    description:
      "Publicar livros com esta editora é incrivelmente fácil e muito lucrativo. Eles são muito justos e valorizam os escritores!",
  },
  {
    name: "Matthew Dorne",
    description:
      "Recebi três vezes mais propostas de emprego depois de publicar um periódico pela editora!",
  },
];

const Depoimentos = () => {
  return (
    <section className="news-section">
      <h2 className="news-title">Depoimentos</h2>
      <div className="news-container">
        {reportsData.map((report, index) => (
          <div key={index} className="news-card">
            <h3 className="news-card-title">{report.name}</h3>
            <div className="news-divider"></div>
            <p className="news-description">{report.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;