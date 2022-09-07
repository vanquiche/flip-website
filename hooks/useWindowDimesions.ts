import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window !== undefined) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<{width: number; height: number}>();

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
