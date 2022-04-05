import React, { createContext, useState } from "react";

export const HorseContext = createContext();

const HorseProvider = ({ children }) => {
  const [horses, setHorses] = useState([
    { id: 1, title: "teste1", done: false },
    { id: 2, title: "teste2", done: false },
    { id: 3, title: "teste3", done: false },
    { id: 4, title: "teste4", done: false },
  ]);

  const saveHorse = (todo) => {
    const newHorse = {
      id: horses.length + 1,
      title: todo.title,
      done: false,
    };
    setHorses([...horses, newHorse]);
  };
  return (
    <HorseContext.Provider value={{ horses, saveHorse }}>
      {children}
    </HorseContext.Provider>
  );
};
export default HorseProvider;
