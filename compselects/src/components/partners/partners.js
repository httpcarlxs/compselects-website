import React from 'react';
import './partners.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';

function Partners() {
  return (
    <section className='partners'>
      <h2>Parceiros</h2>
      <div className='partners-logos'>
        <div className='partner'>
          <img src={avatar1} alt='Marisa Alves' />
          <p>UFCG, colaborando em pesquisas e publicações conjuntas.</p>
        </div>
        <div className='partner'>
          <img src={avatar2} alt='Caio Cardoso' />
          <p>LSD, apoiando eventos e workshops educacionais.</p>
        </div>
        <div className='partner'>
          <img src={avatar3} alt='Nicolas Sousa' />
          <p>SPLab, apoiando eventos e workshops educacionais.</p>
        </div>
      </div>
    </section>
  );
}

export default Partners;
