import { Link } from "react-router-dom";
import "../styles/notfound.css";

export default function NotFound(){
  return (
    <section className="notfound">
      <div className="notfound__card" role="alert" aria-live="assertive">
        <div style={{fontSize:"3rem"}}>🧭</div>
        <h1 className="notfound__title">404 — Página no encontrada</h1>
        <p className="notfound__p">Parece que este camino no existe. Volvé al inicio o explorá la tienda.</p>
        <div style={{display:"flex", gap:12, justifyContent:"center"}}>
          <Link className="btn" to="/">Volver al Home</Link>
          <Link className="btn btn--alt" to="/tienda">Ir a la Tienda</Link>
        </div>
      </div>
    </section>
  );
}
