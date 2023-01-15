import axios from "axios";

export function WoodshopNew() {
  const handleCreateWoodshop = (params) => {
    axios.post("http://localhost:3000/woodshops.json", params).then((response) => {
      const newWoodshop = response.data;
      console.log("New Woodshop entry added", newWoodshop);
      window.location.href = "/";
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
      <div class="container" data-aos="fade-up">
        <div class="section-title"></div>
        {localStorage.jwt === undefined ? (
          <></>
        ) : (
          <>
            <div class="col-lg-14 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit}>
                <h1>Add an item to The Woodshop</h1>
                <div class="row gy-2 gx-md-2">
                  <div class="col-md-6 form-group">
                    <input type="text" name="item" class="form-control" placeholder="Item Name" required />
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="text" name="image_url" class="form-control" placeholder="Image URL" required />
                  </div>
                  <div class="form-group col-12">
                    <textarea
                      name="description"
                      class="form-control"
                      rows="5"
                      placeholder="Item Description"
                      required
                    ></textarea>
                  </div>
                </div>

                <button class="add-button" type="submit">
                  Add Item
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
