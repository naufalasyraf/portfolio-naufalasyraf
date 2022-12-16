import React from "react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
// import swiper modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Project = () => {
  return (
    <div class="py-5 project" id="project">
      <div class="swiper w-100 py-5">
        <h2 class="text-center">Project Saya</h2>
        <p class="container border-3 border-bottom border-danger w-25 rounded mb-5"></p>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper mt-10">
          <SwiperSlide className="w-50">
            <div class="card rounded-5 border-0 swiper-slide">
              <div class="card__image-content d-flex flex-column align-items-center p-4">
                <span class="image-content__overlayFrst position-absolute start-0 top-0 w-100 h-100"></span>
                <div class="image-content__image position-relative rounded">
                  <img src="images/Screenshot 2022-12-06 165010.jpg" alt="Si Hotel" class="card-img" loading="lazy" />
                </div>
              </div>
              <div class="card__body-content d-flex flex-column align-items-center p-4">
                <h2 class="fs-5 fw-semibold text-dark">SI-Hotel</h2>
                <p class="text-secondary text-center">Project ini dibuat menggunakan bahasa pemograman php dan mariaDB sebagai databasenya.</p>
                <a href="https://github.com/naufalasyraf/reservasi-hotel" class="btn body-content__button border-0 text-white.">
                  See
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <div class="card rounded-5 border-0 swiper-slide">
              <div class="card__image-content d-flex flex-column align-items-center p-4">
                <span class="image-content__overlayScnd position-absolute start-0 top-0 w-100 h-100"></span>
                <div class="image-content__image position-relative rounded">
                  <img src="images/Screenshot 2022-12-15 151156.jpg" alt="Oddo Smartphone" class="card-img" loading="lazy" />
                </div>
              </div>
              <div class="card__body-content d-flex flex-column align-items-center p-4">
                <h2 class="fs-5 fw-semibold text-dark">Oddo Smartphone</h2>
                <p class="text-secondary text-center courseText">Ini merupakan website yang dibuat hanya berupa landing page html biasa dan css untuk latihan</p>
                <a href="https://github.com/naufalasyraf/final-project-2" class="btn body-content__button border-0 text-white.">
                  See
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <div class="card rounded-5 border-0 swiper-slide">
              <div class="card__image-content d-flex flex-column align-items-center p-4">
                <span class="image-content__overlayFrst position-absolute start-0 top-0 w-100 h-100"></span>
                <div class="image-content__image position-relative rounded">
                  <img src="images/Screenshot 2022-12-15 152203.jpg" alt="SI Masjid" class="card-img" loading="lazy" />
                </div>
              </div>
              <div class="card__body-content d-flex flex-column align-items-center p-4">
                <h2 class="fs-5 fw-semibold text-dark">SI Masjid</h2>
                <p class="text-secondary text-center courseText">Project ini dibuat dengan menggunakan php framework laravel dan mariaDB database.</p>
                <a href="https://github.com/naufalasyraf/laravel-masjid" class="btn body-content__button border-0 text-white.">
                  See
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <div class="card rounded-5 border-0 swiper-slide">
              <div class="card__image-content d-flex flex-column align-items-center p-4">
                <span class="image-content__overlayFrst position-absolute start-0 top-0 w-100 h-100"></span>
                <div class="image-content__image position-relative rounded">
                  <img src="images/Screenshot 2022-12-15 153123.jpg" alt="Si Hotel" class="card-img" loading="lazy" />
                </div>
              </div>
              <div class="card__body-content d-flex flex-column align-items-center p-4">
                <h2 class="fs-5 fw-semibold text-dark">Car Rental</h2>
                <p class="text-secondary text-center">Website ini dibuat dengan html dan css biasa untuk
                  memenuhi tugas dari program kampus merdeka</p>
                <a href="https://github.com/naufalasyraf/FinalProject1-NaufalAsyrafIdrisa" class="btn body-content__button border-0 text-white.">
                  See
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <div class="card rounded-5 border-0 swiper-slide">
              <div class="card__image-content d-flex flex-column align-items-center p-4">
                <span class="image-content__overlayFrst position-absolute start-0 top-0 w-100 h-100"></span>
                <div class="image-content__image position-relative rounded">
                  <img src="images/Screenshot 2022-12-15 161652.jpg" alt="Si Hotel" class="card-img" loading="lazy" />
                </div>
              </div>
              <div class="card__body-content d-flex flex-column align-items-center p-4">
                <h2 class="fs-5 fw-semibold text-dark">Weather</h2>
                <p class="text-secondary text-center">Merupakan website tracking cuaca dengan api
                  openwaether.org javascript</p>
                <a href="https://github.com/naufalasyraf/final-project-4" class="btn body-content__button border-0 text-white.">
                  See
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
