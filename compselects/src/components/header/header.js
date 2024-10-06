import "./styles.css";

function Header({ setActivePage }) {
  return (
    <div className="box">
      <ul className="menu">
        <li onClick={() => setActivePage("home")}>Home</li>
        <li onClick={() => setActivePage("sobre")}>Sobre</li>
        <li onClick={() => setActivePage("publicacoes")}>Publicações</li>
        <li onClick={() => setActivePage("autores")}>Autores</li> 
        <li onClick={() => setActivePage("submissoes")}>Submissões</li>
        <li onClick={() => setActivePage("eventos")}>Eventos</li>
        <li onClick={() => setActivePage('blog')}>Blog</li>
        <li onClick={() => setActivePage("contato")}>Contato</li>
      </ul>
      <input className="search" type="text" />
    </div>
  );
}

export default Header;
