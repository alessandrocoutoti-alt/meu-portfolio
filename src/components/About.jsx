export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <h2 className="about__title">Sobre mim</h2>
        <p className="about__text">
          Sou um estudante em Manaus - AM, apaixonado por tecnologia e por resolver problemas reais.
          Atualmente sou estudante de Análise e Desenvolvimento de Sistemas, estou estudando Java a
           fundo orientação a objetos, e caminhando em
          direção a construir sistemas completos, do banco de dados à
          interface. Com um grande sonho em me tornar um Desenvolvedor BackEnd.
        </p>
        <p className="about__text">
          Atualmente explorando React no front-end e me preparando para
          Spring Boot no back-end.
        </p>
      </div>

      <style>{`
        .about__title {
          font-size: 1.6rem;
          margin-bottom: 24px;
        }
        .about__text {
          max-width: 60ch;
          color: var(--paper-muted);
          margin-bottom: 16px;
        }
      `}</style>
    </section>
  );
}
