export default function BrandCard({ name, desc, logoBg="#eee" }){
  return (
    <div className="brandCard">
      <div className="brandCard__logo" style={{ background: logoBg }}>{name}</div>
      <p className="brandCard__desc">{desc}</p>
    </div>
  );
}
