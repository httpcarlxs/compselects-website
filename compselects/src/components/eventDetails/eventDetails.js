import React from "react";
import "./eventDetails.css";

function EventDetails({ event, onBack }) {
  return (
    <div className="event-details">
      <button onClick={onBack}>Voltar</button>
      <h2>{event.title}</h2>
      <p>
        <strong>Data:</strong> {event.date}
      </p>
      <p>
        <strong>Local:</strong> {event.location}
      </p>
      <p>
        <strong>Agenda:</strong> {event.agenda}
      </p>
      <a href={event.registrationLink}>Inscreva-se aqui</a>
    </div>
  );
}

export default EventDetails;
