import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-[url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex flex-col justify-between">
      <div className="font-bold pl-4 pt-2 text-2xl">
        <h2>UBER</h2>
      </div>
      <div className="bg-white flex flex-col justify-center  h-40 p-4 ">
        <h3 className="text-2xl font-bold pb-6">Get Started with Uber</h3>
        <div className="bg-black text-white w-full  font-bold text-center rounded-md relative">
          <Link to='/login' className="tracking-widest w-full  inline-block p-3">Continue</Link>
          <FaArrowRight className="absolute top-4 right-4" />
        </div>
      </div>
    </div>
  );
};

export default Start;
