import React from 'react';
import './submissionGuide.css';

function SubmissionGuide() {
  return (
    <div className="submission-guide">
      <h2>Guia de Submissão</h2>
      <p>
        Para submeter seu manuscrito, por favor, siga as diretrizes abaixo:
      </p>
      <ul>
        <li>Formato: Os manuscritos devem ser enviados em formato PDF ou Word.</li>
        <li>Tamanho: O manuscrito deve ter no mínimo 50 páginas.</li>
        <li>Fonte: Use fonte Times New Roman, tamanho 12, com espaçamento 1.5.</li>
        <li>Margens: Configure as margens do documento para 2,5 cm de cada lado.</li>
        <li>Direitos Autorais: Certifique-se de que o conteúdo enviado não infringe nenhum direito autoral.</li>
      </ul>
      <p>
        Manuscritos que não seguem essas diretrizes podem ser rejeitados sem avaliação.
      </p>
    </div>
  );
}

export default SubmissionGuide;
