import { useState, useEffect } from 'react';

export function useIsMobileDevice() {
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);
  const { width } = window.screen;

  useEffect(() => {
    setDeviceWidth(width)
  }, [width]);

  if (deviceWidth === null) {
    return null;
  }
  return deviceWidth <= 375 ? true : false;
}