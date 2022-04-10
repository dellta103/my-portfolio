import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar({ type }) {
  const [miniActive, setMiniActive] = useState(false);
  const handleMiniActive = () => {
    setMiniActive((prev) => !prev);
  };
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50">
      <div className="w-10/12 m-auto h-full flex justify-center items-center">
        <div className="mainnav">
          <ul className="flex space-x-14">
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "home" ? "active" : " ")
              }
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "about" ? "active" : " ")
              }
            >
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "projects" ? "active" : " ")
              }
            >
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
        <button className="ml-auto rounded-sm" onClick={handleMiniActive}>
          <i className="fa fa-bars text-black"></i>
        </button>
        <div className={"mininav " + (miniActive ? "active" : "")}>
          <ul className="flex flex-col justify-center items-center h-full w-full space-y-14">
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "home" ? "active" : " ")
              }
            >
              <NavLink onClick={handleMiniActive} to="/">
                Home
              </NavLink>
            </li>
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "about" ? "active" : " ")
              }
            >
              <NavLink onClick={handleMiniActive} to="/about">
                About
              </NavLink>
            </li>
            <li
              className={
                "text-3xl font-semibold rounded-lg " +
                (type === "projects" ? "active" : " ")
              }
            >
              <NavLink onClick={handleMiniActive} to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
