import { NavLink, Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import "../Styles/NavBar.css";

export default function NavBar() {
  const { totals } = useCart();
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "var(--brand-700)" : "inherit",
    fontWeight: isActive ? 600 : 400,
  });

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {/* LOGO */}
        <Link to="/" className="navbar__logo">Multimarca</Link>

        {/* LINKS */}
        <div className="navbar__links">
          <NavLink to="/" style={activeStyle}>Home</NavLink>
          <NavLink to="/tienda" style={activeStyle}>Tienda</NavLink>
          <NavLink to="/marcas" style={activeStyle}>Marcas</NavLink>
          <NavLink to="/sobrenosotros" style={activeStyle}>Nosotros</NavLink>
        </div>

        {/* ICONOS (carrito + perfil) */}
        <div className="navbar__icons">
          <Link to="/carrito" className="navbar__icon" aria-label="Carrito" style={{position:"relative"}}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0 2zM1 2h2l3.6 7.59-1.35 2.44C4.52 12.37 5 13.34 5 14.35V19h2v-4.65c0-.18-.03-.36-.09-.54L8.1 11h7.45c.75 0 1.41-.41 1.75-1.03L22 4H6.31l-.95-2H1zm16 16c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2z"/>
            </svg>
            {totals.count > 0 && (
              <span style={{
                position:"absolute", top:-4, right:-4, minWidth:18, height:18,
                borderRadius:9, background:"var(--brand-700)", color:"#fff",
                fontSize:12, display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"0 5px"
              }}>{totals.count}</span>
            )}
          </Link>

          <Link to="/perfil" className="navbar__icon" aria-label="Perfil">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}



