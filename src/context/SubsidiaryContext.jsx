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
  const [subsidiaries, setSubsidiaries] = useLocalStorage("subsidiaries", [
    {
      id: 1,
      name: "Compañía ABC",
      ruc: "09431432001"
    },{
      id: 2,
      name: "Compañía XYZ",
      ruc: "09422444001"
    },{
      id: 3,
      name: "Compañía VWZ",
      ruc: "03431122001"
    },{
      id: 4,
      name: "Compañía PWC",
      ruc: "09771433001"
    },{
      id: 5,
      name: "Compañía 123",
      ruc: "09121212001"
    },
  ])
 
  

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
