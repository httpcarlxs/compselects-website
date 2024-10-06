import "./styles.css";

function Header({ setActivePage }) {
  return (
    <div className="box">
      <ul className="menu">
        <li onClick={() => setActivePage("home")}>Home</li>
        <li onClick={() => setActivePage("sobre")}>Sobre</li>
        <li>Publicações</li>
        <li>Autores</li> 
        <li>Submissões</li>
        <li onClick={() => setActivePage("eventos")}>Eventos</li>
        <li>Blog</li>
      </ul>
      <input className="search" type="text" />
    </div>
  );
}

export default Header;
