import React, { useRef, createContext, useMemo } from "react";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";
import useTitleInput from "./hooks/useTitleInput";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();

  const reverseWord = word => {
    console.log("function called");
    return word
      .split("")
      .reverse()
      .join("");
  };

  const title = "Level Up Dishes";

  const TitleReversed = useMemo(() => reverseWord(name), [name]);
  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-Fake-class")}>
          {TitleReversed}
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
        <Counter />
      </div>
    </UserContext.Provider>
  );
};

export default App;
