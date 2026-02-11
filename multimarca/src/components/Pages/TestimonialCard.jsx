export default function TestimonialCard({ name, role, text }){
  return (
    <div className="tCard">
      <div className="tCard__user">
        <div className="tCard__avatar" />
        <div>
          <strong>{name}</strong>
          <div className="muted">{role}</div>
        </div>
      </div>
      <p className="tCard__text">{text}</p>
    </div>
  );
}
