import { useCart, ars } from "./CartContext.jsx";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Carrito(){
  const { items, inc, dec, setQty, removeItem, clear, shipping, setShipping, totals, addItem } = useCart();

  // Mock: si el carrito está vacío, agrego 1 item demo para que veas el layout.
  useEffect(() => {
    if (items.length === 0) {
      addItem({
        id: "demo-01",
        title: "SÉRUM HIDRATANTE Y TENSOR / Boosting Drops",
        price: 39850,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=200&q=80&auto=format&fit=crop"
      }, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectShipping = (id) => {
    if (id === "correo") setShipping({ id, name: "Correo Argentino", cost: 0 });
    if (id === "oca")    setShipping({ id, name: "OCA", cost: 1800 });
  };

  return (
    <main className="cart">
      <div className="cart__header">
        <h1>Carrito de Compras</h1>
        {items.length > 0 && <button className="link-danger" onClick={clear}>Vaciar carrito</button>}
      </div>

      {items.length === 0 ? (
        <div className="empty">
          <p>Tu carrito está vacío.</p>
          <Link to="/tienda" className="btn">Ver productos</Link>
        </div>
      ) : (
        <>
          <section className="cart__list">
            {items.map(p => (
              <article key={p.id} className="cartItem">
                <img className="cartItem__img" src={p.image} alt={p.title} />
                <div className="cartItem__info">
                  <h3 className="cartItem__title">{p.title}</h3>
                  <p className="cartItem__price">{ars(p.price)}</p>

                  <div className="qty">
                    <button aria-label="Restar" onClick={() => dec(p.id)}>-</button>
                    <input
                      type="number"
                      min="1"
                      value={p.qty}
                      onChange={(e)=> setQty(p.id, parseInt(e.target.value || "1", 10))}
                    />
                    <button aria-label="Sumar" onClick={() => inc(p.id)}>+</button>
                  </div>
                </div>

                <div className="cartItem__right">
                  <button className="link-muted" onClick={() => removeItem(p.id)}>Borrar</button>
                  <div className="cartItem__subtotal">{ars(p.price * p.qty)}</div>
                </div>
              </article>
            ))}
          </section>

          <section className="cart__shipping">
            <h3>Métodos de Envío</h3>
            <div className="divider" />
            <label className={`ship ${shipping.id==="correo" ? "ship--active":""}`}>
              <input type="radio" name="ship" checked={shipping.id==="correo"} onChange={()=>selectShipping("correo")} />
              <span>Correo Argentino</span>
              <strong>{ars(0)}</strong>
            </label>
            <label className={`ship ${shipping.id==="oca" ? "ship--active":""}`}>
              <input type="radio" name="ship" checked={shipping.id==="oca"} onChange={()=>selectShipping("oca")} />
              <span>OCA</span>
              <strong>{ars(1800)}</strong>
            </label>
          </section>

          <aside className="cart__summary">
            <div className="card">
              <div className="row">
                <span>Total:</span>
                <strong>{ars(totals.total)}</strong>
              </div>

              <div className="mini">
                <div className="row"><span>Subtotal</span><span>{ars(totals.subtotal)}</span></div>
                <div className="row"><span>Envío ({shipping.name})</span><span>{ars(totals.shipping)}</span></div>
              </div>

              <button className="btn btn--primary" disabled={items.length===0}>Ir a Pagar</button>
              <Link to="/tienda" className="btn btn--ghost">Ver más Productos</Link>
            </div>
          </aside>
        </>
      )}
    </main>
  );
}
