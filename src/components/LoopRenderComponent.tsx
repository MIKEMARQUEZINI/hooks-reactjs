import { People } from "./utils/data";

export const LoopRenderComponent = ({
  name,
  age,
  profession,
  isAdult,
}: People) => {
  return (
    <div>
      LoopRenderComponent
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
      <p>É adulto: {isAdult ? "Sim" : "Não"}</p>
    </div>
  );
};
