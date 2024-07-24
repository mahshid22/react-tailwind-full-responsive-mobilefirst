import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BearState {
  bears: number;
  deep: {
    nested: {
      obj: { count: number };
      id: number;
    };
  };
  increase: (by: number) => void;
  increasedep: () => void;
  reset: () => void;
}

const initialState = {
  bears: 0,
  deep: { nested: { obj: { count: 0 }, id: 1 } },
};
const useBearStore = create<BearState>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        increase: (by) =>
          set((state) => ({
            bears: state.bears + by,
          })),
        increasedep: () =>
          set((state) => {
            state.deep.nested.obj.count = state.deep.nested.obj.count + 10;
          }),
        reset: () => {
          set(initialState);
        },
      })),
      { name: "bearStore" }
    )
  )
);

export default useBearStore;
