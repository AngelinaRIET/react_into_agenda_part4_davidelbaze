import "./App.css";
import { useState } from "react";
import clsx from "clsx";
function App() {
  const [state, setState] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <h1
        className={clsx("toto", {
          classe1: state,
          classe2: counter > 10,
        })}
      >
        Coucou
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
}
export default App;
