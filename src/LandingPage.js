import Navbar from "./component/Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage() {
  const settings = {
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="slider py-5">
        <Slider {...settings}>
          {/* card 1 */}
          <div class="card mx-3 d-flex flex-row">
            <img className="img-card" src="./assets/img/concert.jpg" alt="concert" />
            <div class="card-body">
              <h5 class="card-title">Jazz Concert B</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna. Fusce
                tincidunt sem velit, quis vestibulum risus posuere sed. Proin consectetur, felis a
                aliquet euismod, neque orci egestas diam, ...
              </p>
              <p>22 November - 01 Desember</p>
              <div className="d-flex align-items-center">
                <img src="./assets/icon/loc.svg" alt="" className="icon-1 me-3" />
                <p className="mb-0">Sleman, Yogyakarta</p>
                <button className="btn btn-outline-primary ms-auto">Book Now</button>
              </div>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
