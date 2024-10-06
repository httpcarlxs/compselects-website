import React from 'react';
import './styles.css';

const eventsData = [
  {
    title: 'Upcoming Events',
    description: 'Discover the latest events hosted by our bookstore, featuring exclusive book launches, author meetups, and more.',
    link: '#upcoming-events',
  },
  {
    title: 'Workshops',
    description: 'Join our hands-on workshops, designed for readers and writers alike. Learn from industry professionals and sharpen your skills.',
    link: '#workshops',
  },
  {
    title: 'Conferences',
    description: 'Explore the most insightful literary conferences supported by our bookstore, where experts share knowledge about the future of reading.',
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
            <a href={event.link} className="event-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
