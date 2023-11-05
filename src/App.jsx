import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState({});

  useState(() => {
    async function getAdvice() {
      const { data } = await axios.get(`https://api.adviceslip.com/advice/117`);
      setAdvice(data.slip);
    }

    getAdvice();
  }, []);

  return (
    <>
      <main className="advice-box">
        <h1 className="sr-only">Advice generator app</h1>
        <h2 className="advice-box__id">ADVICE #{advice.id}</h2>
        <p className="advice-box__text">“{advice.advice}”</p>
        <img className="advice-box__divider" src="" alt="divider" />
        <div
          onClick={async () => {
            const { data } = await axios.get(
              `https://api.adviceslip.com/advice?cb=${Date.now()}`
            );
            setAdvice(data.slip);
          }}
          className="advice-box__dice-container"
        >
          <img
            className="advice-box__dice"
            src="./assets/icon-dice.svg"
            alt="dice"
          />
        </div>
      </main>
    </>
  );
}

export default App;
