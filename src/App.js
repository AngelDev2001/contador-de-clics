import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Contador } from "./components/Contador";
import freeCodeCampLogo from "./images/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  // const handleEvent = () => {
  // }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <Contador numClics={count} />
      <div className="contenedor-principal">
        <Button
          text="Clic"
          isButtonOfClic={true}
          handleEvent={() => setCount(count + 1)}
        />
        <Button
          text="Reiniciar"
          isButtonOfClic={false}
          handleEvent={() => setCount(0)}
        />
      </div>
    </div>
  );
}

export default App;
