import { useState }  from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setValue] = useState( () => {
    try {
      const item = localStorage.getItem(key);
      return !!item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.log(e)
    }
  };

  return [ storedValue, setLocalStorage ]

};
