import { useShallow } from "zustand/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../store/bearsStore";

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
        <BearsDisplay />
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

export const BearsDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBears = useBearStore((state) => state.clearBears);
  return (
    <WhiteCard className="flex flex-col gap-2">
      <h1>Osos</h1>
      <button onClick={doNothing}>do nothing</button>
      <button onClick={addBear}>add bear</button>
      <button onClick={clearBears}>clear bears</button>
      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};

// ---------------------------------------------------------------------------------
// -----------------MANERA LLAMANDO TODO EL STORE EN UNA CONST----------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// import { WhiteCard } from "../../components";
// import { useBearStore } from "../../store/bearsStore";

// export const BearPage = () => {
//   const {
//     blackBears,
//     polarBears,
//     pandaBears,
//     increaseBlackBears,
//     increasePolarBears,
//     increasePandaBears,
//   } = useBearStore();
//   return (
//     <>
//       <h1>Contador de Osos</h1>
//       <p>Manejo de estado simple de Zustand</p>
//       <hr />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//         <Bears
//           bearState={blackBears}
//           increaseBearState={increaseBlackBears}
//           bear={"🐻"}
//         />
//         <Bears
//           bearState={polarBears}
//           increaseBearState={increasePolarBears}
//           bear={"🐻‍❄️"}
//         />
//         <Bears
//           bearState={pandaBears}
//           increaseBearState={increasePandaBears}
//           bear={"🐼"}
//         />

//       </div>
//     </>
//   );
// };

// export const Bears = ({ bearState, increaseBearState, bear }) => {
//   // const bear = useBearStore((state) => state[bearState]);
//   // const increaseBear = useBearStore((state) => state[increaseBearState]);

//   return (
//     <WhiteCard centered>
//       <h2 className="py-2">{bear}</h2>

//       <div className="flex flex-col md:flex-row">
//         <button onClick={() => increaseBearState(+1)}> +1</button>
//         <span className="text-3xl mx-2 lg:mx-10"> {bearState} </span>
//         <button onClick={() => increaseBearState(-1)}>-1</button>
//       </div>
//     </WhiteCard>
//   );
// };
