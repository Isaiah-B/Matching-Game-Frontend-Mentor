import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onScreenResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', onScreenResize);

    return () => window.removeEventListener('resize', onScreenResize);
  }, []);

  return screenWidth;
}
