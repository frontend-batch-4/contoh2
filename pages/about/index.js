import Head from "next/head";
import Navbar from "/components/navbar";
import { useState } from "react";

export default function About() {
  const [faq, setFaq] = useState(null);
  const toggleFaq = (question = null) => {
    if (question !== null && faq !== question) {
      setFaq(question);
    } else {
      setFaq(null);
    }
  };

  return (
    <div className="about">
      <Head>
        <title>Login - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="content">
        {/* hero section */}
        <section className="hero d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h1 className="display-1 text-white text-center fw-bold mb-5">
                  Daftarkan eventmu dengan mudah tanpa masalah
                </h1>
                <div className="d-flex justify-content-center align-items-stretch gap-3">
                  <button className="btn btn-light">Daftar Eventmu!</button>
                  <button className="btn btn-outline-light">
                    <span>Lihat Dulu</span> <img src="/icons/arrow_circle_down.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* stories section */}
        <section className="stories py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 pb-5">
                <h2 className="text-center">
                  Tentang <span>Perusahaan</span>
                </h2>
              </div>
              <div className="col-md-6">
                <img
                  src="/img/about-illustration.svg"
                  alt="about us illustration"
                  className="w-100"
                />
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor magna.
                  Fusce tincidunt sem velit, quis vestibulum risus posuere sed.
                </p>
                <p>Proin consectetur, felis a aliquet euismod, neque orci egestas diam.</p>
              </div>
              {/* achievement */}
              <div className="col-12 mt-5">
                <div className="card">
                  <div className="row py-4">
                    <div className="col-md-4 d-flex gap-4 justify-content-center">
                      <img className="icon-achievement" src="/icons/stadium.svg" />
                      <div>
                        <p className="mb-0 fs-5 fw-bold">123</p>
                        <p className="mb-0">Event Held</p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex gap-4 justify-content-center border-start border-end">
                      <img className="icon-achievement" src="/icons/task_alt.svg" />
                      <div>
                        <p className="mb-0 fs-5 fw-bold">10.000</p>
                        <p className="mb-0">Tickets Sold</p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex gap-4 justify-content-center">
                      <img className="icon-achievement" src="/icons/handshake.svg" />
                      <div>
                        <p className="mb-0 fs-5 fw-bold">12</p>
                        <p className="mb-0">Official Partners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* fitures section */}
        <section className="fitures">
          <div className="container py-5">
            <div className="row">
              <div className="col-12">
                <h3 className="text-center fs-1 mb-5">
                  Gelar eventmu dan jual merchandise secara bersamaan
                </h3>
              </div>
              <div className="col-3">
                <div className="card-fitures">
                  <img src="/img/daftar-event.jpg" alt="daftarkan event" />
                  <p className="desc-card p-3 text-white fs-4 mb-0">Daftarkan eventmu</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card-fitures">
                  <img src="/img/merch.jpg" alt="jual merch" />
                  <p className="desc-card p-3 text-white fs-4 mb-0">Jual merchmu</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card-fitures">
                  <img src="/img/ticket.jpg" alt="promosikan tiket" />
                  <p className="desc-card p-3 text-white fs-4 mb-0">Promosikan tiket</p>
                </div>
              </div>
              <div className="col-3">
                <div className="card-fitures">
                  <img src="/img/fun.jpg" alt="meriahkan acara" />
                  <p className="desc-card p-3 text-white fs-4 mb-0">Meriahkan acara</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* faq section */}
        <section className="faq py-5">
          <div className="container">
            <h3 className="fs-1 text-center mb-5">FAQ</h3>
            <div className="wrap-question mb-3">
              <div
                className="question d-flex align-items-center justify-content-between p-3"
                onClick={() => toggleFaq("question1")}
              >
                <p className="mb-0 fs-5">Bagaimana caranya saya dapat mendaftarkan event saya?</p>
                <button className="btn-clear">
                  <img
                    src="/icons/exit-solid-purple.svg"
                    className={`icon ${faq == "question1" ? "d-block" : "d-none"}`}
                  />
                  <img
                    src="/icons/plus-outline-purple.svg"
                    className={`icon ${faq == "question1" ? "d-none" : "d-block"}`}
                  />
                </button>
              </div>
              <div className={`answer py-3 px-4 ${faq == "question1" ? "d-block" : "d-none"}`}>
                <p className="mb-0 text-secondary ">
                  Anda dapat mendaftarkan event yang anda selenggarakan dengan menghubungi email
                  CompanyName@gmail.com. Tim kami akan segera mungkin untuk menghubungi anda kembali
                  untuk diberikan akun khusus sebagai penyelenggara event.
                </p>
              </div>
            </div>
            <div className="wrap-question mb-3">
              <div
                className="question d-flex align-items-center justify-content-between p-3"
                onClick={() => toggleFaq("question2")}
              >
                <p className="mb-0 fs-5">Bagaimana caranya saya dapat mendaftarkan event saya?</p>
                <button className="btn-clear">
                  <img
                    src="/icons/exit-solid-purple.svg"
                    className={`icon ${faq == "question2" ? "d-block" : "d-none"}`}
                  />
                  <img
                    src="/icons/plus-outline-purple.svg"
                    className={`icon ${faq == "question2" ? "d-none" : "d-block"}`}
                  />
                </button>
              </div>
              <div className={`answer py-3 px-4 ${faq == "question2" ? "d-block" : "d-none"}`}>
                <p className="mb-0 text-secondary ">
                  Anda dapat mendaftarkan event yang anda selenggarakan dengan menghubungi email
                  CompanyName@gmail.com. Tim kami akan segera mungkin untuk menghubungi anda kembali
                  untuk diberikan akun khusus sebagai penyelenggara event.
                </p>
              </div>
            </div>
            <div className="wrap-question mb-3">
              <div
                className="question d-flex align-items-center justify-content-between p-3"
                onClick={() => toggleFaq("question3")}
              >
                <p className="mb-0 fs-5">Bagaimana caranya saya dapat mendaftarkan event saya?</p>
                <button className="btn-clear">
                  <img
                    src="/icons/exit-solid-purple.svg"
                    className={`icon ${faq == "question3" ? "d-block" : "d-none"}`}
                  />
                  <img
                    src="/icons/plus-outline-purple.svg"
                    className={`icon ${faq == "question3" ? "d-none" : "d-block"}`}
                  />
                </button>
              </div>
              <div className={`answer py-3 px-4 ${faq == "question3" ? "d-block" : "d-none"}`}>
                <p className="mb-0 text-secondary ">
                  Anda dapat mendaftarkan event yang anda selenggarakan dengan menghubungi email
                  CompanyName@gmail.com. Tim kami akan segera mungkin untuk menghubungi anda kembali
                  untuk diberikan akun khusus sebagai penyelenggara event.
                </p>
              </div>
            </div>
            <div className="wrap-question mb-3">
              <div
                className="question d-flex align-items-center justify-content-between p-3"
                onClick={() => toggleFaq("question4")}
              >
                <p className="mb-0 fs-5">Bagaimana caranya saya dapat mendaftarkan event saya?</p>
                <button className="btn-clear">
                  <img
                    src="/icons/exit-solid-purple.svg"
                    className={`icon ${faq == "question4" ? "d-block" : "d-none"}`}
                  />
                  <img
                    src="/icons/plus-outline-purple.svg"
                    className={`icon ${faq == "question4" ? "d-none" : "d-block"}`}
                  />
                </button>
              </div>
              <div className={`answer py-3 px-4 ${faq == "question4" ? "d-block" : "d-none"}`}>
                <p className="mb-0 text-secondary ">
                  Anda dapat mendaftarkan event yang anda selenggarakan dengan menghubungi email
                  CompanyName@gmail.com. Tim kami akan segera mungkin untuk menghubungi anda kembali
                  untuk diberikan akun khusus sebagai penyelenggara event.
                </p>
              </div>
            </div>
            <div className="wrap-question mb-3">
              <div
                className="question d-flex align-items-center justify-content-between p-3"
                onClick={() => toggleFaq("question5")}
              >
                <p className="mb-0 fs-5">Bagaimana caranya saya dapat mendaftarkan event saya?</p>
                <button className="btn-clear">
                  <img
                    src="/icons/exit-solid-purple.svg"
                    className={`icon ${faq == "question5" ? "d-block" : "d-none"}`}
                  />
                  <img
                    src="/icons/plus-outline-purple.svg"
                    className={`icon ${faq == "question5" ? "d-none" : "d-block"}`}
                  />
                </button>
              </div>
              <div className={`answer py-3 px-4 ${faq == "question5" ? "d-block" : "d-none"}`}>
                <p className="mb-0 text-secondary ">
                  Anda dapat mendaftarkan event yang anda selenggarakan dengan menghubungi email
                  CompanyName@gmail.com. Tim kami akan segera mungkin untuk menghubungi anda kembali
                  untuk diberikan akun khusus sebagai penyelenggara event.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
