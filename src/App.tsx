import { useState } from "react";
import "./App.css";
import UseStatesBasics from "./components/UseStatesBasics";
import { People, person } from "./components/utils/data";
import StatesWIthMap from "./components/StatesWIthMap";
import LoopRenderComponent from "./components/LoopRenderComponent";

function App() {
  const [pessoas] = useState<Array<People>>(person);
  return (
    <>
      <h1>Utilizando os Hooks</h1>
      <UseStatesBasics /> {/*Chamando o componente UseStatesBasics*/}
      <StatesWIthMap pessoas={pessoas} />{" "}
      {/*passando o array pessoas como props*/}
      {pessoas.map((pessoa, index) => (
        <LoopRenderComponent
          key={index}
          name={pessoa.name}
          age={pessoa.age}
          profession={pessoa.profession}
          isAdult={pessoa.isAdult}
        />
      ))}{" "}
      {/*Iterando o component LoopRenderComponent sobre o array pessoas e passando os valores como props */}
    </>
  );
}

export default App;
