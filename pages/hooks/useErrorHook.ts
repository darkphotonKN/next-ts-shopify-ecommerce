import { useEffect, useState } from 'react';

const useErrorHook = () => {
  const [item, setItem] = useState('test');

  useEffect(() => {
    setItem('test2');
  }, []);

  return item;
};

export default useErrorHook;
