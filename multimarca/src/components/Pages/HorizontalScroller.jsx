import { useRef } from "react";

export default function HorizontalScroller({ children, itemWidth = 240, gap = 12 }){
  const ref = useRef(null);
  const scroll = dir => () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * (itemWidth + gap) * 1.2, behavior: "smooth" });
  };

  return (
    <div className="scroller">
      <button className="scroller__btn" onClick={scroll(-1)} aria-label="Anterior">‹</button>
      <div className="scroller__rail" ref={ref} style={{ gap: `${gap}px` }}>
        {children}
      </div>
      <button className="scroller__btn" onClick={scroll(1)} aria-label="Siguiente">›</button>
    </div>
  );
}
