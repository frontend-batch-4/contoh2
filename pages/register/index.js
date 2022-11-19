import Navbar from "../../components/navbar";

export default function Register() {
  return (
    <div className="register-page">
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
                <hr className="my-3" />
                <form>
                  <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fullname">Full Name</label>
                    <input id="fullname" type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Your email</label>
                    <input id="email" type="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPass">Re-enter your password</label>
                    <input id="confirmPass" type="password" className="form-control" />
                  </div>
                  <button className="btn btn-primary w-100">Daftar</button>
                  <hr className="my-3" />
                  <button className="btn btn-outline-primary w-100">
                    <i class="fa fa-vr-cardboard fs-6 me-3"></i>Daftar dengan Gmail
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
