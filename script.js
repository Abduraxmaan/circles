const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board');

let time = 0,
    score = 0;




startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})



timeList.addEventListener('click', (e) => {
    // console.log(e.target);

    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let attr = e.target.getAttribute('data-time');
        time = Number(attr)
        startGame()
    }
})

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`
        }

        timeEl.innerHTML = `00:${currentTime}`
    }
}


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}




function createCircle(min, max) {
    return Math.random() * (max - min) + min;
}


function createRandomCircle() {
    const circle = document.createElement('div');

    circle.classList.add('circle')

    circle.style = `width: ${createCircle(10, 50)}px;
                    height: ${createCircle(10, 50)}px;`
                    
    boardSize = board.clientWidth - circle.clientWidth
    boardHeight = board.clientWidth - circle.clientHeight
    
    // circle.style = ` left:${boardSize}px;
    //                 top:${boardHeight}px;`
                    
            board.appendChild(circle)
}


board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})

