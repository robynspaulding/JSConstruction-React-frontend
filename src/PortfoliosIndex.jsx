export function PortfoliosIndex(props) {
  return (
    <div id="portfolios-index">
      <h1> Portfolio </h1>
      {props.portfolios.map((portfolio) => (
        <div key={portfolio.id}>
          <h2>{portfolio.job_name}</h2>
          <p>{portfolio.description}</p>
          <img src={portfolio.image_url} className="image" />
          <p>
            {localStorage.jwt === undefined ? (
              <></>
            ) : (
              <>
                <button onClick={() => props.onSelectPortfolio(portfolio)}>Edit Portfolio Entry</button>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
