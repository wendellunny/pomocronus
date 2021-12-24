import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Home() {
  const [time,setTime] = useState(30);
  const [min,setMin] = useState(("0" + Math.floor(time / 60)).slice(-2));
  const [sec,setSec] = useState(("0" + time % 60).slice(-2));
  const [isTimeOff, setIsTimeOff] = useState(false);
  const [rounds,setRounds] = useState(0);
  var functionTime = null;
 
  useEffect(() => {
    if(isTimeOff){
      startTimeOff();
      updateClock();
      if(time==0){
        setIsTimeOff(false);
      }
    } 

  }, [time,isTimeOff]);

  return (
    <div>
      <h1>PomoCronus</h1>
      <span>{min}</span><span>:</span><span>{sec}</span>
      <br/>
      <button onClick={()=>setIsTimeOff(true)}>
        Start
      </button>
      <button onClick={stopClock}>
        Parar
      </button>
    </div>
  )

  function startTimeOff(){
    functionTime = setTimeout(()=>{
      decrementTime();
    },1000);
  }

  function decrementTime(){
    const now = time - 1;
    setTime(now);
  }

  function updateClock(){
    updateMinute();
    updateSecond();
  }

  function updateMinute(){
    const minute = ("0" + Math.floor(time / 60)).slice(-2)
    setMin(minute);
  }

  function updateSecond(){
    const second = ("0" + time % 60).slice(-2); 
    setSec(second);
  }

  function stopClock(){
    console.log(functionTime);
    clearTimeout(functionTime);
    setIsTimeOff(false);
    setTime(30);
    setRounds(0);
    console.log(time);
    updateClock();
  }
  function pauseClock(){
    setIsTimeOff(false);
  }
  
}
