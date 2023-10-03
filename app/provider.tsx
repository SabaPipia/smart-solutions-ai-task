"use client";
import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export const errorContext = createContext<{
  isError: boolean;
  setIsError(err: boolean): void;
  isSaved: boolean;
  setIsSaved(sav: boolean): void;
  isLoading: boolean;
  setIsLoading(loading: boolean): void;
}>({
  isError: false,
  setIsError: () => {},
  isSaved: false,
  setIsSaved: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

function Prov({ children }: { children: React.ReactNode }) {
  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Provider store={store}>
      <errorContext.Provider
        value={{
          isError,
          setIsError,
          isSaved,
          setIsSaved,
          isLoading,
          setIsLoading,
        }}
      >
        {children}
      </errorContext.Provider>
    </Provider>
  );
}

export default Prov;
