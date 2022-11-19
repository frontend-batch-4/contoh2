import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "180px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  };
  return (
    <div className="landing-page">
      <Head>
        <title>Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* carousel section */}
        <div className="carousel-sec py-5">
          <Slider {...settings}>
            <div className="slide">
              <div className="card-carousel d-flex">
                <div className="thumbnail">
                  <Image
                    src="/img/dummy-photos.png"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="desc">
                  <h1>Jazz Concert B 1</h1>
                  <div className="d-flex align-items-center">
                    <p>Rp 12.000-Rp 75.000</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna.
                    Fusce tincidunt sem velit, quis vestibulum risus posuere sed. Proin consectetur,
                    felis a aliquet euismod, neque orci egestas diam, ...
                  </p>
                  <p className="date">22 November - 01 Desember</p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card-carousel d-flex">
                <div className="thumbnail">
                  <Image
                    src="/img/dummy-photos.png"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="desc">
                  <h1>Jazz Concert B 1</h1>
                  <div className="d-flex align-items-center">
                    <p>Rp 12.000-Rp 75.000</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna.
                    Fusce tincidunt sem velit, quis vestibulum risus posuere sed. Proin consectetur,
                    felis a aliquet euismod, neque orci egestas diam, ...
                  </p>
                  <p className="date">22 November - 01 Desember</p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="card-carousel d-flex">
                <div className="thumbnail">
                  <Image
                    src="/img/dummy-photos.png"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="desc">
                  <h1>Jazz Concert B 1</h1>
                  <div className="d-flex align-items-center">
                    <p>Rp 12.000-Rp 75.000</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna.
                    Fusce tincidunt sem velit, quis vestibulum risus posuere sed. Proin consectetur,
                    felis a aliquet euismod, neque orci egestas diam, ...
                  </p>
                  <p className="date">22 November - 01 Desember</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Starting soon */}
        <div className="display-event py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 main-display-event">
                <h2 className="mb-4">
                  Starting <span className="fw-bold text-primary">Soon</span>
                </h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card-event">
                      <div className="thumbnail--card-event">
                        <Image
                          src="/img/dummy-photos.png"
                          fill
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="decs--card-event">
                        <h3 className="fw-bold">Mangafest UGM</h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-event">
                      <div className="thumbnail--card-event">
                        <Image
                          src="/img/dummy-photos.png"
                          fill
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="decs--card-event">
                        <h3 className="fw-bold">Mangafest UGM</h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card-event">
                      <div className="thumbnail--card-event">
                        <Image
                          src="/img/dummy-photos.png"
                          fill
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="decs--card-event">
                        <h3 className="fw-bold">Mangafest UGM</h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1 d-flex align-items-center justify-content-center">
                <div className="vertical-line"></div>
              </div>
              <div className="col-md-3">
                <h5 className="fw-bold mb-4">
                  Upcoming <span className="text-primary">Event</span>
                </h5>
                <div className="row">
                  <div className="col-12">
                    <div className="card-event card-event-mini">
                      <div className="thumbnail--card-event">
                        <Image
                          src="/img/dummy-photos.png"
                          fill
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="decs--card-event">
                        <h3 className="fw-bold">Mangafest UGM</h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
