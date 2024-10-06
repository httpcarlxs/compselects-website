import React, { useState } from "react";
import EventCard from "./components/eventCard/eventCard";
import EventDetails from "./components/eventDetails/eventDetails";
import "./styles/Eventos.css";

const eventsData = [
  {
    id: 1,
    title: "Lançamento do Livro X",
    date: "15 de Outubro de 2024",
    location: "São Paulo, SP",
    agenda: "Palestra e sessão de autógrafos com o autor",
    registrationLink: "https://example.com/livrox",
  },
  {
    id: 2,
    title: "Webinar sobre Tecnologias de IA",
    date: "20 de Outubro de 2024",
    location: "Online",
    agenda: "Discussão sobre Inteligência Artificial aplicada à indústria",
    registrationLink: "https://example.com/webinar",
  },
  {
    id: 3,
    title: "Feira de Livros",
    date: "5 de Novembro de 2024",
    location: "Rio de Janeiro, RJ",
    agenda:
      "Exposição de livros e autores presentes para sessões de autógrafos",
    registrationLink: "https://example.com/feira",
  },
  // Adicione mais eventos conforme necessário
];

function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBack = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="events-page">
      <h1>Calendário de Eventos</h1>
      {selectedEvent ? (
        <EventDetails event={selectedEvent} onBack={handleBack} />
      ) : (
        <div className="events-grid">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={handleEventClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Eventos;
