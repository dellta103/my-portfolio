import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Layout({ Component, type }) {
  return (
    <div>
      <Navbar type={type} />
      <Component />
      <Footer />
    </div>
  );
}
