import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, title, price, image, qty}
  const [shipping, setShipping] = useState({ id: "correo", name: "Correo Argentino", cost: 0 });

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === product.id);
      if (i !== -1) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const setQty = (id, qty) => {
    setItems(prev =>
      prev
        .map(p => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
    );
  };

  const inc = (id) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  const dec = (id) => setItems(prev => prev.map(p => p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p));
  const removeItem = (id) => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => { setItems([]); setShipping({ id: "correo", name: "Correo Argentino", cost: 0 }); };

  const totals = useMemo(() => {
    const subtotal = items.reduce((acc, p) => acc + p.price * p.qty, 0);
    return {
      count: items.reduce((acc, p) => acc + p.qty, 0),
      subtotal,
      shipping: shipping.cost,
      total: subtotal + shipping.cost,
    };
  }, [items, shipping]);

  return (
    <CartContext.Provider value={{ items, addItem, setQty, inc, dec, removeItem, clear, shipping, setShipping, totals }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

// Utilidad para formatear ARS
export const ars = (n) => n.toLocaleString("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 2 });
