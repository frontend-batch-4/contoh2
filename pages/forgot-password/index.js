import Head from "next/head";
import Navbar from "../../components/navbar";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="login-page forgot-password">
      <Head>
        <title>Forgot Password - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="card-login border border-2 p-4 rounded">
                <div className="text-center">
                  <h3 className="text-primary">Lupa Password</h3>
                  <p>
                    Cantumkan alamat email akun anda terlebih dahulu untuk melanjutkan verifikasi
                  </p>
                </div>
                <hr className="my-3" />
                <div className="mb-3">
                  <label htmlFor="username">Email akun</label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Masukkan email akun yang digunakan"
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={() => handleLogin()}>
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
