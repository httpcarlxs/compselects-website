import React from 'react';
import ContactForm from './components/contactForm/contactForm';
import ContactInfo from './components/contactInfo/contactInfo';
import "./styles/Contato.css";

function Contato() {
  return (
    <div className="contato-page">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default Contato;
