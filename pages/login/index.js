import Head from "next/head";
import Navbar from "../../components/navbar";
import { useState } from "react";
import Swal from "sweetalert2";
import * as loading from "/methods/loading";
import validator from "validator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // validate input
    if (email === "") {
      return Swal.fire({
        icon: "warning",
        title: "Email belum di isi",
      });
    } else if (!validator.isEmail(email)) {
      return Swal.fire({
        icon: "warning",
        title: "Email tidak benar",
      });
    } else if (password === "") {
      return Swal.fire({
        icon: "warning",
        title: "Password belum di isi",
      });
    }

    loading.show();

    const data = {
      login_identity: email,
      password: password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/login`, options)
      .then((response) => response.json())
      .then((response) => {
        if ((response.status === 0) | (response.status === 200)) {
          document.cookie = `jwt=${response.authToken}`;
          window.location.href = "/";
        } else {
          loading.hide();
          Swal.fire({
            icon: "error",
            title: "Login gagal",
            text: "email atau password anda salah!",
          });
        }
      })
      .catch((err) => {
        // di catch tidak menerima error (bug)
        loading.hide();
        Swal.fire({
          icon: "error",
          title: "Login gagal",
          text: "email atau password anda salah!",
        });

        // debug
        console.error(err);
      });
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
                    placeholder="Masukkan email atau username..."
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
                    placeholder="Masukkan password..."
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <p>
                  Belum punya akun? <a href="/register">Daftar disini!</a>
                </p>
                <button className="btn btn-primary w-100" onClick={() => handleLogin()}>
                  Login
                </button>
                {/* <hr className="my-3" />
                <button className="btn btn-outline-primary w-100">
                  <i className="fa fa-vr-cardboard fs-6 me-3"></i>Login dengan Gmail
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
