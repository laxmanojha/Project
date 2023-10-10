import React, { useContext, useState } from "react";
import { AppContext } from "../ContextAPI/AppContext";
import { Win } from "./Win";
import { Time } from "./Time";
import './Game.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let compare = [];
let tempEmoji = [];
export const Game = (props) => {
  const { emojiArray, win, SetWin, mode, moves,setMoves, winMoves, setWinMoves, congratsBackHandler} = useContext(AppContext);
  // const [move, setMove] = useState(0);
  const navigate = useNavigate();

  function setTheMoves() {
    setMoves( (prev) => (prev+1) );
  }

  function decisionHandler(event) {
    setTheMoves();
    setTimeout(() => {
      if(tempEmoji.length === 16) {
        SetWin(true);
      }
    }, 500);

      if(compare.length < 2 && !event.currentTarget.classList.contains("alwaysShow")) {
        compare.push(event.currentTarget.textContent);
        compare.push(event.currentTarget);
        tempEmoji.push(event.currentTarget.textContent);
        console.log(compare, tempEmoji);
      }
      else {
        compare.push(event.currentTarget.textContent);
        compare.push(event.currentTarget);
        console.log(compare, tempEmoji);
            if(compare[0] == compare[2]) {
              tempEmoji.push(event.currentTarget.textContent);
              
              setTimeout(() => {
                if(compare[0] == compare[2]) {
                  try {
                    compare[1].classList.remove("unhide");
                    compare[1].classList.add("alwaysShow");
                    
                    compare[3].classList.remove("unhide");
                    compare[3].classList.add("alwaysShow");
                  }
                  catch {
                    navigate('/');
                    toast.error("Some Error Occured!");
                    setTimeout(() => {
                      congratsBackHandler();
                    }, 3000);
                  }
                }
              },500);
  
            }
            else if(compare.length >= 3) {
              setTimeout(() => {
                try{
                  if(compare[0] != compare[2]) {
                    compare[1].classList.remove("unhide");
                    compare[1].classList.add("hide");
                    compare[3].classList.remove("unhide");
                    compare[3].classList.add("hide");
                    tempEmoji.pop();
                  }
                }
                catch {
                  navigate('/');
                  toast.error("Some Error Occured!");
                  setTimeout(() => {
                    congratsBackHandler();
                  }, 3000);
                }
              },500);
            }
            setTimeout(() => {
                while(compare.length != 0) {
                console.log(compare.pop());
              }
            },600);
      }
    setWinMoves(Math.floor(moves/2));
  }
  function animationHandler(event) {
    if(event.currentTarget.classList.contains("hide")) {
      event.currentTarget.classList.remove("hide");
      event.currentTarget.classList.add("unhide");
    }
    else if(event.currentTarget.classList.contains("unhide")){
      event.currentTarget.classList.remove("unhide");
      event.currentTarget.classList.add("hide");
    }
      
    decisionHandler(event);
  }
  return (
    <div className= {`w-screen h-screen  ${mode ?  ("bg-orange-50") : ("bg-[#383333] text-white")}`}>
      {win ? (
        <Win/>
      ) : (
        <div className="pt-20 flex flex-col gap-y-6 justify-center items-center h-screen mx-auto min-[450px]:w-96 max-[450px]:mx-5 ">
          <div className=" flex w-full justify-between text-xl">
            <div>
              <Time/>
            </div>
            <div>
              <p>
                Moves: <span>{winMoves}</span>
              </p>
            </div>
          </div>

          <div className= {`grid grid-cols-4 gap-5 w-full shadow-black shadow-md place-items-center rounded-md text-center p-4 max-[300px]:p-2 max-[300px]:gap-2 ${mode ?  ("bg-white") : ("bg-stone-700")}`}>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl">
              <p className="hide" onClick={animationHandler} >{emojiArray[0]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[1]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[2]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[3]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[4]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[5]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[6]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[7]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[8]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[9]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[10]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[11]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[12]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[13]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[14]}</p>
            </div>
            <div className=" bg-sky-500 rounded-sm shadow-black shadow-sm text-4xl p-1 cursor-pointer select-none max-[300px]:text-2xl" >
              <p className="hide" onClick={animationHandler} >{emojiArray[15]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
