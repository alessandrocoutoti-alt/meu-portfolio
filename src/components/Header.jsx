export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <span className="header__mark">Alessandro Vin&iacute;cius</span>
        <nav className="header__nav">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(22, 33, 31, 0.85);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid rgba(232, 228, 216, 0.1);
        }
        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .header__mark {
          font-family: var(--font-display);
          font-size: 2.0rem;
          color: var(--brass);
        }
        .header__nav {
          display: flex;
          gap: 28px;
        }
        .header__nav a {
          text-decoration: none;
          color: var(--paper-muted);
          font-size: 0.9rem;
          transition: color 0.15s ease;
        }
        .header__nav a:hover,
        .header__nav a:focus-visible {
          color: var(--paper);
        }

        /*@media (max-width: 480px) {
          .header__inner {
            justify-content: center;
            text-align: center;
          }
          .header__mark {
            font-size: 1.3rem;
          }
          .header__nav {
            gap: 16px;
            justify-content: center;
            width: 100%;
          }
          .header__nav a {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}
