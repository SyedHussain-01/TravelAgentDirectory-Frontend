import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import hasAuthToken from "./common/utilities/customHooks/hasAuthToken";
import React from "react";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import User from "./pages/User";
import Agent1 from "./pages/Agent1";
import Agent1pkg from "./pages/Agent1pkg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./pages/Loading";

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
            <>
              <Route path="/" element={<User />}></Route>
              <Route path="/User/:id" element={<Agent1 />}></Route>
              <Route
                path="/User/Agent1/Agent1pkg"
                element={<Agent1pkg />}
              ></Route>
            </>
          )}
          <Route exact path="/loading" element={<Loading/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
