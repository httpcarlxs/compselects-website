import React, { useState } from 'react';
import './submissionForm.css';

function SubmissionForm() {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    abstract: '',
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o manuscrito para o backend
    console.log(formData);
  };

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <h2>Formulário de Submissão</h2>
      <div className="form-group">
        <label htmlFor="title">Título do Manuscrito:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="authors">Autores:</label>
        <input
          type="text"
          id="authors"
          name="authors"
          value={formData.authors}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="abstract">Resumo:</label>
        <textarea
          id="abstract"
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="file">Upload do Manuscrito:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx"
          required
        />
      </div>

      <button type="submit">Enviar Submissão</button>
    </form>
  );
}

export default SubmissionForm;
