export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__eyebrow">Desenvolvedor · Java & React</p>
        <h1 className="hero__title">
          Alessandro constrói ferramentas que resolvem
          problemas de verdade.
        </h1>
        <a className="hero__cta" href="#projetos">
          Ver projetos
        </a>
      </div>

      <style>{`
        .hero {
          padding-top: 120px;
          padding-bottom: 80px;
        }
        .hero__eyebrow {
          color: var(--sage);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        .hero__title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          max-width: 14ch;
          margin-bottom: 24px;
        }
        .hero__lede {
          max-width: 46ch;
          color: var(--paper-muted);
          font-size: 1.05rem;
          margin-bottom: 32px;
        }
        .hero__cta {
          display: inline-block;
          text-decoration: none;
          color: var(--ink);
          background: var(--brass);
          padding: 12px 22px;
          font-size: 0.95rem;
          border-radius: 2px;
          transition: transform 0.15s ease;
        }
        .hero__cta:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
