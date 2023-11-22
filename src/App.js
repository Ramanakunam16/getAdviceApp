// import logo from './logo.svg';
// import { get } from "prompt";
import "./App.css";
import { useEffect, useState } from "react";
import logo from "./logo.png";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(
    function () {
      getAdvice();
    },

    []
  );

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => {
      c++;
      return c;
    });
  }
  return (
    <div>
      <Logo />
      <h1>
        hello welcome to MYapp .<br />
        Get advice by clicking below button
      </h1>

      <h2>Your Advice:</h2>

      <h4 className="advice">{advice}</h4>

      <button onClick={getAdvice}>getAdvice</button>

      <h2>you have read {count} advices by now.</h2>
    </div>
  );
}

function Logo() {
  return <img className="logo" src={logo} alt="logo" />;
}

export default App;
