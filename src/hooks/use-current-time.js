import { useEffect, useState } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurretTime] = useState(new Date());

  // Runs Every second
  useEffect(() => {
    const everyminute = setTimeout(() => {
      setCurretTime(new Date());
    }, 1000 * 60);
    return () => clearTimeout(everyminute);
  });

  return currentTime;
};

export default useCurrentTime;
