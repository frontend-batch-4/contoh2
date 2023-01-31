import Head from "next/head";
import Navbar from "/components/navbar";
import { useState } from "react";

export default function ChangePassword() {
  const [oldPasswd, setOldPasswd] = useState("");
  const [passwd, setPasswd] = useState("");
  const [conPasswd, setConPasswd] = useState("");

  return (
    <div className="login-page change-password">
      <Head>
        <title>Change Password - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="card-login border border-2 p-4 rounded">
                <div className="text-center">
                  <h3 className="text-primary mb-0">Ubah Password</h3>
                  <p>
                    <small>
                      Mohon verifikasi password yang lama kemudian masukkan password yang baru
                    </small>
                  </p>
                </div>
                <hr className="my-3" />
                <div className="mb-3">
                  <label htmlFor="oldPasswd">Password Lama</label>
                  <input
                    id="oldPasswd"
                    type="password"
                    className="form-control"
                    value={oldPasswd}
                    onChange={(e) => {
                      setOldPasswd(e.target.value);
                    }}
                    placeholder="Masukkan password akun yang lama..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwd">Password Baru</label>
                  <input
                    id="passwd"
                    type="password"
                    className="form-control"
                    value={passwd}
                    onChange={(e) => {
                      setPasswd(e.target.value);
                    }}
                    placeholder="Masukkan password baru..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="conPasswd">Masukkan kembali password</label>
                  <input
                    id="conPasswd"
                    type="password"
                    className="form-control"
                    value={conPasswd}
                    onChange={(e) => {
                      setConPasswd(e.target.value);
                    }}
                    placeholder="Masukkan kembali password baru anda..."
                  />
                </div>
                <button className="btn btn-primary w-100">Ganti Password</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
