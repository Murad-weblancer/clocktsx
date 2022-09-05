import React, { useEffect, useState } from "react";
import { getDefaultCompilerOptions } from "typescript";
import { Clock } from "./Clock";

function App() {
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const setClock = () => {
    const currentDate = new Date();
    setSecond(currentDate.getSeconds() / 60);
    setMinute((second + currentDate.getMinutes()) / 60);
    setHour((minute + currentDate.getHours()) / 12);
  };
  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Clock second={second} minute={minute} hour={hour}/>
    </div>
  );
}

export default App;
