import React, { useState } from "react";
import Toggle from "./components/Toggle";

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState("");

  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
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

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value}`);
  setValue("");
};

export default App;
