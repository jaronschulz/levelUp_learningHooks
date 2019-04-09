import React, { useRef, createContext, useEffect, useState } from "react";
import Toggle from "./components/Toggle";
import useAbortableFetch from "use-abortable-fetch";
import useTitleInput from "./hooks/useTitleInput";
import { useSpring, animated } from "react-spring";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput("");
  const ref = useRef();
  const { data, loading } = useAbortableFetch(
    "https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes"
  );

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <animated.h1
          style={props}
          onClick={() => ref.current.classList.add("new-Fake-class")}
        >
          Level Up Dishes
        </animated.h1>
        <Toggle>Toggle</Toggle>

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

        {data &&
          data.map(dish => (
            <article className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map(ingredient => (
                  <span>{ingredient}</span>
                ))}
              </div>
            </article>
          ))}
      </div>
    </UserContext.Provider>
  );
};

export default App;
