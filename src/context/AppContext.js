import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selected, setSelected] = useState();
  return (
    <AppContext.Provider
      value={{ selected: selected, setSelected: setSelected }}
    >
      {children}
    </AppContext.Provider>
  );
};
