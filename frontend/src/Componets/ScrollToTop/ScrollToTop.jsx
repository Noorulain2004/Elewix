// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi URL (pathname) change ho, window ko 0,0 par scroll kro
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;