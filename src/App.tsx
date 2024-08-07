import { useState } from "react";
import "./App.css";
import UseStatesBasics from "./components/UseStatesBasics";
import { People, person } from "./components/utils/data";
import StatesWIthMap from "./components/StatesWIthMap";
import { LoopRenderComponent } from "./components/LoopRenderComponent";
import StateLift from "./components/StateLift";
import ComplementStateLift from "./components/ComplementStateLift";

function App() {
  const [pessoas] = useState<Array<People>>(person);
  const [message, setMessage] = useState<string>("");

  const handleChangeMessage = (msg: string) => {
    setMessage(msg);
  };

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
      <StateLift msg={message} />{" "}
      {/*Responsavel por renderizar a menssagem do state message */}
      <ComplementStateLift handleChangeMessage={handleChangeMessage} />{" "}
      {/*Chamando o componente ComplementStateLift e passando a função handleChangeMessage que é responsavel por Fazer a alteração de estado do state message */}
    </>
  );
}

export default App;
