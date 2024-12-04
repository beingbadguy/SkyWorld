import { createContext, useState } from "react";
import products from "../data/data.json";

export const ContextStore = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(products);
  return (
    <ContextStore.Provider value={{ data }}>{children}</ContextStore.Provider>
  );
};

export default ContextProvider;
