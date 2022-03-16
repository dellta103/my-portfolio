import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage flex justify-center items-center ">
      <div className="content w-2/4 h-2/3 m-10 text-white  grid grid-cols-3">
        <div className="left  lg:col-span-1 sm:col-span-3 flex flex-col justify-around  items-center">
          <img src="./img/avatar.jpg" alt="" />
          <div className="content flex-grow">
            <div className="text">
              <h2 className="text-2xl font-medium text-center">Khang Huynh</h2>
              <div className="links">
                <ul className="flex justify-center items-center space-x-10 mt-8">
                  <li>
                    <a href="https://www.facebook.com/yamashita.koike.5">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/dellta103">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/khang-huynh-5075011a6/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form
              action="https://drive.google.com/file/d/1WiuLevtLspj0zoEkemrCQn_BSH_7ISLo/view?usp=sharing"
              target="_blank"
            >
              <button className="mt-14 rounded-md" type="submit text-center">
                Download my CV
              </button>
            </form>
          </div>
        </div>
        <div className="right bg-purple-300 lg:col-span-2  sm:col-span-3 "></div>
      </div>
    </div>
  );
}
