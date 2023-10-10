// const box = document.querySelector('.box1');
// const imageBox = document.querySelector('.image');

// box.addEventListener('click', showPic);

// function showPic(){
//     if(imageBox.classList.contains('multiply')){
//         imageBox.classList.remove('multiply');
//         imageBox.classList.add('circle');
//         console.log('circle sign added');
//     }
//     else if(imageBox.classList.contains('circle')){
//         imageBox.classList.remove('circle');
//         imageBox.classList.add('multiply');
//         console.log('multi sign added');
//     }
//     else{
//         imageBox.classList.add('multiply');
//         console.log('multi sign added');
//     }
// }


function checkDevice() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const shortWidthClass = document.querySelector('.shortWidth');
    console.log(width);
    console.log(height);
    // console.log("Hello tic tac toe");
    if(width < 1200) {
        shortWidthClass.classList.add('shortWidthInfo');
    }
    else {
        shortWidthClass.classList.remove('shortWidthInfo');
    }
}
checkDevice();

const multipleSignAudio = new Audio("./audio/beep-6-96243.mp3");
const crossSignAudio = new Audio("audio/achive-sound-132273.mp3");
const errorSignAudio = new Audio("audio/wrong-answer-126515.mp3");
const winningAudio = new Audio("audio/short-crowd-cheer-6713.mp3");

// const buttonss = document.querySelectorAll(".box");

// buttonss.forEach(button => {
//     button.addEventListener("click", () => {
//         audio.play();
//     });
// });
// let winnerTwo = false;
// document.querySelector('.box1').addEventListener('click',fillBox1);





let player = 1;
let winnerOne = false;
let gameWon = false;
let freeUpSpace = true;
let multiplyWinCount = 0;
let circleWinCount = 0;
const imageBox = Array.from(document.querySelectorAll('.image'));



function fillBox1()
{
    if(document.querySelector('.image1').classList.contains('multiply') || document.querySelector('.image1').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image1').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    
        crossSignAudio.play();
        document.querySelector('.image1').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox2()
{
    if(document.querySelector('.image2').classList.contains('multiply') || document.querySelector('.image2').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image2').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image2').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox3()
{
    if(document.querySelector('.image3').classList.contains('multiply') || document.querySelector('.image3').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image3').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image3').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox4()
{
    if(document.querySelector('.image4').classList.contains('multiply') || document.querySelector('.image4').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image4').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image4').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox5()
{
    if(document.querySelector('.image5').classList.contains('multiply') || document.querySelector('.image5').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image5').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image5').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox6()
{
    if(document.querySelector('.image6').classList.contains('multiply') || document.querySelector('.image6').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image6').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image6').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox7()
{
    if(document.querySelector('.image7').classList.contains('multiply') || document.querySelector('.image7').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image7').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image7').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox8()
{
    if(document.querySelector('.image8').classList.contains('multiply') || document.querySelector('.image8').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image8').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image8').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}
function fillBox9()
{
    if(document.querySelector('.image9').classList.contains('multiply') || document.querySelector('.image9').classList.contains('circle'))
    {
        errorSignAudio.play();
        alert("you can't select this box");
    }
    else if(player%2 !== 0)
    {
        multipleSignAudio.play();
        document.querySelector('.image9').classList.add('multiply');
        player += 1;
        if(player > 5)
        {
            winnerMultiply();
        }
    }    
    else
    {    crossSignAudio.play();
        document.querySelector('.image9').classList.add('circle');
        player += 1;
        if(player > 5)
        {
            winnerCircle();
        }
    }
    playerCardOpacity();
    reloading();
}


function makeEmpty(){
    imageBox.forEach(box => {
        if(box.classList.contains('multiply'))
        {
            box.classList.remove('multiply');
        }
        else if(box.classList.contains('circle'))
        {
            box.classList.remove('circle');
        }
    });
    player = 1;
    winnerOne = false;
    playerCardOpacity();
    gameWon = false;
    multiplyWinCountData.textContent = '';
    circleWinCountData.textContent = '';
    totalMatchCountData.textContent = '';
    multiplyWinCountData.textContent = multiplyWinCount;
    circleWinCountData.textContent = circleWinCount;
    totalMatchCountData.textContent = multiplyWinCount + circleWinCount;
    setTimeout(() => {
        playerCardOpacity();
    }, 2000);
}




function reloading()
{
    if(player > 9)
    {
        setTimeout(() => {
            if(freeUpSpace)
            {
                if(confirm("No Space Left!\nFree Up Space :"))
                    makeEmpty();
            }
            freeUpSpace = true;
            // location.reload();
        }, 2000);
    }
}


const one = document.querySelector('.image1');
const two = document.querySelector('.image2');
const three = document.querySelector('.image3');
const four = document.querySelector('.image4');
const five = document.querySelector('.image5');
const six = document.querySelector('.image6');
const seven = document.querySelector('.image7');
const eight = document.querySelector('.image8');
const nine = document.querySelector('.image9');


function winnerMultiply()
{
    if(one.classList.contains('multiply'))
    {
        if(three.classList.contains('multiply') && two.classList.contains('multiply'))
        {
            winnerOne = true;
            gameWon = true;
            winning();
        }
        else if(seven.classList.contains('multiply') && four.classList.contains('multiply'))
        {
            winnerOne = true;
            gameWon = true;
            winning();
        }
        else if(nine.classList.contains('multiply') && five.classList.contains('multiply'))
        {
            winnerOne = true;
            gameWon = true;
            winning();
        }
    }
    if(three.classList.contains('multiply'))
    {
        if(seven.classList.contains('multiply') && five.classList.contains('multiply'))
        {
            winnerOne = true;
            gameWon = true;
            winning();
        }
        else if(nine.classList.contains('multiply') && six.classList.contains('multiply'))
        {
            winnerOne = true;
            gameWon = true;
            winning();
        }
    }
    if(two.classList.contains('multiply') && eight.classList.contains('multiply') && five.classList.contains('multiply'))
    {
        winnerOne = true;
        gameWon = true;
        winning();
    }
    else if(four.classList.contains('multiply') && six.classList.contains('multiply') && five.classList.contains('multiply'))
    {
        winnerOne = true;
        gameWon = true;
        winning();
    }
    else if(seven.classList.contains('multiply') && nine.classList.contains('multiply') && eight.classList.contains('multiply'))
    {
        winnerOne = true;
        gameWon = true;
        winning();
    }
}

function winnerCircle()
{
    if(one.classList.contains('circle'))
    {
        if(three.classList.contains('circle') && two.classList.contains('circle'))
        {
            gameWon = true;
            winning();
        }
        else if(seven.classList.contains('circle') && four.classList.contains('circle'))
        {
            gameWon = true;
            winning();
        }
        else if(nine.classList.contains('circle') && five.classList.contains('circle'))
        {
            gameWon = true;
            winning();
        }
    }
    if(three.classList.contains('circle'))
    {
        if(seven.classList.contains('circle') && five.classList.contains('circle'))
        {
            gameWon = true;
            winning();
        }
        else if(nine.classList.contains('circle') && six.classList.contains('circle'))
        {
            gameWon = true;
            winning();
        }
    }
    if(two.classList.contains('circle') && eight.classList.contains('circle') && five.classList.contains('circle'))
    {
        gameWon = true;
        winning();
    }
    else if(four.classList.contains('circle') && six.classList.contains('circle') && five.classList.contains('circle'))
    {
        gameWon = true;
        winning();
    }
    else if(seven.classList.contains('circle') && nine.classList.contains('circle') && eight.classList.contains('circle'))
    {
        
        gameWon = true;
        winning();
    }
}




// Player win card visibility process and updating the data table

const mainWinCard = document.querySelector('.playerWin');
const multiplyWinCard = document.querySelector('.playerMultiplyWin');
const circleWinCard = document.querySelector('.playerCircleWin');
const closeNowButton = document.querySelector('.closeNow');
const playAgainButton = document.querySelector('.playAgain');
const multiplyWinCountData = document.querySelector('.multiplyWinningCount');
const totalMatchCountData = document.querySelector('.totalMatchCount');
const circleWinCountData = document.querySelector('.circleWinningCount');

function winning()
{
    winningAudio.play();
    gameConsole.classList.add('lessOpacity');
    mainWinCard.classList.add('playerWinVisibility');
    freeUpSpace = false;
    if(winnerOne)
    {
        setTimeout(() => {
            multiplyWinCard.classList.add('playerWinVisibility');
            multiplyWinCount += 1;
            closeNoworPlayAgain();
            makeEmpty();
            // location.reload();
        }, 0);
    }
    else
    {
        setTimeout(() => {
            circleWinCard.classList.add('playerWinVisibility');
            circleWinCount += 1;
            closeNoworPlayAgain();
            makeEmpty();
            // location.reload();
        }, 0);
    }
}

function closeNoworPlayAgain()
{
    playAgainButton.addEventListener('click', () => {
        gameConsole.classList.remove('lessOpacity');
        if(multiplyWinCard.classList.contains('playerWinVisibility'))
        {
            multiplyWinCard.classList.remove('playerWinVisibility');
        }
        else if(circleWinCard.classList.contains('playerWinVisibility'))
        {
            circleWinCard.classList.remove('playerWinVisibility');
        }
        mainWinCard.classList.remove('playerWinVisibility');
    });
    closeNowButton.addEventListener('click', () => {
        gameConsole.classList.remove('lessOpacity');
        if(multiplyWinCard.classList.contains('playerWinVisibility'))
        {
            multiplyWinCard.classList.remove('playerWinVisibility');
        }
        else if(circleWinCard.classList.contains('playerWinVisibility'))
        {
            circleWinCard.classList.remove('playerWinVisibility');
        }
        mainWinCard.classList.remove('playerWinVisibility');
    });
}



//animation for Start now card and player card display

const letStartButton = document.querySelector('.effect')
const closeButton = document.querySelector('.goBack')
const gameConsole = document.querySelector('.wrapper');
const playerCard = document.querySelector('.bothPlayerCard');
const startButtonMain = document.querySelector('.startMain');
const startButton = document.querySelector('.startButton');
const dataTable = document.querySelector('.dataTable');

letStartButton.addEventListener('click',() => {
    gameConsole.classList.add('wrapperAnimation');
    playerCard.classList.add('playerCardVisibility');
    dataTable.classList.add('dataTableVisibility');
    setTimeout(() => {
        gameConsole.classList.add('lessOpacity');
        startButtonMain.classList.add('startMainVisibility');
    }, 3000);
    startButton.addEventListener('click', () =>{
        setTimeout(() => {
            gameConsole.classList.remove('wrapperAnimation');
            gameConsole.classList.remove('lessOpacity');
            startButtonMain.classList.remove('startMainVisibility');   
            setTimeout(() => {
                playerCardOpacity();
            }, 2000);
        }, 0);
    });
});

closeButton.addEventListener('click', () => {
    gameConsole.classList.add('wrapperAnimationRevert');
    setTimeout(() => {
        playerCard.classList.remove('playerCardVisibility');
        gameConsole.classList.remove('wrapperAnimationRevert');
        dataTable.classList.remove('dataTableVisibility');
    }, 2900);
});



// Setting player card opacity 
const MultiplyCard = document.querySelector('.playerMultiply');
const CircleCard = document.querySelector('.playerCircle');

function playerCardOpacity()
{
    if(player > 9 || gameWon)
    {
        if(CircleCard.classList.contains('IncreaseOpacity'))
        {
            CircleCard.classList.remove('IncreaseOpacity');
        }
        if(MultiplyCard.classList.contains('IncreaseOpacity'))
        {
            MultiplyCard.classList.remove('IncreaseOpacity');
        }
    }
    else if(player%2 !== 0)
    {
        if(CircleCard.classList.contains('IncreaseOpacity'))
        {
            CircleCard.classList.remove('IncreaseOpacity');
        }
        MultiplyCard.classList.add('IncreaseOpacity');
    }
    else
    {
        if(MultiplyCard.classList.contains('IncreaseOpacity'))
        {
            MultiplyCard.classList.remove('IncreaseOpacity');
        }
        CircleCard.classList.add('IncreaseOpacity');
    }
}