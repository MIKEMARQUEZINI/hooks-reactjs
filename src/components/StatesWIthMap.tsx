import { People } from "./utils/data";

type Props = {
  pessoas: People[]; //definindo o tipo de pessoas como um array de objetos do tipo People
};

const StatesWIthMap = ({ pessoas }: Props) => {
  return (
    <div>
      <p>Utilizando Props e map no componente: </p>
      {pessoas.map(
        (
          person,
          index //person representa cada objeto do array pessoas e index é a posição do objeto no array
        ) => (
          <p key={index}>{person.name}</p>
        )
      )}
    </div>
  );
};

export default StatesWIthMap;
