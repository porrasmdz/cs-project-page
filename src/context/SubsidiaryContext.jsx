"use client";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const SubsidiaryContext = createContext();

export const useSubsidiaries = () => {
  const context = useContext(SubsidiaryContext);
  if (!context) throw new Error("Use subsidiaries must be within provider");
  return context;
};

export const SubsidiaryProvider = ({ children }) => {
  const [subsidiaries, setSubsidiaries] = useLocalStorage("subsidiaries", [])
 
  

  // useEffect(() => {
  //  setSubsidiaries(subsidiaries)
  // }, [subsidiaries]);

  const createSubsidiary = (name, ruc) => {
    setSubsidiaries([
      ...subsidiaries,
      { id: subsidiaries.length + 1, name, ruc },
    ]);
  };
  const updateSubsidiary = (id, updatedSubsidiary) => {
    setSubsidiaries([
      ...subsidiaries.map((subsi) =>
        subsi.id == id ? { ...subsi, ...updatedSubsidiary } : subsi
      ),
    ]);
  };
  const deleteSubsidiary = (id) => {
    setSubsidiaries([...subsidiaries.filter((subsi) => subsi.id !== id)]);
  };
  return (
    <SubsidiaryContext.Provider
      value={{
        subsidiaries,
        createSubsidiary,
        updateSubsidiary,
        deleteSubsidiary,
      }}
    >
      {children}
    </SubsidiaryContext.Provider>
  );
};
