export function PortfoliosShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePortfolio(props.portfolio.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPortfolio(props.portfolio);
  };

  return (
    <div id="portfolios-show">
      <h1>Portfolio Entry:</h1>
      <h3> {props.portfolio.job_name}</h3>
      <p> {props.portfolio.description}</p>
      <img src={props.portfolio.image_url} className="image" />
      <div>
        <h1>Edit Portfolio Entry</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Job name: <input type="text" name="job_name" defaultValue={props.portfolio.job_name} />
          </div>
          <div>
            Description: <input type="text" name="description" defaultValue={props.portfolio.description} />
          </div>
          <div>
            Image: <input type="text" name="image_url" defaultValue={props.portfolio.image_url} />
          </div>
          <p></p>
          <button class="btn btn-outline-dark" type="submit">
            Update portfolio Entry
          </button>
        </form>
      </div>
      <p></p>
      <div>
        <button class="btn btn-outline-danger" onClick={handleClick}>
          Delete Portfolio Entry
        </button>
      </div>
    </div>
  );
}
