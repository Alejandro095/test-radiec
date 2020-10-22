const { useState, useEffect } = require('react');

const useStorage = (name) => {
  const [storage, setStorage] = useState();

  useEffect(() => {
    const InitialData = localStorage.getItem(name) || false;

    if (InitialData && !storage) {
      set(InitialData);
    }
  });

  const set = (value) => {
    setStorage(value);
    localStorage.setItem(name, JSON.stringify(value));
  };

  return [storage, set];
};

export default useStorage;
