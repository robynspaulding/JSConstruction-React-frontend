import axios from "axios";

export function PortfolioNew() {
  const handleCreatePortfolio = (params) => {
    axios.post("http://localhost:3000/portfolios.json", params).then((response) => {
      const newPortfolio = response.data;
      console.log("New Portfolio entry added", newPortfolio);
      window.location.href = "/index";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreatePortfolio(params);
    event.target.reset;
  };

  return (
    <div id="portfolio-new">
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h1>Add a job to your Portfolio</h1>
            <div>
              Job Name <input type="text" name="job_name" />
            </div>
            <div>
              Description <input type="text" name="description" />
            </div>
            <div>
              Image URL <input type="text" name="image_url" />
            </div>
            <button type="submit">Add Entry to Portfolio</button>
          </form>
        </>
      )}
    </div>
  );
}
