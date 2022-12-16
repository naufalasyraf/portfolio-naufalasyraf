import React from "react";

const Education = () => {
  return (
    <div className="py-5 text-center" id="education">
      <div className="container ">
        <h2 className="text-center">Pendidikan</h2>
        <p className="container border-3 border-bottom border-danger w-25 rounded mb-5"></p>
        <div className="card">
          <div className="row">
            <div className="col-md-3 text-white" style={{ backgroundColor: "#020e35" }}>
              <div className="card-body">
                <p>2008 - 2014</p>
                <div className="h5">Sekolah Dasar</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col mt-5">
                <div className="card-body">
                  <p className="">SD Negeri 07 Talawi Hilie, Sawahlunto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 text-white" style={{ backgroundColor: "#020e35" }}>
              <div className="card-body">
                <p>2014 - 2017</p>
                <div className="h5">Sekolah Menengah Pertama</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col mt-5">
                <div className="card-body">
                  <p className="">SMP Negeri 3 Sawahlunto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 text-white" style={{ backgroundColor: "#020e35" }}>
              <div className="card-body">
                <p>2017 - 2020</p>
                <div className="h5">Sekolah Menengah Atas</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col mt-5">
                <div className="card-body">
                  <p className="">SMA Negeri 2 Sawahlunto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-3 text-white" style={{ backgroundColor: "#020e35" }}>
              <div className="card-body">
                <p>2020 - Sekarang</p>
                <div className="h5">Perguruan Tinggi</div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col mt-4">
                <div className="card-body">
                  <p className="">Politeknik Negeri Padang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
