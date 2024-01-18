"use client";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const InventoryContext = createContext();

export const useInventories = () => {
  const context = useContext(InventoryContext);
  if (!context) throw new Error("Use inventories must be within provider");
  return context;
};

export const InventoryProvider = ({ children }) => {
  const [inventories, setInventories] = useLocalStorage("inventories", [])
 
  

  // useEffect(() => {
  //  setInventories(inventories)
  // }, [inventories]);

  const createInventory = (name, ruc) => {
    setInventories([
      ...inventories,
      { id: inventories.length + 1, name, ruc },
    ]);
  };
  const updateInventory = (id, updatedInventory) => {
    setInventories([
      ...inventories.map((subsi) =>
        subsi.id == id ? { ...subsi, ...updatedInventory } : subsi
      ),
    ]);
  };
  const deleteInventory = (id) => {
    setInventories([...inventories.filter((subsi) => subsi.id !== id)]);
  };
  return (
    <InventoryContext.Provider
      value={{
        inventories,
        createInventory,
        updateInventory,
        deleteInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
