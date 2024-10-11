import { createContext, useState } from "react";

export const PubContext = createContext();

export const PubContextProvider = ({ children }) => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });
  const onAddDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });
  };

  return (
    <PubContext.Provider
      value={{
        bottles,
        onAddDrink,
      }}
    >
      {children}
    </PubContext.Provider>
  );
};
