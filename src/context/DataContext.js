import { createContext, useState } from "react";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isauthenticated, setIsAuthenticated] = useState(false);
  return (
    <DataContext.Provider
      value={{
        check: "yes",
        currentUser,
        setCurrentUser,
        isauthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
