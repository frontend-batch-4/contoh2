import Head from "next/head";
import Navbar from "../../components/navbar";
import { useState } from "react";
import Swal from "sweetalert2";
import validator from "validator";
import * as mainapi from "/methods/mainapi";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [tc_agreement, setTc_agreement] = useState(true);

  const handleRegister = () => {
    if (!email || !password || !password_confirm || !fullname || !username) {
      return false;
    }
    // VALIDATE INPUTS
    if (!validator.isEmail(email) && email != "") {
      return Swal.fire({
        icon: "warning",
        title: "Email Tidak Benar",
        text: "Silahkan memasukan email dengan benar",
      });
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        tc_agreement,
        fullname,
        username,
      }),
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/user/register`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          mainapi.login(email, password);
        }

        // ERROR HANDLING
        // invalid email
        if (response.errors.code === "USER_INVALID_EMAIL") {
          return Swal.fire({
            icon: "error",
            title: "Email Invalid",
            text: "Silahkan memasukan email lainnya dengan benar!",
          });
        }
        // invalid username
        if (response.errors.code === "USER_ALREADY_EXISTS") {
          return Swal.fire({
            icon: "error",
            title: "Username sudah terpakai",
            text: "Buat username lainnya!",
          });
        }
      })
      .catch((err) => {
        alert("testasdf");
        // console.error(err);
      });
  };
  return (
    <div className="register-page">
      <Head>
        <title>Register - Yes Plis KW</title>
      </Head>
      <Navbar />
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div className="card-login border border-2 p-4 rounded">
                <div className="text-center">
                  <h3 className="text-primary">Daftar Akun</h3>
                  <p>Silahkan masukkan detail informasi anda untuk membuat akun</p>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <hr className="my-3" />
                  <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input
                      required
                      id="username"
                      type="text"
                      className="form-control"
                      value={username}
                      placeholder="Masukkan username akun..."
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      required
                      id="fullname"
                      type="text"
                      className="form-control"
                      value={fullname}
                      placeholder="Masukkan nama lengkap anda..."
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Your email</label>
                    <input
                      required
                      id="email"
                      type="email"
                      className="form-control"
                      value={email}
                      placeholder="Masukkan email akun..."
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      id="password"
                      type="password"
                      className="form-control"
                      value={password}
                      placeholder="Masukkan password akun..."
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPass">Re-enter your password</label>
                    <input
                      required
                      id="confirmPass"
                      type="password"
                      className="form-control"
                      value={password_confirm}
                      placeholder="Masukkan kembali password akun anda..."
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                      }}
                    />
                  </div>
                  <button className="btn btn-primary w-100" onClick={() => handleRegister()}>
                    Daftar
                  </button>
                  {/* <hr className="my-3" />
                  <button className="btn btn-outline-primary w-100">
                    <i className="fa fa-vr-cardboard fs-6 me-3"></i>Daftar dengan Gmail
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
