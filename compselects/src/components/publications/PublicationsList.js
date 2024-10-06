import React, { useContext } from "react";
import { FilterContext } from "../../utils/FilterContext";
import "./PublicationsList.css";
import Foto1 from '../../assets/ProductPhoto(1).svg'
import Foto2 from '../../assets/ProductPhoto(2).svg'

const publicationsData = [
    {
        id: 1,
        type: 'livro',
        title: '(Forget a Mentor) Find a Sponsor',
        author: 'Sylvia Ann Hewlett',
        theme: 'Autoajuda',
        cover: Foto1,
    },
    {
        id: 2,
        type: 'livro',
        title: 'The Time Has Come',
        author: 'Will Leitch',
        theme: 'Ficção',
        cover: Foto2,
    },

];

function PublicationsList() {
  const { filterType, filterTheme } = useContext(FilterContext);

  const filteredPublications = publicationsData.filter((publication) => {
    const matchesType = filterType.length === 0 || filterType.includes(publication.type);
    const matchesTheme = filterTheme.length === 0 || filterTheme.some((theme) => publication.theme.includes(theme));

    return matchesType && matchesTheme;
  });

  return (
    <div className="publications-list">
      {filteredPublications.map((publication) => (
        <div key={publication.id} className="publication-card">
          <img src={publication.cover} alt={publication.title} />
          <div className="publication-info">
            <h2>{publication.title}</h2>
            <p>{publication.description}</p>
            <span className="publication-type">{publication.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PublicationsList;
