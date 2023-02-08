import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";

export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    centerPadding: "300px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "25px",
        },
      },
    ],
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
            <Slide title="slide 1" />
            <Slide title="slide 2" />
            <Slide title="slide 3" />
          </Slider>
        </div>

        {/* Sedang Berlangsung */}
        <div className="display-event py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 main-display-event">
                <h2 className="mb-4">
                  Event <span className="fw-bold text-primary">Berlangsung!</span>
                </h2>
                <div className="row align-items-stretch">
                  <div className="col-md-6 mb-3">
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
                        <div className="d-flex align-items-center mt-auto">
                          <div>
                            <p className="mb-0 text-yellow fw-bold">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
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
                        <h3 className="fw-bold">Misalnya Nama Event Yang Sangat Panjang</h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center mt-auto">
                          <div>
                            <p className="mb-0 text-yellow fw-bold">Mulai dari</p>
                            <p className="mb-0">Rp 20.000</p>
                          </div>
                          <button className="btn btn-outline-primary ms-auto">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
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
                        <h3 className="fw-bold">
                          Misalnya Nama Event Yang Sangat Panjang Banget Ka...
                        </h3>
                        <p className="text-secondary">29 October - 30 October</p>
                        <p>
                          Oleh GAMABUNTA - Lapangan Grha Sabha Pramana (GSP) Universitas Gadjah Mada
                        </p>
                        <div className="d-flex align-items-center mt-auto">
                          <div>
                            <p className="mb-0 text-yellow fw-bold">Mulai dari</p>
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
                            <p className="mb-0 text-yellow fw-bold">Mulai dari</p>
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

      <Footer />
    </div>
  );
}

export function Slide(props) {
  return (
    <div className="slide">
      <div className="card-carousel d-flex flex-sm-row flex-column">
        <div className="thumbnail">
          <Image src="/img/dummy-photos.png" fill objectFit="cover" objectPosition="center" />
        </div>
        <div className="desc">
          <h1>{props.title}</h1>
          <div className="d-flex align-items-center">
            <p>Rp 12.000-Rp 75.000</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna. Fusce
            tincidunt sem velit, quis vestibulum risus posuere sed. Proin consectetur, felis a
            aliquet euismod, neque orci egestas diam, ...
          </p>
          <p className="date">22 November - 01 Desember</p>
          {/* footer */}
          <div className="mt-3 mt-lg-5 d-flex justify-content-between align-items-center">
            {/* location */}
            <div className="d-flex gap-2 align-items-center">
              <img src="/icons/location-outline-gray.svg" />
              <span>Sleman, Yogyakarta</span>
            </div>
            <button className="btn btn-outline-primary">Pesan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function getServerSideProps() {
//   const baseUrl = process.env.base_url;
//   console.log(baseUrl);
//   console.log("halo");
//   return {
//     props: {
//       title: "haha",
//     },
//   };
// }
