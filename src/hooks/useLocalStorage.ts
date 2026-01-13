import { useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from '@/utils/storage';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = loadFromLocalStorage<T>(key);
    return item !== null ? item : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    saveToLocalStorage(key, value);
  };

  const removeValue = () => {
    setStoredValue(initialValue);
    removeFromLocalStorage(key);
  };

  return [storedValue, setValue, removeValue];
}
