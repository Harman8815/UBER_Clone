import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userData, setUserData] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    console.log("submitHandler executed");
    e.preventDefault();
  
    const userData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstname, // Ensure correct variable names
        lastname: lastname,
      },
    };
  
    console.log("Sending user data:", userData);
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        userData
      );
  
      console.log("Response received:", response);
  
      if (response.status === 201) {
        const data = response.data;
        setUserData(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
  
      // Clear input fields after successful submission
      setEmail("");
      setPassword("");
      setfirstname("");
      setlastname("");
  
    } catch (error) {
      console.error("Axios Error:", error.response?.data || error.message);
    }
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
          <h2>UBER -Signup-User</h2>
        </div>

        <form
          className="flex flex-col gap-2 p-6 rounded-2xl w-full"
          onSubmit={(e) => {
            console.log("Form submitted");
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-semibold">What's your Name?</h3>
          <div className="flex flex-row gap-2">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="First Name"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
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
            Create Account
          </button>
        </form>

        <div className="flex justify-center w-full">
          <p className="font-bold">Already have an account? &nbsp;</p>
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>

      <div className="flex mb-3 w-full justify-center px-4 z-10 text-xs leading-tight">
        <p>
          By proceeding, you consent to get calls, WhatsApp, or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
