import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer flex justify-center items-center text-white">
      <div className="content w-10/12 text-center flex flex-col justify-center items-center space-y-4">
        <div className="text">
          <span>
            <i class="fa fa-globe"></i>
          </span>
          <p className="text-3xl font-medium">Socials</p>
        </div>
        <div className="links">
          <ul className="flex space-x-10">
            <li>
              <a href="https://www.facebook.com/yamashita.koike.5">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/dellta103">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/khang-huynh-5075011a6/">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <p>2022 - My Portfolio | Developed by Khang Huynh</p>
      </div>
    </div>
  );
}
