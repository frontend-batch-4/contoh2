import Head from "next/head";
import Navbar from "/components/navbar";

export default function Profile() {
  return (
    <div className="profile">
      <Head>
        <title>Profile - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="my-5">
        <div className="container">
          <h1 className="mb-4">
            Pengaturan <span className="text-purple">Profile</span>
          </h1>

          <div className="row">
            {/* sidebar */}
            <div className="col-md-3">
              <div className="card-profile d-flex flex-column align-items-center rounded">
                <div className="banner">
                  <img src="/img/profile.jpg" alt="image profile" className="img-profile" />
                </div>
                <div className="desc px-4 py-3 text-center">
                  <p className="fs-4 mb-0">Lyrat123BeenChilling</p>
                  <p className="fs-5 mb-4 fw-light">Telah membeli 80 tiket</p>
                  <p className="fs-5 mb-0 text-secondary fw-light">12 Desember 2022</p>
                </div>
              </div>
            </div>
            {/* main bar */}
            <div className="col-md-9">
              <div className="card border-2 p-4 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="d-flex gap-1 align-items-center mb-2">
                      <span className="fs-5 fw-bold">Username</span>
                      <button className="btn-clear">
                        <img src="/icons/edit-outline-purple.svg" />
                      </button>
                    </div>
                    <p className="fs-5">Lyrat123BeenChilling</p>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="d-flex gap-1 align-items-center mb-2">
                      <span className="fs-5 fw-bold">Nama Lengkap</span>
                      <button className="btn-clear">
                        <img src="/icons/edit-outline-purple.svg" />
                      </button>
                    </div>
                    <p className="fs-5">Rafly Hersa Pratama</p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-1 align-items-center mb-2">
                      <span className="fs-5 fw-bold">Email</span>
                      <button className="btn-clear">
                        <img src="/icons/edit-outline-purple.svg" />
                      </button>
                    </div>
                    <p className="fs-5">raplekkokganteng@gmail.com</p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex gap-1 align-items-center mb-2">
                      <span className="fs-5 fw-bold">Password</span>
                      <button className="btn-clear">Ganti Password</button>
                    </div>
                    <p className="fs-5">**********</p>
                  </div>
                </div>
              </div>
              <div className="card border-2 p-4 history">
                {/* title bar */}
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <p className="mb-0 fs-5 fw-bold">History Pembelian</p>
                  <a className="text-purple" href="https://youtu.be/dQw4w9WgXcQ">
                    Lihat Riwayat
                  </a>
                </div>
                {/* content */}
                <div className="card card-event d-flex flex-row gap-3 py-2 px-3 mb-3">
                  <img
                    src="/img/event-thumbnail.jpg"
                    alt="thumbnail event"
                    className="thumbnail-event"
                  />
                  <div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 fs-5 fw-bold me-3">Mangafest 2022</p>
                      <p className="mb-0 text-secondary">29 Oktober</p>
                    </div>
                    <p className="mb-0 fs-5 fw-light">Presale 2</p>
                    <p className="mb-0 fs-5">Rp 25.000</p>
                  </div>
                </div>
                <div className="card card-event d-flex flex-row gap-3 py-2 px-3 mb-3">
                  <img
                    src="/img/event-thumbnail.jpg"
                    alt="thumbnail event"
                    className="thumbnail-event"
                  />
                  <div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 fs-5 fw-bold me-3">Mangafest 2022</p>
                      <p className="mb-0 text-secondary">29 Oktober</p>
                    </div>
                    <p className="mb-0 fs-5 fw-light">Presale 2</p>
                    <p className="mb-0 fs-5">Rp 25.000</p>
                  </div>
                </div>
                <div className="card card-event d-flex flex-row gap-3 py-2 px-3 mb-3">
                  <img
                    src="/img/event-thumbnail.jpg"
                    alt="thumbnail event"
                    className="thumbnail-event"
                  />
                  <div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 fs-5 fw-bold me-3">Mangafest 2022</p>
                      <p className="mb-0 text-secondary">29 Oktober</p>
                    </div>
                    <p className="mb-0 fs-5 fw-light">Presale 2</p>
                    <p className="mb-0 fs-5">Rp 25.000</p>
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
