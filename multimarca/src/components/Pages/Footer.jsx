import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Icon = ({ d, label }) => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" role="img">
    <path d={d} />
    <title>{label}</title>
  </svg>
);

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3>Multimarca Natural</h3>
          <p>Skincare vegano y cruelty-free. Compará marcas y elegí lo que mejor va con vos.</p>
          <div className="footer__social" aria-label="Redes sociales">
            <a href="#" aria-label="Instagram"><Icon label="Instagram" d="M12 2c2.7 0 3 .01 4.06.06 1.05.05 1.77.22 2.4.47a4.6 4.6 0 0 1 2.87 2.87c.25.63.42 1.35.47 2.4.05 1.06.06 1.36.06 4.06s-.01 3-.06 4.06c-.05 1.05-.22 1.77-.47 2.4a4.6 4.6 0 0 1-2.87 2.87c-.63.25-1.35.42-2.4.47-1.06.05-1.36.06-4.06.06s-3-.01-4.06-.06c-1.05-.05-1.77-.22-2.4-.47a4.6 4.6 0 0 1-2.87-2.87c-.25-.63-.42-1.35-.47-2.4C2.01 15 2 14.7 2 12s.01-3 .06-4.06c.05-1.05.22-1.77.47-2.4A4.6 4.6 0 0 1 5.4 2.53c.63-.25 1.35-.42 2.4-.47C9 2.01 9.3 2 12 2Zm0 3.2c-2.65 0-2.96.01-4 .06-.96.05-1.48.2-1.83.33-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.13.35-.28.87-.33 1.83-.05 1.04-.06 1.35-.06 4 0 2.65.01 2.96.06 4 .05.96.2 1.48.33 1.83.18.46.39.78.73 1.12.34.34.66.55 1.12.73.35.13.87.28 1.83.33 1.04.05 1.35.06 4 .06s2.96-.01 4-.06c.96-.05 1.48-.2 1.83-.33.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.13-.35.28-.87.33-1.83.05-1.04.06-1.35.06-4 0-2.65-.01-2.96-.06-4-.05-.96-.2-1.48-.33-1.83a3 3 0 0 0-.73-1.12 3 3 0 0 0-1.12-.73c-.35-.13-.87-.28-1.83-.33-1.04-.05-1.35-.06-4-.06Zm0 2.8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.4-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></a>
            <a href="#" aria-label="TikTok"><Icon label="TikTok" d="M12 3h2.2a5.8 5.8 0 0 0 4 4V10a7.9 7.9 0 0 1-4-1.2V14a5.8 5.8 0 1 1-5.8-5.8h.6V10a3.6 3.6 0 1 0 3 3.5V3Z"/></a>
            <a href="#" aria-label="YouTube"><Icon label="YouTube" d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5a3 3 0 0 0-2.1 2.1C2.9 8.9 2.9 12 2.9 12s0 3.1.5 4.8a3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8ZM10.8 15.3V8.7L16 12l-5.2 3.3Z"/></a>
          </div>
        </div>

        <nav>
          <p className="footer__title">Secciones</p>
          <ul className="footer__list">
            <li><Link className="footer__link" to="/">Home</Link></li>
            <li><Link className="footer__link" to="/tienda">Tienda</Link></li>
            <li><Link className="footer__link" to="/marcas">Marcas</Link></li>
            <li><Link className="footer__link" to="/sobrenosotros">Sobre nosotros</Link></li>
          </ul>
        </nav>

        <div>
          <p className="footer__title">Novedades</p>
          <form className="footer__newsletter" onSubmit={(e)=>e.preventDefault()}>
            <input className="footer__input" type="email" placeholder="Tu email" aria-label="Tu email" />
            <button className="footer__btn" type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Multimarca Natural — Hecho con ♥ en Argentina
      </div>
    </footer>
  );
}
