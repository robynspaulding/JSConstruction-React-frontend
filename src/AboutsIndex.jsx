export function AboutsIndex(props) {
  return (
    <section id="abouts-index" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <h4>Owner/Operator Jordan Spaulding</h4>
          <p>Liscense Number 1016057 </p>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            {props.abouts.map((about) => (
              <div key={about.id}>
                <p>{about.summary}</p>
                <p>
                  {localStorage.jwt === undefined ? (
                    <></>
                  ) : (
                    <>
                      <button
                        class="btn btn-outline-dark"
                        // className="edit-button"
                        onClick={() => props.onSelectAbout(about)}
                      >
                        Edit About Entry
                      </button>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            {props.abouts.map((about) => (
              <div key={about.id}>
                <img src={about.image_url} className="image" />
                <p className="image-text">Jordan Spaulding</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
