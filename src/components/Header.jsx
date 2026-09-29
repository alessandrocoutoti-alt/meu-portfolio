export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__mark" href="#inicio" aria-label="Alessandro Vinícius — início">Alessandro Vinícius</a>
        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
