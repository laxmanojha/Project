import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider({children}) {
    
    let emoji  = ["😀","😀","😂","😂","🤩","🤩","😝","😝","😱","😱","🥹","🥹","😎","😎","🥰","🥰"];
    const [emojiArray, setEmojiArray] = useState(emoji);
    const [win, SetWin] = useState(false);
    const [mode, setMode] = useState(true);
    const [winTime, setWinTime] = useState("00:00");
    const [moves, setMoves] = useState(1);
    const [winMoves, setWinMoves] = useState(0);
    const [timeState, setTimeState] = useState(false);
    const navigate = useNavigate();

    function modeHandler() {
        setMode(!mode);
    }
    function shuffleEmoji() {
        // console.log(emoji);
        for(let i = 0;i<16;i++) {
            let temp = emoji[i];
            let index = Math.floor(Math.random()*16);
            emoji[i] = emoji[index];
            emoji[index] = temp;
        }
        setEmojiArray(emoji);
        // console.log(emoji);
        setWinTime('00:00');
        setMoves(1);
        setWinMoves(0);
        navigate('/game');
    }
    function congratsBackHandler() {
        SetWin(false);
        setWinTime('00:00');
        setMoves(1);
        setWinMoves(0);
        navigate('/');
        window.location.reload();
    }

    const value = {
        emojiArray,
        win,
        SetWin,
        mode, 
        modeHandler,
        shuffleEmoji,
        winTime,
        setWinTime,
        moves,
        setMoves,
        winMoves,
        setWinMoves,
        timeState,
        setTimeState,
        congratsBackHandler
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}