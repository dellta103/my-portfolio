import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import clsx from "clsx";
import styles from "./ProjectsPage.module.scss";
import "./ProjectsPage.scss";
import { useNavigate } from "react-router-dom";
export default function ProjectsPage() {
  SwiperCore.use([Navigation]);
  return (
    <div className={clsx(styles.project)}>
      <div className="w-9/12 m-auto p-5">
        <Swiper
          navigation
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop
        >
          <SwiperSlide className="slider-item">
            <div className="flex justify-center flex-col items-center space-y-10">
              <div className="border-2 border-white rounded-lg">
                <img src="./img/p1.jpg" alt="" />
              </div>
              <p className="text-4xl font-semibold">Fiverr Website</p>
              <div className="space-x-3">
                <a
                  href="https://fiverr-4a1f1.web.app/"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/dellta103/Fiverr.git"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="text-left mt-14 space-y-3">
              <p className="text-3xl font-semibold">
                <i className="fa fa-info-circle"></i> Overview
              </p>
              <p>A freelance hiring and jobs booking website.</p>
              <p>Features:</p>
              <ul>
                <li>_ Book jobs from api</li>
                <li>_ Allow user manage their profile specifically avatar</li>
                <li>_ More...</li>
              </ul>
            </div>
            <div>
              <p className="text-3xl font-semibold mt-5">
                <i className="fa fa-code"></i> Technologies used:
              </p>
              <div className="mt-3">
                <ul>
                  <li>_ HTML</li>
                  <li>_ CSS</li>
                  <li>_ JS</li>
                  <li>_ ReactJS</li>
                  <li>_ Redux Tool Kit</li>
                  <li>_ React Router</li>
                  <li>_ Rest API</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold mt-5">
                <i className="fa fa-code"></i> UI Libraries used:
              </p>
              <div className="mt-3">
                <ul>
                  <li>_ TailwindCSS</li>
                  <li>_ SwiperJS</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="flex justify-center flex-col items-center space-y-10">
              <div className="border-2 border-white rounded-lg">
                <img src="./img/p2.jpg" alt="" />
              </div>
              <p className="text-4xl font-semibold">Masterwork Landing Page</p>
              <div className="space-x-3">
                <a
                  href="https://dellta103.github.io/masterwork/"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/dellta103/masterwork.git"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="text-left mt-14 space-y-3">
              <p className="text-3xl font-semibold">
                <i className="fa fa-info-circle"></i> Overview
              </p>
              <p>A landing page.</p>
              <p>
                This website helps corporation introduce about what they provide
                customers with.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold mt-5">
                <i className="fa fa-code"></i> Technologies used:
              </p>
              <div className="mt-3">
                <ul>
                  <li>_ HTML</li>
                  <li>_ CSS</li>
                  <li>_ JS</li>
                  <li>_ Bootstrap4</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item">
            <div className="flex justify-center flex-col items-center space-y-10">
              <div className="border-2 border-white rounded-lg">
                <img src="./img/p3.jpg" alt="" />
              </div>
              <p className="text-4xl font-semibold">My Portfolio Website</p>
              <div className="space-x-3">
                <a
                  href="https://myportfolio-32062.web.app"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/dellta103/my-portfolio.git"
                  target="_blank"
                  className="cursor-pointer border-2 rounded-lg p-2 hover:bg-white hover:text-black duration-300"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="text-left mt-14 space-y-3">
              <p className="text-3xl font-semibold">
                <i className="fa fa-info-circle"></i> Overview
              </p>
              <p>A Portfolio Website.</p>
              <p>
                This website helps you know about me and what I can do to
                contribute to the company.
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold mt-5">
                <i className="fa fa-code"></i> Technologies used:
              </p>
              <div className="mt-3">
                <ul>
                  <li>_ HTML</li>
                  <li>_ CSS</li>
                  <li>_ JS</li>
                  <li>_ ReactJS</li>
                  <li>_ React Router</li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold mt-5">
                <i className="fa fa-code"></i> UI Libraries used:
              </p>
              <div className="mt-3">
                <ul>
                  <li>_ TailwindCSS</li>
                  <li>_ SwiperJS</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
