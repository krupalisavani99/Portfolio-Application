import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="text-4xl">
          &#9825;
          {/* <a href="/">KS</a> */}
        </div>
        <Link to="/">Krupali Savani</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
