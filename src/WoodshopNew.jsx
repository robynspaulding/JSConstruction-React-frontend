import axios from "axios";

export function WoodshopNew() {
  const handleCreateWoodshop = (params) => {
    axios.post("http://localhost:3000/woodshops.json", params).then((response) => {
      const newWoodshop = response.data;
      console.log("New Woodshop entry added", newWoodshop);
      window.location.href = "#woodshops-index";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateWoodshop(params);
    event.target.reset;
  };

  return (
    <div id="woodshop-new" className="new-entry">
      {localStorage.jwt === undefined ? (
        <></>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h1>Add an item to your Woodshop</h1>
            <div>
              Item Name <input type="text" name="item" required />
            </div>
            <div>
              Description <input type="text" name="description" required />
            </div>
            <div>
              Image URL <input type="text" name="image_url" required />
            </div>
            <button class="add-button" type="submit">
              Add Entry to Woodshop
            </button>
          </form>
        </>
      )}
    </div>
  );
}
