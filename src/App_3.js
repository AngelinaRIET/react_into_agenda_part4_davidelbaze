import { useReducer, useState } from "react";

function App() {
  const initialState = { count: 0 };
  const monReducteur = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
        break;
      case "decrement":
        return { count: state.count - 1 };
        break;

      default:
        throw new Error("Une erreur s'est produite");
        break;
    }
  };

  const [state, dispatch] = useReducer(monReducteur, initialState);
  const [state2, setState] = useState(initialState);
  return (
    <div>
      <h1>Coucou</h1>
      <div>
        {`Compteur avec useReducer : ${state.count}`}
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
      <div>
        {`Compteur avec useState : ${state2.count}`}
        <button
          onClick={() => setState({ ...state2, count: state2.count - 1 })}
        >
          Decrement (useState)
        </button>
        <button
          onClick={() => setState({ ...state2, count: state2.count + 1 })}
        >
          Increment (useState)
        </button>
      </div>
    </div>
  );
}
export default App;
