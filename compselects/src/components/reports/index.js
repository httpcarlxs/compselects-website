import React from 'react';
import './styles.css'; // Importa o arquivo de estilos

const reportsData = [
  {
    name: 'Carlos Fuch',
    description:
      "A seleção de livros da editora é incrível, sempre encontro títulos que me surpreendem. A experiência de compra é simples e rápida, recomendo demais!",
  },
  {
    name: "Matheus Alves",
    description:
      "A seleção de livros da editora é incrível, sempre encontro títulos que me surpreendem. A experiência de compra é simples e rápida, recomendo demais!",
  },
];

const Reports = () => {
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

export default Reports;