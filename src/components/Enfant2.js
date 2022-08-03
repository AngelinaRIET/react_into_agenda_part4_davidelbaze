import { useContext } from "react";
import { MonContext } from "./../MonContext";
function Enfant2() {
  const context = useContext(MonContext);
  return <div>Enfant 2 {context.nom}</div>;
}
export default Enfant2;
