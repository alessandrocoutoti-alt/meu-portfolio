import { projects } from "../data/projects.js";
import ProjectRow from "./ProjectRow.jsx";

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <p className="section-label">DO ESTUDO À PRÁTICA</p>
        <h2 className="projects__title">Projetos</h2>
        <p className="section-intro">Uma seleção do que venho construindo e aprendendo.</p>
        <ul className="projects__list">
          {projects.map((p) => (
            <ProjectRow key={p.titulo} projeto={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
