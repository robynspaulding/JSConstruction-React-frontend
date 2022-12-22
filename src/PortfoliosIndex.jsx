export function PortfoliosIndex(props) {
  return (
    <div id="portfolios-index">
      <h1> Portfolio / Jobs </h1>

      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Testimonials</h2>
          {props.portfolios.map((portfolio) => (
            <div key={portfolio.id}>
              <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="testimonial-item">
                      <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        <h2>{portfolio.job_name}</h2>

                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <img src={portfolio.image_url} className="image" />
                      <p>{portfolio.description}</p>
                      <p>
                        {localStorage.jwt === undefined ? (
                          <></>
                        ) : (
                          <>
                            <button onClick={() => props.onSelectPortfolio(portfolio)}>Admin Edit</button>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
