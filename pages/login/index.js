import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Login() {
  return (
    <div className="login-page">
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
                <form>
                  <div className="mb-3">
                    <label htmlFor="username">Username atau email</label>
                    <input id="username" type="text" className="form-control" />
                  </div>
                  <div className="mb-2">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password">Password</label>
                      <a href="#">Forgot password?</a>
                    </div>
                    <input id="password" type="password" className="form-control" />
                  </div>
                  <p>
                    Belum punya akun? <a href="#">Daftar disini!</a>
                  </p>
                  <button className="btn btn-primary w-100">Login</button>
                  <hr className="my-3" />
                  <button className="btn btn-outline-primary w-100">
                    <i class="fa fa-vr-cardboard fs-6 me-3"></i>Login dengan Gmail
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
