let timer
let timerRunning = false

function startTimer(duration, element) {
    timerRunning = true
    let timeLeft = duration
    timer = setInterval(() => {
        let seconds = parseInt(timeLeft % 60, 10)
        seconds = (seconds < 10) ? ("0" + seconds) : seconds

        element.textContent = seconds
        --timeLeft
        if (timeLeft < 0) {
            stopGame()
            document.querySelector("#gameLosePopup").style.display = 'block'
        }
    }, 1000)
}


function resetGame() {
    document.querySelectorAll('.planets').forEach((planet, i) => {
        planet.classList.remove('stopped')
        planet.style.animationPlayState="running"
        let num = planet.dataset.num
        if ( planet.dataset.num !== "1") {
            planet.style.cursor= 'initial'
        }
        asteroidMove.play();
        if (timerRunning === false) {
            startTimer(29, document.querySelector('#timer'));
        }
    })
}

function stopGame() {
    document.querySelectorAll('.planets').forEach((planet, i) => {
        planet.style.animationPlayState="paused"
        asteroidMove.pause();
        clearInterval(timer);
        timerRunning = false;
    })
}

document.querySelector('.startButton').addEventListener('click', () => {
    document.querySelector('#splash').style.display = 'none';
    document.querySelector('#game').style.display = 'flex';
    document.querySelector('#timer').style.display = 'initial';
    asteroidMove.play()
    if (timerRunning === false) {
        startTimer(29, document.querySelector('#timer'));
    }
})

document.querySelector('#closeWinModal').addEventListener('click', () => {
    //runTimer()
    document.querySelector("#gameWinPopup").style.display = "none"
    resetGame()
})

document.querySelector('#closeLoseModal').addEventListener('click', () => {
    //runTimer()
    document.querySelector("#gameLosePopup").style.display = "none"
    resetGame()
})


// to do
// timer, asteroids, styling, remove event listeners

document.querySelectorAll('.planets').forEach((planet, i) => {
    planet.addEventListener('click', () => {
        let num = planet.dataset.num
        if (document.querySelector('[data-num="' + (num-1) + '"]').classList.contains('stopped') &&
            planet.dataset.num !== "8" )
        {
            planet.style.animationPlayState="paused"
            planet.classList.add('stopped')
            let next = parseInt(num)+1
            document.querySelector('[data-num="' + next + '"]').style.cursor = 'pointer'
        }

        if(document.querySelector('[data-num="' + (num-1) + '"]').classList.contains('stopped') &&
            planet.dataset.num === "8")
        {
            planet.style.animationPlayState="paused"
            planet.classList.add('stopped')
            document.querySelector("#gameWinPopup").style.display = 'block'
            stopGame()
        }
    })
})


const asteroid = document.querySelector('.asteroid')
const asteroidMove = asteroid.animate([
    {transform: 'translate(-1200px,-1200px)'},
    {transform: 'translate(1500px,3020px)'},
    {transform: 'translate(-30px,-30px)'},
    {transform: 'translate(1900px,500px)'},
    {transform: 'translate(900px,1220px)'}
], {
    duration: 20000,
    iterations: Infinity
});
asteroidMove.pause();

asteroid.addEventListener('mouseover', ()=> {
    stopGame()
    document.querySelector("#gameLosePopup").style.display = 'block'
})