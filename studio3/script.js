(function(){
    'use strict'
    console.log('reading JS');
    
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    const rollBtn = document.getElementById('roll');
    const rollAgainBtn = document.getElementById('rollagain');
    
    const boingSound = new Audio('sounds/boing.mp3');
    const victorySound = new Audio('sounds/victory.mp3');

    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    /* rollBtn.addEventListener('mousedown', function(){
        boingSound.play();
    });

    rollAgainBtn.addEventListener('mousedown', function(){
        boingSound.play();
    }); */

   /*  //This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum */

    startGame.addEventListener('click', function(){
        // random set of game index
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Quit the game</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            boingSound.play();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //console.log(gameData.rollSum);

        if (gameData.rollSum === 2){
            //console.log("snake eyes!");
            game.innerHTML = '<p>Sorry, you have rolled snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            //console.log("A one was rolled!");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a 1, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            //console.log("The game continues");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll Again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            //check winning condition
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins the game with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new game?";
            victorySound.play();
        } else {
            //show current score
            showCurrentScore(); 
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p><strong>Score for ${gameData.players[0]}: ${gameData.score[0]}</strong><br><strong>Score for ${gameData.players[1]}: ${gameData.score[1]}</strong>`;
    }

})();