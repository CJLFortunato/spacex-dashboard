import { useEffect, useState } from 'react';

export const useCountdown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
  
    const [countDown, setCountDown] = useState(
      countDownDate - new Date().getTime()
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [countDownDate]);
  
    return getReturnValues(countDown);
  };
  
  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString().padStart(2, '0');
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000).toString().padStart(2, '0');

    const daysString = days > 0? days.toString().padStart(2, '0'): "00";
    const hoursString = hours > 0? hours.toString().padStart(2, '0'): "00";
    const minutesString = minutes > 0? minutes.toString().padStart(2, '0'): "00";
    const secondsString = seconds > 0? seconds.toString().padStart(2, '0'): "00";
  
    return `${daysString}:${hoursString}:${minutesString}:${secondsString}`;
  };