export function WoodshopsIndex(props) {
  return (
    <div id="woodshops-index">
      <h1>The Woodshop </h1>
      {props.woodshops.map((woodshop) => (
        <div key={woodshop.id}>
          <h2>{woodshop.item}</h2>
          <p>{woodshop.description}</p>
          <img src={woodshop.image_url} className="image" />
        </div>
      ))}
    </div>
  );
}
