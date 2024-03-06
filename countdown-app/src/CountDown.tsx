import { useState, useEffect } from "react";

const CountDown = ({ duration }: { duration: number }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds: number) => {
    let seconds: number = Math.floor(milliseconds / 1000);
    let minutes: number = Math.floor(seconds / 60);
    let hours: number = Math.floor(minutes / 60);
    let days: number = Math.floor(hours / 24);

    let ratioSeconds = seconds % 60;
    let ratioMin = minutes % 60;
    let ratioHour = hours % 24;

    return [days, ratioHour, ratioMin, ratioSeconds];
  };

  return (
    <div className="timer-wrapper">
      <div className="timer-item">
        <h1>{getFormattedTime(time)[0]}</h1>
        <small>Days</small>
      </div>
      <div className="timer-item">
        <h1>{getFormattedTime(time)[1]}</h1>
        <small>Hrs</small>
      </div>
      <div className="timer-item">
        <h1>{getFormattedTime(time)[2]}</h1>
        <small>Mins</small>
      </div>
      <div className="timer-item">
        <h1>{getFormattedTime(time)[3]}</h1>
        <small>Secs</small>
      </div>
    </div>
  );
};

export default CountDown;
