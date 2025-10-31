import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;

  addBear: () => void;
  clearBears: () => void;
}

// create se ejecuta y seguido se vuelve a ejecutar
export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 20,
  polarBears: 5,
  pandaBears: 1,
  bears: [
    {
      id: 1,
      name: "Oso n1",
    },
  ],

  computed: {
    get totalBears() {
      return (
        get().blackBears +
        get().polarBears +
        get().pandaBears +
        get().bears.length
      );
    },
  },

  increaseBlackBears: (
    by: number //le va a llegar por cuanto es lo que queremos incrementar los osos
  ) => set((state) => ({ blackBears: state.blackBears + by })), // se suma al estado inicial, la cantidad que le llegan a la funcion
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),

  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso n${state.bears.length + 1}` },
      ],
    })),
  clearBears: () => set({ bears: [] }),
}));
