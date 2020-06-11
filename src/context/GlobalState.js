import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

const GlobalContext = createContext(initialState);

const Provider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransac = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const addTransac = (transaction) => {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransac,
        addTransac,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { Provider, GlobalContext };
