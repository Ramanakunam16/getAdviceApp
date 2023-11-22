// import logo from './logo.svg';
// import { get } from "prompt";
import "./App.css";
import { useEffect, useState } from "react";
import logo from "./logo.png";
import {
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";

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
  function Welcome() {
    return (
      <>
        {" "}
        <h1>hello welcome to getAdvice app.</h1>
        <p>
          {" "}
          Get random advices by clicking below button.
          <br />
          You can share an advice in <strong>twitter and whatsapp</strong>
        </p>
      </>
    );
  }
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
      <Welcome />

      <h3>Your Advice:</h3>

      <h4 className="advice">{advice}</h4>

      <div className="share">
        <h4> Share on:</h4>
        <TwitterShareButton
          url={advice + "#getAdvice"}
          quote={"hello"}
          hashtag="#getAdvice"
        >
          <TwitterIcon className="twitterIcon" size={30} round />
        </TwitterShareButton>
        <WhatsappShareButton url={advice}>
          <WhatsappIcon className="whatsappIcon" size={30} round />
        </WhatsappShareButton>
      </div>

      <button onClick={getAdvice}>getAdvice</button>

      <h3 className="count">you have read {count} advices by now.</h3>
    </div>
  );
}

function Logo() {
  return <img className="logo" src={logo} alt="logo" />;
}

export default App;
