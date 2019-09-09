import { useState, useEffect } from 'react';

export const useLocalStorage = (key) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const ss_data = localStorage.getItem(key);
    if (ss_data) setData(ss_data);
  }, []);

  const updateValue = (value) => {
    if (!value) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
    setData(value);
  }
  return [
    data,
    updateValue
  ];
}