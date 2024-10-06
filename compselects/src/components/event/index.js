import React from 'react';
import './styles.css';

const eventsData = [
    {
      title: 'Próximos Eventos',
      description: 'Descubra os mais recentes eventos organizados por nossa editora, incluindo lançamentos exclusivos de livros, encontros com autores e muito mais.',
      link: '#upcoming-events',
    },
    {
      title: 'Workshops',
      description: 'Participe de nossos workshops práticos, projetados tanto para leitores quanto para escritores. Aprenda com profissionais da indústria e aprimore suas habilidades.',
      link: '#workshops',
    },
    {
      title: 'Conferências',
      description: 'Explore as conferências literárias mais perspicazes apoiadas por nossa editora, onde especialistas compartilham conhecimentos sobre o futuro da leitura.',
      link: '#conferences',
    },
  ];
  
const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">Eventos e workshops</h2>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <h3 className="event-card-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <a href={event.link} className="event-link">Ver mais</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
