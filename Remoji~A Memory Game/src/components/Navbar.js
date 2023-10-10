import React, { useContext } from 'react'
import { useState } from 'react';
import brightness from '../assets/brightness.png';
import nightmode from '../assets/night-mode.png';
import { AppContext } from '../ContextAPI/AppContext';

export const Navbar = () => {

    const {mode, modeHandler} = useContext(AppContext);

  return (
    <div className={`absolute flex w-full h-20 shadow-md justify-evenly items-center ${mode ?  ("bg-orange-100") : ("bg-[#332D2D] text-white")}`}>
        <div className=' text-3xl font-semibold'>REMOJI</div>
        <div className=' cursor-pointer bg-white p-1 rounded-full'>
          {
            mode ? (<img src={brightness} onClick={modeHandler} width='40px'/>) : (<img src={nightmode} onClick={modeHandler} width='40px'/>)
          }
        </div>
    </div>
  )
}
