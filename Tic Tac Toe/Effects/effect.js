const button = document.querySelector('.button');
const text = document.querySelector('.effect');
const upAnimation = document.querySelector('.upperslide');
const lowAnimation = document.querySelector('.lowerslide');
const closeGame = document.querySelector('.goBack');


const startGame = new Audio("audio/mixkit-game-level-completed-2059.wav");


button.addEventListener('click', () => {
    startGame.play();
    closeGame.textContent = 'Close Game';
    //Adding animations to the elements
    text.classList.add('textEffect');
    upAnimation.classList.add('upAnimation');
    lowAnimation.classList.add('lowAnimation');
    button.classList.add('btnOpacity');
    closeGame.classList.add('goBackAnimation');
    closeGame.classList.add('goBackfn');
    setTimeout(() => {

        //Removing elements from screen and making visibility to hidden
        text.classList.remove('textEffect');
        upAnimation.classList.remove('upAnimation');
        lowAnimation.classList.remove('lowAnimation');
        button.classList.remove('btnOpacity');
        closeGame.classList.remove('goBackAnimation');
        
        //visibility hidden to user
        document.querySelector('.wrapperone').classList.add('hideDisplay');
        // text.classList.add('hideDisplay');
        // lowAnimation.classList.add('hideDisplay');
        // upAnimation.classList.add('hideDisplay');
        // button.classList.add('hideDisplay');
        // text.textContent = '';
    }, 2900);
});

closeGame.addEventListener('click', () => {

    document.querySelector('.wrapperone').classList.remove('hideDisplay');
    //Adding animations to the elements
    closeGame.classList.add('goBackAnimationRevert');
    text.classList.add('textEffectRevert');
    upAnimation.classList.add('upAnimationRevert');
    lowAnimation.classList.add('lowAnimationRevert');
    button.classList.add('btnOpacityRevert');

    setTimeout(() => {
        //reverting animations to the elements
        text.classList.remove('textEffectRevert');
        upAnimation.classList.remove('upAnimationRevert');
        lowAnimation.classList.remove('lowAnimationRevert');
        button.classList.remove('btnOpacityRevert');
        closeGame.classList.remove('goBackfn');
        closeGame.classList.remove('goBackAnimationRevert');
        closeGame.textContent = '';
        location.reload();
    }, 2900);
});