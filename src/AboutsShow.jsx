export function AboutsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateAbout(props.about.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyAbout(props.about);
  };

  return (
    <div id="abouts-show">
      <h1>About Entry:</h1>
      <h3> {props.about.title}</h3>
      <img src={props.about.image_url} />
      <div>
        <h1>Edit About Entry</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Summary: <input type="text" name="summary" defaultValue={props.about.summary} />
          </div>
          <div>
            Image: <input type="text" name="image_url" defaultValue={props.about.image_url} />
          </div>
          <button type="submit">Update About Entry</button>
        </form>
      </div>
      {/* <div>
        <button onClick={handleClick}>Delete Entry</button>
      </div> */}
    </div>
  );
}
