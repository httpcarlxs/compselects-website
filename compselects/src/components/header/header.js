import './styles.css'


function Header() {
  return (
    <div className='box'>
        <ul className='menu'>
          <li>Home</li>
          <li>Sobre</li>
          <li>Publicações</li>
          <li>Autores</li>
          <li>Submissões</li>
          <li>Eventos</li>
          <li>Blog</li>
        </ul>
        <input className="search" type="text"/>
    </div>
  );
}

export default Header;
