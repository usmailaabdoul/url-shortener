import { useState, useEffect } from 'react';

export function useIsMobileDevice(customeWidth?: number) {
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);
  const { width } = window.screen;
  
  
  useEffect(() => {
    setDeviceWidth(width)
  }, [width]);

  if (!window) {
    return customeWidth && customeWidth <= 375 ? true : false;
  }

  if (deviceWidth === null) {
    return null;
  }

  return deviceWidth <= 375 ? true : false;
}