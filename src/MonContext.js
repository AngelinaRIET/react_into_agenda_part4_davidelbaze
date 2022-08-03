import { useState, createContext } from "react";
export const MonContext = createContext({
  nom: "",
  age: 0,
  maFonction: () => {},
});

function MonContextService(props) {
  const [state, setState] = useState({
    nom: "Toto",
    age: 20,
    maFonction: () => {
      console.log("toto");
    },
  });
  return (
    <MonContext.Provider value={state}>{props.children}</MonContext.Provider>
  );
}
export default MonContextService;
