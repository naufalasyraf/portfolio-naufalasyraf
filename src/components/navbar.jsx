import React from "react";

const Navbar = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container sticky-top">
          <a className="navbar-brand" href="index.html">
            <img src="images/orang.png" alt="Orang" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler01" aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-1">
                <a className="nav-link text-dark text-uppercase" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link text-dark text-uppercase" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link text-dark text-uppercase" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link text-dark text-uppercase navbar__contact-btn rounded-3 text-center text-white" href="#project">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
