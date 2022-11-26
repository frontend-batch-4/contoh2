import Head from "next/head";
import Navbar from "../../components/navbar";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      login_identity: email,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/login`, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return (
    <div className="login-page">
      <Head>
        <title>Login - Yes Plis KW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="card-login border border-2 p-4 rounded">
                <div className="text-center">
                  <h3 className="text-primary">User Login</h3>
                  <p>Silahkan memasukkan detail anda untuk melanjutkan proses login</p>
                </div>
                <hr className="my-3" />
                <div className="mb-3">
                  <label htmlFor="username">Username atau email</label>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-2">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="password">Password</label>
                    <a href="#">Forgot password?</a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <p>
                  Belum punya akun? <a href="#">Daftar disini!</a>
                </p>
                <button className="btn btn-primary w-100" onClick={() => handleLogin()}>
                  Login
                </button>
                <hr className="my-3" />
                <button className="btn btn-outline-primary w-100">
                  <i className="fa fa-vr-cardboard fs-6 me-3"></i>Login dengan Gmail
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
