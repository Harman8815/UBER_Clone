import React from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import Start from "./pages/Start.jsx";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          {/* <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} /> */}

          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
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
