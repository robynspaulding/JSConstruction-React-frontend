export function AboutsIndex(props) {
  return (
    <div id="abouts-index">
      <h1> About </h1>
      {props.abouts.map((about) => (
        <div key={about.id}>
          <h2>{about.summary}</h2>
          <img src={about.image_url} className="image" />
        </div>
      ))}
    </div>
  );
}
