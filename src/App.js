import Enfant1 from "./components/Enfant1";
import MonContextService from "./MonContext";

function App() {
  return (
    <div>
      <MonContextService>
        <h1>Coucou</h1>
        <Enfant1 />
      </MonContextService>
    </div>
  );
}
export default App;
