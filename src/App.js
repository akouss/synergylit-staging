import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Accordion />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
