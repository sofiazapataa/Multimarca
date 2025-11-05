import "../Styles/home.css";
import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import SearchBar from "./SearchBar.jsx";
import SectionHeader from "./SectionHeader.jsx";
import HorizontalScroller from "./HorizontalScroller.jsx";
import ProductCard from "./ProductCard.jsx";
import BrandCard from "./BrandCard.jsx";
import AboutBlock from "./AboutBlock.jsx";
import TestimonialCard from "./TestimonialCard.jsx";

export default function Home() {
  // --- Datos mock (reemplazables por Firestore) ---
  const ofertas = [
    { id: "p1", brand: "Natura", title: "Serum iluminador", price: 12300, oldPrice: 14800, off: "-20%", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop" },
    { id: "p2", brand: "Natura", title: "Serum iluminador", price: 12300, oldPrice: 14800, off: "-20%", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop" },
    { id: "p3", brand: "Natura", title: "Serum iluminador", price: 12300, oldPrice: 14800, off: "-20%", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop" },
    { id: "p4", brand: "Natura", title: "Serum iluminador", price: 12300, oldPrice: 14800, off: "-20%", image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&auto=format&fit=crop" },
  ];

  const brands = [
    { id: "b1", name: "kosmos", desc: "Ingredientes naturales y fórmulas limpias.", logoBg: "#dfe8e2" },
    { id: "b2", name: "ACF", desc: "Equilibrio y pureza. Certificación vegana.", logoBg: "#ece7e1" },
    { id: "b3", name: "natura", desc: "Cuidado consciente con impacto positivo.", logoBg: "#ffe8d6" },
    { id: "b4", name: "Ala", desc: "Belleza minimalista y responsable.", logoBg: "#e2f0f8" },
    { id: "b5", name: "Botanika", desc: "Ciencia natural aplicada al skincare.", logoBg: "#e7efe1" },
  ];

  const compareSerums = ofertas;
  const compareCremas = ofertas;

  const testimonials = [
    { id: "t1", name: "María", role: "Compradora", text: "«Mi paquete llegó en perfecto estado»" },
    { id: "t2", name: "Lucas", role: "Cliente", text: "«Muy fácil comparar marcas y comprar»" },
    { id: "t3", name: "Ana", role: "Compradora", text: "«Los productos son excelentes»" },
  ];

  return (
    <main className="home">
      {/* barra superior: búsqueda + login */}
      <div className="home__top">
        <SearchBar placeholder="¿Qué quieres buscar hoy?" />
        <Link to="/Tienda" className="btn btn--ghost-sm">Buscar</Link>
      </div>

      {/* hero */}
      <Hero
        title={<>The Future Of <br /> <span>Beauty</span></>}
        subtitle="Subtítulo que establece el contexto y motiva a seguir navegando."
        ctaPrimary={{ to: "/tienda", label: "Ver Tienda" }}
        image="./assets/images/img.png"
      />

      {/* Ofertas */}
      <SectionHeader title="Nuevas Ofertas" />
      <HorizontalScroller itemWidth={260}>
        {ofertas.map(p => <ProductCard key={p.id} {...p} />)}
      </HorizontalScroller>

      {/* Nuestras Marcas */}
      <section className="brandsBlock">
        <div className="brandsBlock__left">
          <h2 className="section__title">Nuestras Marcas</h2>
          <p className="muted">Subtítulo que establece el contexto, comparte más información sobre el sitio web.</p>
          <HorizontalScroller itemWidth={210}>
            {brands.map(b => <BrandCard key={b.id} {...b} />)}
          </HorizontalScroller>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <SectionHeader title="Sobre Nosotros" />
      <AboutBlock />

      {/* Compara tus marcas favoritas */}
      <div className="compareHeader">
        <h2>Compara tus Marcas favoritas</h2>
      </div>

      {/* Fila 1: Serums */}
      <div className="categoryRow">
        <div className="categoryRow__head">
          <h3>Serums</h3>
          <details className="catMenu">
            <summary>Categorías ▾</summary>
            <ul>
              <li><Link to="/tienda?cat=skincare">Skincare</Link></li>
              <li><Link to="/tienda?cat=maquillaje">Maquillaje</Link></li>
              <li><Link to="/tienda?cat=cremas">Cremas corporales</Link></li>
              <li><Link to="/tienda?cat=capilar">Cuidado capilar</Link></li>
            </ul>
          </details>
        </div>
        <HorizontalScroller itemWidth={240}>
          {compareSerums.map(p => <ProductCard key={`s-${p.id}`} {...p} compact />)}
        </HorizontalScroller>
      </div>

      {/* Fila 2: Cremas Faciales */}
      <div className="categoryRow">
        <div className="categoryRow__head">
          <h3>Cremas Faciales</h3>
          <details className="catMenu">
            <summary>Categorías ▾</summary>
            <ul>
              <li><Link to="/tienda?cat=skincare">Skincare</Link></li>
              <li><Link to="/tienda?cat=maquillaje">Maquillaje</Link></li>
              <li><Link to="/tienda?cat=cremas">Cremas corporales</Link></li>
              <li><Link to="/tienda?cat=capilar">Cuidado capilar</Link></li>
            </ul>
          </details>
        </div>
        <HorizontalScroller itemWidth={240}>
          {compareCremas.map(p => <ProductCard key={`c-${p.id}`} {...p} compact />)}
        </HorizontalScroller>
      </div>

      {/* Opiniones */}
      <SectionHeader title="Opiniones de nuestros clientes" />
      <HorizontalScroller itemWidth={260}>
        {testimonials.map(t => <TestimonialCard key={t.id} {...t} />)}
      </HorizontalScroller>
    </main>
  );
}
