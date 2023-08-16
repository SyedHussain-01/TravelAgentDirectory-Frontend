// import logo from "./logo.svg";
import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import { signin, signup } from "./functions/authorization";
import axios from "axios";
import Login from "./Login";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const signup = async () => {
    const date = new Date();
    date.setDate(27);
    date.setMonth(5);
    date.setFullYear(2001);
    const data = {
      name: "Person5",
      email: "person5@gmail.com",
      pass: "personal5",
      phone: 93928573948,
      city: "Karachi",
      date_of_birth: date,
      user_type: 0,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/sign-up",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Response data:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const signin = async () => {
    const data = {
      email: "person5@gmail.com",
      pass: "personal5",
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/sign-in",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Response data:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useAutoRefresh();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
