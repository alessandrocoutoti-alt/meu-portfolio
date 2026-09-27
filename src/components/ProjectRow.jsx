export default function ProjectRow({ projeto }) {
  const conteudo = (
    <>
      <div className="row__head">
        <h3 className="row__titulo">{projeto.titulo}</h3>
        <span className="row__ano">{projeto.ano}</span>
      </div>
      <p className="row__descricao">{projeto.descricao}</p>
      <div className="row__tags">
        {projeto.tecnologias.map((tech) => (
          <span key={tech} className="row__tag">
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <li className="row">
      {projeto.link ? (
        <a href={projeto.link} target="_blank" rel="noreferrer" className="row__link">
          {conteudo}
        </a>
      ) : (
        conteudo
      )}

      <style>{`
        .row {
          list-style: none;
          padding: 28px 0;
          border-bottom: 1px solid rgba(232, 228, 216, 0.12);
        }
        .row__link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .row__head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }
        .row__titulo {
          font-size: 1.15rem;
        }
        .row__ano {
          color: var(--paper-muted);
          font-size: 0.85rem;
          white-space: nowrap;
        }
        .row__descricao {
          color: var(--paper-muted);
          max-width: 60ch;
          margin-bottom: 14px;
        }
        .row__tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .row__tag {
          font-size: 0.78rem;
          color: var(--sage);
          border: 1px solid rgba(107, 143, 135, 0.4);
          padding: 3px 10px;
          border-radius: 2px;
        }
      `}</style>
    </li>
  );
}
