import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/signup`,
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
    setFirstName("");
    setLastName("");
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
          className="flex flex-col gap-2 p-6 rounded-2xl w-full"
          onSubmit={submitHandler}
        >
          <h3 className="text-lg font-semibold">What's your Name?</h3>
          <div className="flex flex-row gap-2">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
            />
          </div>

          <h3 className="text-lg font-semibold">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <h3 className="text-lg font-semibold">Enter your password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-500 text-center text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center w-full">
          <p className="font-bold">Already have an account? &nbsp;</p>
          <Link to="/captain-login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>

      <div className="flex mb-3 w-full justify-center px-4 z-10 text-xs leading-tight">
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="underline font-bold">Privacy Policy</span> and{" "}
          <span className="underline font-bold">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
