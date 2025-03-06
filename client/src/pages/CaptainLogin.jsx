import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { CaptainDataContext } from "../context/CapatainContext";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container h-screen flex flex-col justify-between items-center p-2 relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-[url('https://images.unsplash.com/photo-1572239780645-203c467a49b5?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        {/* White overlay */}
        <div className="w-full h-full bg-white opacity-85"></div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-4 flex flex-col z-10">
        <div className="font-bold pl-4 pt-2 text-2xl">
          <h2>UBER</h2>
        </div>

        <form
          className="flex flex-col gap-4 p-6 rounded-2xl w-full"
          onSubmit={submitHandler}
        >
          <h3 className="text-lg font-semibold">What's your email?</h3>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-semibold">Enter your password</h3>
          <input
            type="password"
            placeholder="password"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-center text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center w-full">
          <p className="font-bold">Join our fleet? &nbsp;</p>
          <Link to="/captain-signup" className="text-blue-600 hover:underline">
            Register as a Captain
          </Link>
        </div>
      </div>

      <div className="flex mb-14 w-full justify-center px-6 z-10">
        <Link
          to="/login"
          className="bg-green-700 text-center text-white p-2 rounded-md w-full hover:bg-green-800 transition"
        >
          Sign in as a user
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
