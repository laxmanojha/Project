import React, { useContext } from 'react'
import play from '../assets/play-button-arrowhead.png';
import info from '../assets/info.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../ContextAPI/AppContext';
import { Win } from './Win';

export const Home = () => {
    const navigate = useNavigate();
    const {win, mode, shuffleEmoji} = useContext(AppContext);
  return (
    <div className={`flex flex-col w-full h-screen items-center justify-center ${mode ?  ("bg-orange-50") : ("bg-[#383333] text-white")}`}>
        <div className='my-20'>
            <p className=' text-6xl font-semibold my-2'>Let's Play</p>
            <p className=' text-3xl text-center font-semibold'>Memory Game</p>
        </div>
        <div className=' flex flex-col items-center gap-y-4'>
            <p className=' text-4xl'>Ready?</p>
            <button className= {`flex text-3xl items-center gap-x-2 mx-auto px-5 py-2 rounded-md ${mode ? ("bg-orange-200 border-orange-100"):("bg-stone-700 border-stone-600")} shadow-lg border-2`}
            onClick={shuffleEmoji}
            >
                <img src={play} width='30px'/>
                <p>Play</p>
            </button>
            <button className={`flex text-3xl items-center gap-x-2 mx-auto px-5 py-2 rounded-md shadow-lg border-2 ${mode ? ("bg-orange-200 border-orange-100"):("bg-stone-700 border-stone-600")}`}
            onClick={() => navigate('/instruction')}
            >
                <img src={info} width='20px'/>
                <p>Instructions</p>
            </button>
        </div>
    </div>
  )
}
