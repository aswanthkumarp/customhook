import React from 'react';
import "./Stopwatch.css";
import { useState ,useRef} from 'react';

function Stopwatch() {
  const display = "Stopwatch";
  const {value,start,stop,reset} = useStopWatch();

  return (
    <div className="center-container">
     
      <h1 className="center-text">{display}</h1>
      <h2>{value}</h2>
    <div className='buttons'>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>



    </div>
    </div>
  );
}

export default Stopwatch;



function useStopWatch(){
  const interval = useRef();
 const [value,setValue] = useState(0);

 const start = () => {
  interval.current=setInterval(
    () => {
      setValue(value => value +1)
    },1000
  )
 }
 const stop = () => {
  clearInterval(interval.current);
 }
 const reset = () => {
  stop();
  setValue(0);
 }
return{value,start,stop,reset}

}