import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import hasAuthToken from "./common/utilities/customHooks/hasAuthToken";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import User from "./pages/User";
import Agent1 from "./pages/Agent1";
import Agent1pkg from "./pages/Agent1pkg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./pages/Loading";
import { Dashboard } from "./pages/Dashboard";

function App() {
  const tokenExists = hasAuthToken();
  useAutoRefresh();

  const user_type = localStorage.getItem("user_type");

  const [localStorageChange, setLocalStorageChange] = useState(0);

  useEffect(() => {
    // Add an event listener to the 'storage' event to detect changes in localStorage
    const handleStorageChange = () => {
      // Increment the state variable to trigger a re-render
      setLocalStorageChange((prevChange) => prevChange + 1);
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
              {user_type == 0 ? (
                <>
                  <Route
                    path="/"
                    element={<Dashboard />}
                  ></Route>
                  <Route path="/Dashboard/Add" element={<Dashboard />}></Route>
                  <Route
                    path="/Dashboard/Profile"
                    element={<Dashboard />}
                  ></Route>
                  <Route
                    path="/Dashboard/Packages"
                    element={<Dashboard />}
                  ></Route>
                </>
              ) : (
                <>
                  <Route path="/" element={<User />}></Route>
                  <Route path="/User/:id" element={<Agent1 />}></Route>
                  <Route
                    path="/User/:id/:packageid"
                    element={<Agent1pkg />}
                  ></Route>
                </>
              )}
            </>
          )}
          <Route exact path="/loading" element={<Loading />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
