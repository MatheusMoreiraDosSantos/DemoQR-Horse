import React, { createContext, useState } from "react";

export const HorseContext = createContext();

const HorseProvider = ({ children }) => {
  const [horses, setHorses] = useState([]);

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
