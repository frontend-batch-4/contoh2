export default function Footer() {
  return (
    <div className="footer ">
      <div className="footer-top border-top border-bottom border-2">
        <div className="container ">
          <div className="row py-5">
            <div className="col-md-3 pe-5">
              <a href="">
                <div className="social d-flex align-items-center gap-4 mb-2">
                  <div className="box-social bg-primary rounded">
                    <i className="fa-brands fa-instagram fs-4"></i>
                  </div>
                  <p className="mb-0 fs-5">Instagram</p>
                </div>
              </a>
              <a href="">
                <div className="social d-flex align-items-center gap-4 mb-2">
                  <div className="box-social bg-primary rounded">
                    <i className="fa-brands fa-twitter fs-4"></i>
                  </div>
                  <p className="mb-0 fs-5">Twitter</p>
                </div>
              </a>
              <a href="">
                <div className="social d-flex align-items-center gap-4 mb-2">
                  <div className="box-social bg-primary rounded">
                    <i className="fa fa-envelope fs-4"></i>
                  </div>
                  <p className="mb-0 fs-5">Email</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 border-end border-start border-2 px-5 text-center">
              <h2 className="mb-3">Promosikan acaramu dan jual tiketmu dengan mudah</h2>
              <h2>
                Hubungi kami{" "}
                <a href="#" className="text-primary">
                  disini!
                </a>
              </h2>
            </div>
            <div className="col-md-3 ps-5 d-flex flex-column justify-content-between">
              <a href="#" className="text-reset text-decoration-none fs-5 mb-0">
                Home
              </a>
              <a href="#" className="text-reset text-decoration-none fs-5 mb-0">
                Event
              </a>
              <a href="#" className="text-reset text-decoration-none fs-5 mb-0">
                About Us
              </a>
              <a href="#" className="text-reset text-decoration-none fs-5 mb-0">
                FAQ & Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-center py-3 mb-0">CompanyName © 2022. All Rights Reserved</p>
      </div>
    </div>
  );
}
