import Link from "next/link";
import { useEffect, useState } from "react";
import * as fetch from "/methods/fetch";

import NavbarSigned from "./navbar-signed";

export default function Navbar() {
  useEffect(() => {
    // check authentification
    const jwt = getCookie("jwt");
    checkLogged(jwt);
  }, []);

  const [isLogged, setIsLogged] = useState(false);
  // const [jwt, setJwt] = useState("");

  const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const checkLogged = (jwt) => {
    if (jwt !== "") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  if (!isLogged) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-2">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4 text-primary" href="/">
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
            <div className="searchbar border border-2 w-100 rounded mb-2 mt-3 mt-lg-0 mb-lg-0">
              <input type="search" className="w-100" placeholder="Cari event disini..." />
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
  } else {
    return <NavbarSigned />;
  }
}
