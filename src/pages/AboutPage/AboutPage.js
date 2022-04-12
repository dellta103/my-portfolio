import React from "react";
import "./AboutPage.scss";
export default function AboutPage() {
  return (
    <div className="about p-5">
      <div className="w-8/12 m-auto">
        <h1 className="text-center font-bold text-5xl mb-5">ABOUT ME</h1>
        <div className="content  grid grid-cols-2">
          <div className="left lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2">
            <p className="text-md font-medium">
              Hello, I am{" "}
              <div className="inline  bg-gray-700 rounded-lg">
                <span className="">Khang Huynh</span>
              </div>
            </p>
            <p className="mt-3 mb-3 border-b-2">
              I'm from Ho Chi Minh City, Vietnam
            </p>
            <p>Highly adaptable, always up to new challenges...</p>
          </div>
          <div className="right lg:col-span-1 md:col-span-2 sm:col-span-2 xs:col-span-2 lg:pl-5">
            <h2 className="text-center mb-3 text-3xl font-semibold md:mt-5 sm:mt-5 ">
              Qualification
            </h2>
            <p className="text-2xl font-medium">
              <i className="fa fa-graduation-cap"></i> Educations
            </p>
            <ul className="mt-3 space-y-5">
              <li className="space-y-2 border p-3 rounded-xl">
                <p>11/2021-4/2022</p>
                <p className="text-xl font-medium">Cybersoft Academy</p>
                <p>Front-end development course</p>
              </li>
              <li className="space-y-2 border p-3 rounded-xl">
                <p>11/2021-4/2022</p>
                <p className="text-xl font-medium">Fullstack.edu.vn</p>
                <p>Front-end development online course</p>
              </li>
              <li className="space-y-2 border p-3 rounded-xl">
                <p>4/2019-4/2021</p>
                <p className="text-xl font-medium">
                  Nishinihon International Education Institute
                </p>
                <p>Japanese Language Course (N2 level)</p>
              </li>
            </ul>
          </div>
          <div className="bottom lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-2 md:mt-5 sm:mt-5 xs:mt-5">
            <p className=" mb-3 text-3xl font-semibold md:mt-5 sm:mt-5 ">
              My skills:
            </p>
            <ul className="space-y-3">
              <li>
                <i className=" text-2xl font-medium fab fa-html5"></i>{" "}
                <span>HTML5</span>
              </li>
              <li>
                <i className=" text-2xl font-medium fab fa-css3"></i>{" "}
                <span>CSS3</span>
              </li>
              <li>
                <i className=" text-2xl font-medium fab fa-js"></i>{" "}
                <span>Javascript</span>
              </li>
              <li>
                <i className=" text-2xl font-medium fab fa-react"></i>{" "}
                <span>ReactJS</span>
              </li>
              <li>
                <i className=" text-2xl font-medium fab fa-bootstrap"></i>{" "}
                <span>Bootstrap 4</span>
              </li>
              <li>
                <i className=" text-2xl font-medium fab fa-sass"></i>{" "}
                <span>Sass</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
