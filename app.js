const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')

let winning_score = 3
let p1Score = 0
let p2Score = 0
let isGameOver = false

function updatedScores(player, opponent) {
    if (!isGameOver) {
        player.score++
        if (player.score === winning_score) {
            isGameOver = true
            player.display.classList.add('has-text-success')
            player.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click', function () {
    updatedScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updatedScores(p2, p1)
})


playTo.addEventListener('change', function () {
    winning_score = parseInt(this.value)
    reset();
})

resetButton.addEventListener('click', reset)


function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}