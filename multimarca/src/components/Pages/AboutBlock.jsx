export default function AboutBlock(){
  return (
    <section className="about">
      <div className="about__grid">
        <img className="about__img" src="https://images.unsplash.com/photo-1518544801976-3e188ea8ad8c?w=800&auto=format&fit=crop" alt="Flor" />
        <div className="about__text">
          <p className="muted">Subtítulo que establece el contexto, comparte más información sobre el sitio web.</p>
          <p className="muted">Texto ejemplo para completar el bloque. Luego lo reemplazás por tu copy.</p>
        </div>
        <img className="about__img about__img--right" src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop" alt="Skincare" />
      </div>
    </section>
  );
}
