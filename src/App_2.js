import "./App.css";

const MonComposant = (props) => { //props.children
  return (
    <div>
      Texte dans mon composant
      {props.children} 
      {/*La ligne du dessus joue :  <div>Test</div> */}
    </div>
  );
};
function App() {
  return (
    <div>
      <h1>Coucou</h1>
      <MonComposant>
        <div>Test</div>
      </MonComposant>
    </div>
  );
}
export default App;
