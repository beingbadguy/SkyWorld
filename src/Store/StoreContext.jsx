import { createContext, useState } from "react";

export const ContextStore = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState("Namaste Ronaldo");
  return (
    <ContextStore.Provider value={{ data }}>{children}</ContextStore.Provider>
  );
};

export default ContextProvider;
