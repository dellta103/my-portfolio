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
                    <a
                      href="https://www.facebook.com/yamashita.koike.5"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/dellta103" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/khang-huynh-5075011a6/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form
              action="https://drive.google.com/file/d/1Lq39dNWYM0_JW7OQU2k33DQOODgJBnm7/view?usp=sharing"
              target="_blank"
            >
              <button className="mt-14 rounded-md" type="submit text-center">
                Download my CV
              </button>
            </form>
          </div>
        </div>
        <div className="right border border-black lg:col-span-2  sm:col-span-3 ">
          <div>
            <div className="w-full flex items-center border-b border-white h-14 p-3">
              <p className="font-bold">
                <span className="text-yellow-400">A</span>bout Me
              </p>
            </div>
            <div className="p-3 space-y-3">
              <p>Hello! My name is Khang Huynh.</p>
              <p>
                Web development fresher from Ho Chi Minh City, Vietnam. I am
                highly adaptable and always up for new challenges.
              </p>
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="mt-4 border border-white p-1 rounded-lg hover:bg-black duration-300"
              >
                More about me...
              </button>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center border-b border-t border-white h-14 p-3">
              <p className="font-bold">
                <span className="text-yellow-400">M</span>y Projects
              </p>
            </div>
            <div className="p-3 space-y-3">
              <p>
                I have built some projects during and after my front-end
                courses.
              </p>
              <ul>
                <li>_ Fiverr Website</li>
                <li>_ Masterwork Landing Page</li>
                <li>_ My Portfolio Website</li>
              </ul>
              <button
                onClick={() => {
                  navigate("/projects");
                }}
                className="mt-4 border border-white p-1 rounded-lg hover:bg-black duration-300"
              >
                More about my projects...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
