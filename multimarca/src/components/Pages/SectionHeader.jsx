export default function SectionHeader({ title, right }){
  return (
    <div className="sectionHeader">
      <h2 className="section__title">{title}</h2>
      {right}
    </div>
  );
}
