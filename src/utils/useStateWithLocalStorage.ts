import { useEffect, useState } from "react";

export function useStateWithLocalStorage<Value>(
  key: string,
  initialValue: Value,
) {
  const [value, setValue] = useState<Value>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null
      ? (JSON.parse(storedValue) as Value)
      : initialValue;
  });

  // Update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
