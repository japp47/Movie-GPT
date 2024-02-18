import React from "react";
import { error_page_img, LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="absolute  w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-48"
          src={LOGO}
          alt="header-logo"
        />
      </div>
      <div className="absolute">
        <img
          src={error_page_img}
          alt="login-bgimg"
          className="bg-gradient-to-b from-black"
        />
      </div>
      <div className="absolute w-5/12 mx-auto right-0 left-0 text-white mt-36 text-center">
        <h1 className="font-bold text-7xl my-4">Lost your way?</h1>
        <p className="font-bold text-xl my-4">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <button className="border border-gray-400 my-4 bg-white text-black p-3 rounded-lg">
          <Link to='/'>Netflix Home</Link>  
        </button>
        <p className="font-bold text-xl my-4">Error Code NSES-404</p>
      </div>
    </div>
  );
};

export default Error;