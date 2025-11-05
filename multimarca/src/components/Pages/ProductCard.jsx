import { useCart, ars } from "./CartContext.jsx";

export default function ProductCard({ id, brand, title, price, oldPrice, off, image, compact=false }){
  const { addItem } = useCart();

  return (
    <article className={`pCard ${compact ? "pCard--compact":""}`}>
      <div className="pCard__media">
        <img src={image} alt={title} />
      </div>
      <div className="pCard__meta">{brand}</div>
      <h3 className="pCard__title">{title}</h3>

      <div className="pCard__prices">
        {oldPrice && <span className="old">{ars(oldPrice)}</span>}
        <strong>{ars(price)}</strong>
        {off && <span className="off">{off}</span>}
      </div>

      <button className="btn btn--small" onClick={() => addItem({ id, title, price, image }, 1)}>
        Agregar al carrito
      </button>
    </article>
  );
}
