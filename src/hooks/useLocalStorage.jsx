"use client"
import { useEffect, useState } from "react";

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      const subsis = JSON.parse(item);
      if (subsis) {
        setState(subsis);
      }
    }
  }, []);

  useEffect(() => {
    console.log("STATE CHANGING", state)
    if (state && state.length > 0) {
        console.log("confirmed state CHANGING", state, key)
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [initialState, key, state]);

  return [state, setState];
}
