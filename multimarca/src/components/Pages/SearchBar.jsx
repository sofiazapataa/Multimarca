export default function SearchBar({ placeholder }){
  return (
    <label className="search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2a8 8 0 1 1 5.3 14l4.4 4.4-1.4 1.4-4.4-4.4A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/></svg>
      <input placeholder={placeholder} />
    </label>
  );
}
