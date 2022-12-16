import React from "react";

const Hero = () => {
  return (
    <div className="p-5 main" id="hero">
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="hero__img col-10 col-sm-8 col-lg-6 mx-auto">
          <img src="images/IMG20201004172258.jpg" className="img-fluid ms-5 md:w-50 rounded-5" style={{ width: "25rem" }} alt="Hero Image" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Naufal Asyraf Idrisa</h1>
          <p className="lead text-white">I'am also a front-end Web Developer, bringing products to life.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="#project" type="button" className="btn btn-lg px-4 me-md-2 text-white hero__btn">
              See My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
