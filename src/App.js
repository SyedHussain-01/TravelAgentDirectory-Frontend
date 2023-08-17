// import logo from "./logo.svg";
import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import hasAuthToken from "./common/utilities/customHooks/hasAuthToken";
import { signin, signup } from "./functions/authorization";
import React,{ useState, useEffect } from "react";
import Login from "./Login";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";

function App() {

  const tokenExists = hasAuthToken();
  useAutoRefresh();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!tokenExists ? (
            <>
              <Route exact path="/" element={<Login />}></Route>
              <Route path="/signup" element={<Signin />}></Route>
            </>
          ) : (
            <Route exact path="/" element={<Home />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
