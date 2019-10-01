const choices = [...document.querySelectorAll('.select img')];
const startBtn = document.querySelector('button.start');
const resetBtn = document.querySelector('button.reset');
const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: '',
    aiHand: '',
}

//FUNKCJE
//obramowanie klikniętego zdjęcia
function playerChoice() {
    choices.forEach(choice => choice.style.border = '');
    game.playerHand = this.dataset.option;
    this.style.border = '5px solid #BF5B21';
}

//losowanie opcji komputera
function aiChoice() {
    const aiHand = choices[Math.floor(Math.random() * choices.length)].dataset.option;
    return aiHand;
}

//porównanie wyników
function checkResult(player, ai) {
    if (player === ai) return 'draw';
    else if ((player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier') || (player === 'papier' && ai === "kamień")) return 'win';
    else return 'loss';
}

//publikacja wyników 
function showResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.games;
    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="winner"]').textContent = "Wygrałeś! :D"
        document.querySelector('[data-summary="winner"]').style.color = "#61A608";
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="winner"]').textContent = "Przegrałeś! :(((";
        document.querySelector('[data-summary="winner"]').style.color = "#A60D01";

    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="winner"]').textContent = "Remis! :O"
        document.querySelector('[data-summary="winner"]').style.color = "#BF8665";
    }
}

//czyszczenie obramowania
const clean = () => {
    choices.forEach(choice => choice.style.border = '');
    game.playerHand = '';
    game.aiHand = '';
}

//funkcja sterująca
const startGame = () => {
    if (!game.playerHand) {
        alert('Wybierz opcję :)');
        return
    };
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    showResult(game.playerHand, game.aiHand, gameResult);
    clean();
}

//reset wszystkich wyników
const resetGame = () => {
    console.log('działa')
    gameSummary.games = 0;
    gameSummary.wins = 0;
    gameSummary.losses = 0;
    gameSummary.draws = 0;
    game.playerHand = '';
    game.aiHand = '';
    document.querySelector('[data-summary="your-choice"]').textContent = "";
    document.querySelector('[data-summary="ai-choice"]').textContent = "";
    document.querySelector('p.numbers span').textContent = 0;
    document.querySelector('p.wins span').textContent = 0;
    document.querySelector('p.losses span').textContent = 0;
    document.querySelector('p.draws span').textContent = 0;
    document.querySelector('[data-summary="winner"]').textContent = "";
}

//nasłuchiwanie
choices.forEach(choice => {
    choice.addEventListener('click', playerChoice)
});
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);