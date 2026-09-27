export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2 className="contact__title">Vamos conversar</h2>
        <p className="contact__text">
          Aberto a projetos e oportunidades. O jeito mais rápido de falar
          comigo:
        </p>
        <div className="contact__links">
          <a href="">alessandrocouto.ti@gmail.com</a>
          <a href="https://www.linkedin.com/in/alessandro-vin%C3%ADcius-a90494320/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/alessandrocoutoti-alt" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <style>{`
        .contact__title {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }
        .contact__text {
          color: var(--paper-muted);
          margin-bottom: 24px;
        }
        .contact__links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .contact__links a {
          text-decoration: none;
          color: var(--brass);
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }
        .contact__links a:hover,
        .contact__links a:focus-visible {
          border-color: var(--brass);
        }
      `}</style>
    </section>
  );
}
