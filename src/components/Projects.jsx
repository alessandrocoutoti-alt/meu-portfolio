import { projects } from "../data/projects.js";
import ProjectRow from "./ProjectRow.jsx";

export default function Projects() {
  return (
    <section id="projetos" className="projects">
      <div className="container">
        <h2 className="projects__title">Projetos</h2>
        <ul className="projects__list">
          {projects.map((p) => (
            <ProjectRow key={p.titulo} projeto={p} />
          ))}
        </ul>
      </div>

      <style>{`
        .projects__title {
          font-size: 1.6rem;
          margin-bottom: 32px;
        }
        .projects__list {
          border-top: 1px solid rgba(232, 228, 216, 0.12);
        }
      `}</style>
    </section>
  );
}
