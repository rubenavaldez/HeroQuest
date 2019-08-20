//import { start } from "repl";


//CHANGE

playerOne = {
  name: name,
  health: 100,
  power: 10,
  alive: true,
  turn: true,
  monster: false
};

playerTwo = {
  name: name,
  health: 100,
  power: 10,
  alive: false,
  turn: false,
  monster: false
};

playerThree = {
  name: name,
  health: 100,
  power: 10,
  alive: false,
  turn: false,
  monster: false
};

enemy = {
  health: 50,
  power: 9,
  alive: true,
  turn: false,
  monster: true
};

party = [playerOne, playerTwo, playerThree, enemy];

turnArray = [];

partyHealth = 100;

currentTurn = 0;

ranNum = null;




//ON LISTEN RUN battle();





//function to update the game stats(health, alive/dead) in player object and
//in the created mySQL game.

function updateStats(){

  console.log("updated")
}


//function that changes the player/monster turn through the party array.
//checking whos turn it is and if the next person is alive for the turn.

function changeTurn(){
    console.log("change turn")

  for (i = 0; i < party.length; i++) {
    if (party[i].turn == true) {
      party[i].turn == false;

      if (party[i] == 3) {
        for (i = 0; i < party.length; i++) {
          if (party[i].alive == true && party[i].turn == false) {
            party[i].turn == true;

            currentTurn == k;

            break;
          }

          break;
        }
      } else {
        currentTurn = i;

        for (k = i; k < party.length; k++) {
          if (party[k].alive == true && party[k].turn == false) {
            party[k].turn == true;

            currentTurn == k;

            break;
          }
        }

        break;
      }
    }
  }

  battle();
}

//checks if the battle is over, if not it runs another turn.
function battle() {
  updateStats();

  //loop to add entire party health to check if they party has died.
  //allows for expansion of the part to more than 3 characters in the future.

  for (k = 0; k < party.length - 1; k++) {
    partyHealth += party[k].health;
  }

  if (party[3].health <= 0 && partyHealth <= 0) {
    //the game ends with game over screen
  } else if (party[3].health <= 0) {
    //the game ends and move onto the next battle.
  } else if (partyHealth <= 0) {
    //the game ends with game over screen.
  } else {
    turn();
  }
}

//listening for animation
//listen for  -  on player status:ready
//run turn();
//in turn function run target
//in target function, on player choice (button press), run choice(); function.
//choice updates stats and plays animation and makes next choice.

function turn() {

    console.log("turn")

  //choose character, update status to Ready.

  //update each player status.

  //target();

  action();
}

//choose character you to affect.
function target() {
  $("body").on("click", "#action-btn", function() {
    choice = this.val();
    console.log(choice);

    action(choice);
  });
}

//choose what you want to that character.
function action() {

var whosTurn = party[currentTurn]

    console.log("action")

  if(whosTurn.monster === true) {
    choice === Math.ceiling(Math.random() * 2);

    switch (choice) {
      case 1:
        attack();
        console.log("that SOB attacked!")

        break;

      case 2:
        console.log("that SOB healed!")
        recover();
        break;
      //*BONUS 3 would be for special ability.
      case 3:
        break;
      default:
        console.log("It didn't work you muppit");
        break;
    }
  } else {

choice = $("#action-btn").val();

    switch (choice) {
      case "attack":
        attack();
        break;

      case "recover":
        recover();
        break;
      //*BONUS 3 would be for special ability.
      case 3:
        break;
      default:
        console.log("It didn't work you muppit");
        break;
    }
  }
}

function attack() {
  diceRoll();

  console.log("attack")

  if (whosTurn === true) {
    switch (ranNum) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        console.log("It didn't work you muppit");
        break;
    }
  } else {
  }

  changeTurn();
}

function recover() {

 console.log("recover")

  changeTurn();
}

function diceRoll() {
  ranNum = Math.ceiling(Math.floor() * 20);
}


battle();

