export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="hero__eyebrow">DESENVOLVIMENTO BACK-END · EM FORMAÇÃO</p>
        <h1 id="hero-title" className="hero__title">Da lógica ao código.<br />Ideias que viram sistemas.</h1>
        <p className="hero__lede">Sou Alessandro, estudante de Análise e Desenvolvimento de Sistemas em Manaus. Desenvolvo projetos com Python e SQLite e aprofundo meus estudos em Java.</p>
        <div className="hero__actions">
          <a className="hero__cta" href="#projetos">Conheça meus projetos <span aria-hidden="true">↓</span></a>
          <a className="hero__secondary" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
