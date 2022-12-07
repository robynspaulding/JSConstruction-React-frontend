export function PortfoliosIndex(props) {
  return (
    <div id="portfolios-index">
      <h1> Portfolio </h1>
      {props.portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <h2>{portfolio.job_name}</h2>
          <p>{portfolio.description}</p>
          <img src={portfolio.image_url} className="image" />
        </div>
      ))}
    </div>
  );
}
