import React, { useRef } from "react";
import Toggle from "./components/Toggle";
import useTitleInput from "./hooks/useTitleInput";

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  return (
    <div className="main-wrapper" ref={ref}>
      <h1
        onClick={() => ref.current.classList.add("new-Fake-class")
        }
      >
        Level Up Dishes
      </h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
      <Toggle />
    </div>
  );
};

export default App;
