import { useState } from 'react';

const useIsOpen = () => {
  const [state, setState] = useState({
    modalOpen: false,
    basketOpen: false,
    loading: false
  });

  const toggle = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return { state, toggle };
};

export default useIsOpen;