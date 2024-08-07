import { useState } from "react";

export const UseStatesBasics = () => {
  const [count, setCount] = useState<number>(0);

  const contandoNumeros = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      useStatesBasics
      <button onClick={contandoNumeros}> Clique aqui</button>
      <p>
        O Valor do numero é: {count} usando apenas o useState, para gerenciar o
        estado do component
      </p>
    </div>
  );
};

export default UseStatesBasics;
