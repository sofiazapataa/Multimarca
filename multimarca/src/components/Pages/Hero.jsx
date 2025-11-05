import { Link } from "react-router-dom";

export default function Hero({ title, subtitle, ctaPrimary, image }){
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__cta">
          <Link to={ctaPrimary.to} className="btn btn--primary">{ctaPrimary.label}</Link>
        </div>
      </div>
      <div className="hero__media">
        <img src={image} alt="" />
      </div>
    </section>
  );
}
