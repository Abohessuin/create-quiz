/* eslint-disable eqeqeq */
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [quizes, setQuizes] = useState([]);
  const addNewQuize = (newQuize) => {
    setQuizes([...quizes, newQuize]);
  };

  const getQuize = (id) => {
    const newQuize = quizes.filter((quize) => quize.id == id);
    return newQuize[0];
  };

  const EditQuize = (newQuize) => {
    console.log("🚀 ~ file: index.jsx:17 ~ EditQuize ~ newQuize:", newQuize)
    const newQuizes = quizes.filter((quize) => quize.id != newQuize.id);
    setQuizes([...newQuizes, newQuize]);
  };

  const removeQuize = (id) => {
    const newQuizes = quizes.filter((quize) => quize.id != id);
    setQuizes([...newQuizes]);
  };

  const quizeOperations = {
    addNewQuize,
    getQuize,
    EditQuize,
    removeQuize,
    quizes: [...quizes],
  };
  return (
    <AppContext.Provider value={quizeOperations}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
