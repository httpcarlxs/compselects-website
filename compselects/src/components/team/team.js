import React from 'react';
import './team.css';
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";

function Team() {
  return (
    <section className='team'>
      <h2>Equipe</h2>
      <div className='team-members'>
        <div className='member'>
          <img src={avatar4} alt='Editor Chefe' />
          <h3>Leonor Carvalho</h3>
          <p>Editor chefe com experiência de 15 anos, responsável pela curadoria dos conteúdos publicados.</p>
        </div>
        <div className='member'>
          <img src={avatar5} alt='Revisor' />
          <h3>Estevan Ribeiro</h3>
          <p>Revisor especializado em textos técnicos, garantindo a qualidade de todas as publicações.</p>
        </div>
        <div className='member'>
          <img src={avatar6} alt='Revisor' />
          <h3>José Araujo</h3>
          <p>Revisor especializado em textos esportivos, garantindo a qualidade de todas as publicações na área.</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
