import React, { useState } from "react";
import EventCard from "./components/eventCard/eventCard";
import EventDetails from "./components/eventDetails/eventDetails";
import "./styles/Eventos.css";

const eventsData = [
  {
    id: 1,
    title: "Lançamento do Livro Fundamentos de Programação Web",
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
  {
    id: 4,
    title: "Workshop de Escrita Criativa",
    date: "12 de Novembro de 2024",
    location: "Belo Horizonte, MG",
    agenda:
      "Oficina prática sobre técnicas de escrita criativa para novos autores.",
    registrationLink: "https://example.com/escritacriativa",
  },
  {
    id: 5,
    title: "Lançamento do Livro Futuro da Tecnologia",
    date: "20 de Novembro de 2024",
    location: "Brasília, DF",
    agenda:
      "Discussão com especialistas sobre os impactos das novas tecnologias na sociedade.",
    registrationLink: "https://example.com/livroy",
  },
  {
    id: 6,
    title: "Palestra sobre Publicação Digital",
    date: "25 de Novembro de 2024",
    location: "Online",
    agenda:
      "Palestra sobre estratégias para publicação e distribuição digital de livros.",
    registrationLink: "https://example.com/publicacaodigital",
  },
  {
    id: 7,
    title: "Encontro de Autores e Leitores",
    date: "30 de Novembro de 2024",
    location: "Curitiba, PR",
    agenda: "Evento de networking entre autores independentes e leitores.",
    registrationLink: "https://example.com/encontroautores",
  },
  {
    id: 8,
    title: "Simpósio sobre Educação e Tecnologia",
    date: "5 de Dezembro de 2024",
    location: "Florianópolis, SC",
    agenda:
      "Debates sobre como as novas tecnologias estão transformando a educação.",
    registrationLink: "https://example.com/simposioeducacao",
  },
  {
    id: 9,
    title: "Conferência de Autores de Ficção Científica",
    date: "10 de Dezembro de 2024",
    location: "Porto Alegre, RS",
    agenda:
      "Discussões sobre o futuro da ficção científica e a evolução do gênero.",
    registrationLink: "https://example.com/conferenciaficcao",
  },
  {
    id: 10,
    title: "Oficina de Ilustração para Livros Infantis",
    date: "15 de Dezembro de 2024",
    location: "Recife, PE",
    agenda:
      "Workshop sobre criação de ilustrações para livros infantis, com dicas e exercícios práticos.",
    registrationLink: "https://example.com/ilustracaoinfantil",
  },
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
