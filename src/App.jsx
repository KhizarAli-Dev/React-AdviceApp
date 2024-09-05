import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{advice}</h1>
        <button
          onClick={getAdvice}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Get New Advice
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p className="mt-4 text-gray-700">
      You have read {props.count} {props.count === 1 ? "piece" : "pieces"} of
      advice.
    </p>
  );
}

export default App;
