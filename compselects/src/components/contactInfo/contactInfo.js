import React from 'react';
import './contactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Informações de Contato</h2>
      <p><strong>Endereço:</strong> Rua Exemplo, 123, Centro, São Paulo - SP</p>
      <p><strong>Telefone:</strong> (11) 1234-5678</p>
      <p><strong>E-mail para Autores:</strong> autores@editora.com.br</p>
      <p><strong>E-mail para Leitores:</strong> leitores@editora.com.br</p>
    </div>
  );
}

export default ContactInfo;
