import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUserData(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container h-screen flex flex-col justify-between items-center p-2 relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-[url('https://images.unsplash.com/photo-1530652499474-9da0f91d6753?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
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
          <p className="font-bold">New here? &nbsp;</p>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create a new Account
          </Link>
        </div>
      </div>

      <div className="flex mb-14 w-full justify-center px-6 z-10">
        <Link
          to="/captain-login"
          className="bg-green-700 text-white p-2 rounded-md w-full hover:bg-green-800 transition text-center"
        >
          Sign in as a captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
