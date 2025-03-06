import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Start from "./pages/Start.jsx";

import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import UserLogout from "./pages/UserLogout";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";

import Riding from "./pages/Riding.jsx";

import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainRiding from "./pages/CaptainRiding.jsx";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/riding" element={<Riding />} />
          
          <Route 
            path="/home" 
            element={
              <UserProtectWrapper>
                <Home />
              </UserProtectWrapper>
            } 
          />
          <Route 
            path="/user/logout" 
            element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>
            } 
          />
          
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/captain-riding" element={<CaptainRiding />} />
          
          <Route 
            path="/captain-home" 
            element={
              <CaptainProtectWrapper>
                <CaptainHome />
              </CaptainProtectWrapper>
            } 
          />
          <Route 
            path="/captain/logout" 
            element={
              <CaptainProtectWrapper>
                <CaptainLogout />
              </CaptainProtectWrapper>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;