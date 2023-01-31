import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Logo
        </Link>
        {/* button menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* search history ticket */}
          <div className="searchbar border border-2 w-100 rounded my-2 mb-lg-0">
            <input type="search" className="w-100" placeholder="Pencarian riwayat transaksi" />
            <button className="btn-clear border-start border-2">
              <img src="/icons/search.svg" />
            </button>
          </div>
          <ul className="navbar-nav d-flex flex-row ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item w-100">
              <Link className="btn w-100 btn-outline-primary" href="/register">
                Daftar
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link className="btn w-100 btn-primary text-white" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
