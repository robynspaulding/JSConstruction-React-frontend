export function WoodshopsIndex(props) {
  return (
    <div id="woodshops-index" className="index">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h1>The Woodshop </h1>
        </div>
        {props.woodshops.map((woodshop) => (
          <div key={woodshop.id}>
            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="300">
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img src={woodshop.image_url} className="image" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h2>{woodshop.item}</h2>
                    <p>{woodshop.description}</p>
                  </div>
                </div>
              </div>

              <p>
                {localStorage.jwt === undefined ? (
                  <></>
                ) : (
                  <>
                    <button className="edit-button" onClick={() => props.onSelectWoodshop(woodshop)}>
                      Edit {woodshop.item}
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
