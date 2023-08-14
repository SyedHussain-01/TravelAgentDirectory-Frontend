import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Post } from "./common/utilities/services/axiosbase";
import routes from "./common/utilities/apiRoutes/routes";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import { AuthService } from "./common/utilities/services/request";
function App() {

  useAutoRefresh();
  
  const signup = async () => {
    const date = new Date();
    date.setDate(27);
    date.setMonth(5);
    date.setFullYear(2001);
    const data = {
      name: "Person2",
      email: "person2@gmail.com",
      pass: "person2",
      phone: 93928573948,
      city: "Karachi",
      date_of_birth: date,
      user_type: 1,
    };
    const result = await Post(routes.signUp, data);
    console.log(result)
  };

  const signin = async () => {
    try {
      const data = {
        email: "person2@gmail.com",
        pass: "person2",
      };
      const { authorization, refresh_token } = await AuthService.signIn(data.email, data.pass)
      localStorage.setItem('access_token', authorization);
      localStorage.setItem('refresh_token', refresh_token);
    } catch (error) {
      console.log(error)
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
