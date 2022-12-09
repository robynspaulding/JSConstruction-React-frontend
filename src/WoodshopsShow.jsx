export function WoodshopsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWoodshop(props.woodshop.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyWoodshop(props.woodshop);
  };

  return (
    <div id="woodshops-show">
      <h1>Woodshop Entry:</h1>
      <h3> {props.woodshop.item}</h3>
      <p> {props.woodshop.description}</p>
      <img src={props.woodshop.image_url} className="image" />
      <div>
        <h1>Edit Woodshop Entry</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Item name: <input type="text" name="item" defaultValue={props.woodshop.item} />
          </div>
          <div>
            Description: <input type="text" name="description" defaultValue={props.woodshop.description} />
          </div>
          <div>
            Image: <input type="text" name="image_url" defaultValue={props.woodshop.image_url} />
          </div>
          <button type="submit">Update woodshop Entry</button>
        </form>
      </div>
      <div>
        <button onClick={handleClick}>Delete Item Entry</button>
      </div>
    </div>
  );
}
