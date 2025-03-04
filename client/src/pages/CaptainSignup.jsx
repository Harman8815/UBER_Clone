import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
        <div className="font-bold pb-2 pl-4  text-3xl">
          <h2>UBER</h2>
        </div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="overflow-hidden flex flex-col p-6 "
        >
          <h3 className="text-lg w-full  font-medium mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-2 ">
            <input
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-2">
            <input
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-4 mb-2">
            <input
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 bg-white/50 focus:ring-blue-500"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="p-2 w-1/2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled className="text-sm ">
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-blue-500 text-center text-white py-2 rounded-md hover:bg-blue-600 transition">
            Create Captain Account
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
