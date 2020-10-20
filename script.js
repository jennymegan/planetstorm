
function runTimer () {
    let sec = 30
    setInterval(function() {
        document.querySelector("#timer").innerHTML = sec
        sec--
        if (sec === 0) {
            clearInterval()
        }
    }, 1000)
}

function runGame () {
    document.querySelector('.rotateNeptune').style.cursor = 'pointer'
    document.querySelector('.rotateNeptune').addEventListener('click', () => {
        document.querySelector('.rotateNeptune').style.animationPlayState="paused"
        document.querySelector('.rotateUranus').style.cursor = 'pointer'
        document.querySelector('.rotateUranus').addEventListener('click', () => {
            document.querySelector('.rotateUranus').style.animationPlayState="paused"
            document.querySelector('.rotateSaturn').style.cursor = 'pointer'
            document.querySelector('.rotateSaturn').addEventListener('click', () => {
                document.querySelector('.rotateSaturn').style.animationPlayState="paused"
                document.querySelector('.rotateJupiter').style.cursor = 'pointer'
                document.querySelector('.rotateJupiter').addEventListener('click', () => {
                    document.querySelector('.rotateJupiter').style.animationPlayState="paused"
                    document.querySelector('.rotateMars').style.cursor = 'pointer'
                    document.querySelector('.rotateMars').addEventListener('click', () => {
                        document.querySelector('.rotateMars').style.animationPlayState="paused"
                        document.querySelector('.rotateEarth').style.cursor = 'pointer'
                        document.querySelector('.rotateEarth').addEventListener('click', () => {
                            document.querySelector('.rotateEarth').style.animationPlayState="paused"
                            document.querySelector('.rotateVenus').style.cursor = 'pointer'
                            document.querySelector('.rotateVenus').addEventListener('click', () => {
                                document.querySelector('.rotateVenus').style.animationPlayState="paused"
                                document.querySelector('.rotateMercury').style.cursor = 'pointer'
                                document.querySelector('.rotateMercury').addEventListener('click', () => {
                                    document.querySelector('.rotateMercury').style.animationPlayState="paused"
                                    document.querySelector("#gameWinPopup").style.display = 'block'
                                    clearInterval(runTimer)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}





document.querySelector('.startButton').addEventListener('click', () => {
    document.querySelector('#splash').style.display = 'none';
    document.querySelector('#game').style.display = 'flex';
    //runTimer()
    runGame()
})

document.querySelector('#closeWinModal').addEventListener('click', () => {
    //runTimer()
    document.querySelector("#gameWinPopup").style.display = "none"
    document.querySelectorAll('.planets').forEach((planet) => {
        //planet. remove event listeners
        planet.style.animationPlayState="running"
        planet.style.cursor = "default"
    })
    runGame()
})


// to do
// timer, asteroids, styling, remove event listeners
// find the next planet and apply the event listener
//add event listeners to all planets at the start - inside event listener check if previosu one has been clicked and if not, do nothing
//give each a number - this one is 5, has 4 stopped ? Or add a class "stopped" when they stop - check whether they have that class.

document.querySelectorAll('.planets').forEach((planet) => {
    if
    planet.addEventListener('click')
})
element.classList.contains('stopped')