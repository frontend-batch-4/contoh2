import Head from "next/head";
import Navbar from "../../components/navbar";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="single-event">
      <Head>
        <title>Login - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container py-4">
        <div className="row">
          {/* main side */}
          <div className="col-md-9">
            {/* title bar */}
            <div className="title-bar d-flex align-items-start justify-content-between mb-4">
              <div>
                <h1 className="fw-bold">Mangafest UGM</h1>
                <div className="d-flex align-items-center gap-2">
                  <img src="/icons/music-gray.svg" />
                  <span className="fw-bold text-secondary fs-4">Music</span>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <button className="btn-clear">
                  <img src="/icons/bookmark.svg" />
                </button>
                <button className="btn-clear">
                  <img src="/icons/share.svg" />
                </button>
              </div>
            </div>

            {/* main info section */}
            <div className="row">
              <div className="col-md-6">
                <img src="/img/event-thumbnail.jpg" alt="event thumbnail" />
              </div>
              <div className="col-md-6">
                {/* penyelenggara */}
                <div className="d-flex align-items-center gap-2 text-purple">
                  <img src="/icons/stadium-outline-purple.svg" />
                  <p className="mb-0">Penyelenggara</p>
                </div>
                <p>GAMABUNTA</p>

                {/* event time */}
                <div className="d-flex align-items-center gap-2 text-purple">
                  <img src="/icons/stadium-outline-purple.svg" />
                  <p className="mb-0">Waktu Dimulai</p>
                </div>
                <p>
                  29 October 2022 - 30 October 2022, <br />
                  09.00 WIB - 14.00 WIB
                </p>

                {/* location */}
                <div className="d-flex align-items-center gap-2 text-purple">
                  <img src="/icons/stadium-outline-purple.svg" />
                  <p className="mb-0">Lokasi</p>
                </div>
                <p>Jalan Sosio Humaniora No.1 | Grha Sabha Pramana Universitas Gadjah Mada</p>

                {/* Contact Person */}
                <div className="d-flex align-items-center gap-2 text-purple">
                  <img src="/icons/stadium-outline-purple.svg" />
                  <p className="mb-0">Contact Person</p>
                </div>
                <p>
                  Pak Agung: 0881 2113 3456 <br />
                  Mbak Arum:{" "}
                  <a className="text-purple" href="https://youtu.be/dQw4w9WgXcQ">
                    misalnya ditaruh link
                  </a>
                </p>
              </div>
            </div>

            {/* guest stars */}
            <div className="guests-star mb-5">
              <div className="banner-guest-star rounded">
                <img className="background" src="/img/guest-star.jpg" alt="event guest start" />
                <div className="desc px-4 py-3 w-100 d-flex align-items-end justify-content-between">
                  <div className="text-white">
                    <p className="mb-0">Guest Star</p>
                    <p className="fs-3 fw-bold mb-0">Garnidella</p>
                  </div>
                  <a href="https://youtu.be/dQw4w9WgXcQ" className="text-white">
                    <span>Next</span>
                    <img src="/icons/arrow-right-outline-white.svg" />
                  </a>
                </div>
              </div>
            </div>

            {/* term & condition */}
            <div className="term-condition rounded p-4 bg-purple mb-5">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 text-white fs-5 fw-bold">Syarat & Ketentuan</p>
                <button className="btn btn-light text-purple">Lihat</button>
              </div>
            </div>

            {/* event information */}
            <div className="event-information d-flex flex-column align-items-start">
              <h3 className="text-purple">Information Event</h3>
              <div className="descr">
                <p>
                  Mangafest merupakan salah satu event jejepangan terbesar di Yogyakarta yang
                  diharapkan dapat menjembatani para komikus lokal untuk unjuk kebolehan mengenalkan
                  karyanya pada masyarakat luas.
                </p>
                <p>
                  Pada tahun ini, Mangafest akan diadakan pada tanggal 29-30 Oktober 2022 di
                  Lapangan Pancasila GRHA Sabha Pramana Universitas Gadjah Mada. Tema yang diusung
                  adalah “Time Travel” dengan branding ‘KOMIRAIKU’(過去から未来へ行く) yang berarti
                  bergerak dari masa lalu menuju masa depan. Dengan branding tersebut, Mangafest
                  ingin mengajak masyarakat untuk merefleksikan kembali peristiwa-peristiwa yang
                  telah terjadi di dalam kehidupan sehingga dapat memberikan harapan untuk
                  menciptakan perubahan baik pada diri sendiri maupun lingkungan sekitar.
                </p>
              </div>
              <button className="btn-clear ms-auto">
                <span className="text-purple">Show More</span>
                <img src="/icons/arrow-bottom-outline-purple.svg" />
              </button>
            </div>
          </div>
          {/* sidebar */}
          <div className="col-md-3">
            {/* tickets section */}
            <section className="tickets ps-4 border-start border-2">
              <h4 className="mb-4">Tickets</h4>

              {/* tickets */}
              <div className="card-ticket mb-3">
                {/* collapse */}
                <div className="collapse-ticket py-2 px-3">
                  <div className="ticket-type d-flex flex-column">
                    <span className="fs-5 fw-bold">Presale 1 Day 1 & 2</span>
                    <span className="text-secondary">
                      <small>12 Sept - 13 Sept</small>
                    </span>
                    <span className="fs-6">Rp 25.000</span>
                  </div>
                  <button className="btn btn-purple btn-primary p-3">
                    <img src="/icons/cart-outline-white.svg" />
                  </button>
                </div>
                {/* extend */}
                {/* <div className="extend-ticket">
                  <span>Jumlah</span>
                  <div>
                    <button className="down">
                      
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="card-ticket mb-3">
                {/* collapse */}
                <div className="collapse-ticket py-2 px-3">
                  <div className="ticket-type d-flex flex-column">
                    <span className="fs-5 fw-bold">Presale 1 Day 1 & 2</span>
                    <span className="text-secondary">
                      <small>12 Sept - 13 Sept</small>
                    </span>
                    <span className="fs-6">Rp 25.000</span>
                  </div>
                  <button className="btn btn-purple btn-primary p-3">
                    <img src="/icons/cart-outline-white.svg" />
                  </button>
                </div>
                {/* extend */}
                {/* <div className="extend-ticket">
                  <span>Jumlah</span>
                  <div>
                    <button className="down">
                      
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="card-ticket mb-3">
                {/* collapse */}
                <div className="collapse-ticket py-2 px-3">
                  <div className="ticket-type d-flex flex-column">
                    <span className="fs-5 fw-bold">Presale 1 Day 1 & 2</span>
                    <span className="text-secondary">
                      <small>12 Sept - 13 Sept</small>
                    </span>
                    <span className="fs-6">Rp 25.000</span>
                  </div>
                  <button className="btn btn-purple btn-primary p-3">
                    <img src="/icons/cart-outline-white.svg" />
                  </button>
                </div>
                {/* extend */}
                {/* <div className="extend-ticket">
                  <span>Jumlah</span>
                  <div>
                    <button className="down">
                      
                    </button>
                  </div>
                </div> */}
              </div>

              {/* card booking */}
              <div className="card-booking d-flex align-items-center justify-content-between py-2 px-3 mt-5">
                <div className="d-flex flex-column">
                  <span className="fs-5">Total</span>
                  <span>Rp 0</span>
                </div>
                <button className="btn btn-secondary" disabled>
                  Check out
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
