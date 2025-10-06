import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores/bears/bears.store";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Bears bearState="blackBears" increaseBearState="increaseBlackBears" />
        <Bears bearState="polarBears" increaseBearState="increasePolarBears" />
        <Bears bearState="pandaBears" increaseBearState="increasePandaBears" />
      </div>
    </>
  );
};

export const Bears = ({ bearState, increaseBearState }) => {
  const bear = useBearStore((state) => state[bearState]);
  const increaseBear = useBearStore((state) => state[increaseBearState]);

  return (
    <WhiteCard centered>
      <h2 className="py-2">{bearState}</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {bear} </span>
        <button onClick={() => increaseBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};
