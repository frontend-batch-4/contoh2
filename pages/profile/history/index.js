import Head from "next/head";
import Navbar from "/components/navbar";

export default function History() {
  return (
    <div className="history-profile">
      <Head>
        <title>History - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="container py-5">
          {/* title bar */}
          <div className="row titlebar mb-3">
            <div className="col-md-8">
              <h1 className="mb-0">
                Riwayat <span className="text-purple">Transaksi</span>
              </h1>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              {/* search history ticket */}
              <div className="searchbar border border-2 w-100 rounded">
                <input type="search" className="w-100" placeholder="Pencarian riwayat transaksi" />
                <button className="btn-clear border-start border-2">
                  <img src="/icons/search.svg" />
                </button>
              </div>
            </div>
          </div>

          {/* tickets */}
          <div className="tickets">
            {/* hari ini */}
            <div>
              <div className="row mb-3">
                <div className="col-12">
                  <h3>Hari Ini</h3>
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
            {/* bulan lalu */}
            <div>
              <div className="row mb-3">
                <div className="col-12">
                  <h3>Bulan Lalu</h3>
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
            {/* pembelian sebelumnya */}
            <div>
              <div className="row mb-3">
                <div className="col-12">
                  <h3>Pembelian sebelumnya</h3>
                </div>
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-6">
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
        </div>
      </main>
    </div>
  );
}
