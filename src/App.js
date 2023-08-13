import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'
function App() {
  const refreshtoken = async () => {
    const data = {
      refresh_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODgxMjM3NDMsImV4cCI6MTY4ODcyODU0M30.ykR8xB_wQM1zabkGCCv_CjIdfgWjbqOTWRCNqiraZ60",
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/refresh-token",
        { refresh_token: data.refresh_token },
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

  const signup = async () => {
    const date = new Date()
    date.setDate(27)
    date.setMonth(5)
    date.setFullYear(2001)
    const data = {
      name: "Person5",
      email: "person5@gmail.com",
      pass: "personal5",
      phone: 93928573948,
      city: "Karachi",
      date_of_birth: date,
      user_type:0
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signup}>sign up</button>
        <button onClick={signin}>sign in</button>
        <button onClick={refreshtoken}>refresh</button>
      </header>
    </div>
  );
}

export default App;
