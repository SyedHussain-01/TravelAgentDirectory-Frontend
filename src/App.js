import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import hasAuthToken from "./common/utilities/customHooks/hasAuthToken";
import React from "react";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const tokenExists = hasAuthToken();
  useAutoRefresh();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!tokenExists ? (
            <>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
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
