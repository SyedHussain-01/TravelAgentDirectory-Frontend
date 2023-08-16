import logo from "./logo.svg";
import "./App.css";
import useAutoRefresh from "./common/utilities/customHooks/useAutoRefresh";
import { signin, signup } from "./functions/authorization";

function App() {

  useAutoRefresh();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signup}>sign up</button>
        <button onClick={signin}>sign in</button>
      </header>
    </div>
  );
}

export default App;
