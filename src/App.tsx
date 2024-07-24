import React from "react";
import { useState } from "react";

import "./App.css";
import useBearStore from "./store/store";

function App() {
  const [count, setCount] = useState(0);
  const { bears, increase, deep, increasedep, reset } = useBearStore();
  console.log("🚀 ~ App ~ deep:", deep);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="flex flex-col p-2">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
          className="rounded-3xl border-2 border-neutral-500 p-3"
        >
          count state is {count}
        </button>
        <button
          onClick={() => {
            increase(5);
          }}
          className="rounded-3xl border-2 border-neutral-500 p-3"
        >
          zustand state with persist is {bears}
        </button>
        <button
          onClick={() => {
            increasedep();
          }}
          className="rounded-3xl border-2 border-neutral-500 p-3"
        >
          dep nested obj zustand state is {deep.nested.obj.count}
        </button>
        <button
          className="rounded-3xl border-2 border-neutral-500 p-3 mt-3"
          onClick={() => reset()}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;
