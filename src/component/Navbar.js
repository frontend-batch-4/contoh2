import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img src="./assets/img/logo.png" alt="logo" />
        </Link>
        {/* trigger hidden menu */}
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
          <form className="d-flex ms-md-5 mb-sm-0 mb-2 input-group w-auto">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="ms-auto d-flex align-items-center gap-2">
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
