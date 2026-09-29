export default function ProjectRow({ projeto }) {
  return (
    <li className="row">
      {projeto.destaque && <p className="row__featured">PROJETO EM DESTAQUE</p>}
      <div className="row__head">
        <h3>{projeto.titulo}</h3>
        <span className="row__ano">{projeto.ano}</span>
      </div>
      <p className="row__descricao">{projeto.descricao}</p>
      <div className="row__footer">
        <ul className="row__tags" aria-label="Tecnologias utilizadas">
          {projeto.tecnologias.map((tech) => <li key={tech} className="row__tag">{tech}</li>)}
        </ul>
        {projeto.link && <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="row__link" aria-label={`Ver código de ${projeto.titulo} no GitHub (abre em nova aba)`}>Ver código <span aria-hidden="true">↗</span></a>}
      </div>
    </li>
  );
}
