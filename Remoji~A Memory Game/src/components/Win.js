import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../ContextAPI/AppContext';

export const Win = () => {
    const navigate = useNavigate();
    const {mode,SetWin,winMoves, winTime, setWinTime, congratsBackHandler} = useContext(AppContext);
  return (
    <div className= {`h-screen w-screen  ${mode ?  ("bg-orange-50") : ("bg-[#383333] text-white")}`}>
        <div className='pt-20 flex flex-col gap-y-6 justify-center items-center h-screen w-2/6 mx-auto max-[1200px]:w-3/6 max-[700px]:w-5/6 max-[600px]:w-6/6'>
            <div className=' flex flex-col items-center'>
                <p className=' text-5xl font-semibold'>REMOJI</p>
                <p className=' text-2xl font-semibold'>Memory Game</p>
            </div>
            <div className=' shadow-md shadow-slate-800 rounded-md w-full'>
                <div className=' font-semibold flex flex-col items-center rounded-t-md text-white bg-black text-4xl py-2 max-[300px]:text-2xl'>
                    <h1>Congratulations!!</h1>
                    <p>🎉🎉</p>
                </div>
                <div className= {`flex flex-col items-center py-4 gap-y-4  ${mode ?  ("bg-white") : ("bg-stone-700 text-white")}`}>
                    <div className=' text-center'>
                        <h1 className=' text-2xl'>Moves:</h1>
                        <p className=' text-4xl font-semibold'>{winMoves}</p>
                    </div>
                    <div className=' text-center'>
                        <h1 className=' text-2xl'>Time:</h1>
                        <p className=' text-4xl font-semibold'>{winTime}</p>
                    </div>
                    <button className=' flex items-center gap-x-3 border-2 border-black py-1 px-3 rounded-sm hover:bg-black hover:text-white transition-all duration-200'
                    onClick={congratsBackHandler}
                    >
                        <p className=' rotate-180 text-xl'>➤</p>
                        <p className=' text-xl font-semibold uppercase'>back</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
