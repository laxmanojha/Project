import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../ContextAPI/AppContext';
export const Time = () => {
    
    // const [time, setTime] = useState(`00:00`);
    const {winTime, setWinTime} = useContext(AppContext);
    
    let seconds = 0;
    let minutes = 0;
    
    function settingTheTime() {
        seconds += 1;
        if(seconds < 10) {
            if(minutes < 10){
                setWinTime(`0${minutes}:0${seconds}`);
            }
            else {
                setWinTime(`${minutes}:0${seconds}`);
            }
        }
        else if(seconds < 60) {
            if(minutes < 10) {
                setWinTime(`0${minutes}:${seconds}`);
            }  
            else {
                setWinTime(`${minutes}:${seconds}`);
            }
        }
        else {
            seconds = 0;
            minutes += 1;
            if(minutes < 10) {
                setWinTime(`0${minutes}:00`);
            }
            else {
                setWinTime(`${minutes}:00`);
            }
        }
        // console.log('at funtion', winTime);
    }
    useEffect(() => {
        // create a interval and get the id
        const myInterval = setInterval(() => {
          settingTheTime();
        }, 1000);
        // clear out the interval using the id when unmounting the component
        return () => clearInterval(myInterval);
      }, []);
    
  return (
    <div>
        <p>Time: <span>{winTime}</span></p>
    </div>
  )
}
