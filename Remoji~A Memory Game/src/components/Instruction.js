import React, { useContext } from 'react'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../ContextAPI/AppContext';

export const Instruction = () => {
    const navigate = useNavigate();
    const {mode} = useContext(AppContext);
  return (
    <div className= {`w-screen min-h-screen ${mode ?  ("bg-orange-50") : ("bg-[#383333] text-white")}`}>

        <div className=' mx-auto mb-12 pt-28 w-2/5 flex flex-col items-center gap-y-3 max-[700px]:w-3/5 max-[600px]:w-4/5'>
            <h1 className=' font-semibold text-3xl uppercase mt-2'>Instructions</h1>
            <div>
                <h1 className=' text-xl font-semibold uppercase'>Objective:</h1>
                <p>The objective of the game is to match pairs of emojis until there are no emojis on the grid.</p>
            </div>
            <div>
                <h1 className=' text-xl font-semibold uppercase'>Gameplay:</h1>
                <ol className="list-decimal list-inside">
                    <li>
                        The player opens up two cards. If the emojis match (e.g. two Smiling face with sunglasses emojis, two yummy face emojis, two lauging with tears emojis, etc.), it stays open.
                    </li>
                    <li>
                        If the emojis do not match, the cards will be flipped back over.
                    </li>
                    <li>
                        Play continues in this way, until all emojis have been matched.
                    </li>
                </ol>
            </div>
            <div className=' flex justify-center italic'>
                <h1 className=' text-xs font-semibold uppercase'>Warning:</h1>
                <p className=' text-xs'>Do not select the same box two time in a row, select discountinuously.</p>
            </div>
            <div>
                <p className=' text-xl font-semibold italic'>Goodluck!</p>
            </div>
            <div>
                <button className=' flex items-center gap-x-3 border-2 border-black py-1 px-3 rounded-sm hover:bg-black hover:text-white transition-all duration-200'
                onClick={() => navigate('/')}
                >
                    <p className=' rotate-180 text-xl'>➤</p>
                    <p className=' text-xl font-semibold uppercase'>back</p>
                </button>
            </div>
        </div>
    </div>
  )
}
