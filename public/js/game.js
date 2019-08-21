
playerOne = {
  name: name,
  health: 100,
  power: 10,
  alive: true,
  turn: true,
  monster: false
};

// playerTwo = {
//   name: name,
//   health: 100,
//   power: 10,
//   alive: true,
//   turn: false,
//   monster: false
// };

// playerThree = {
//   name: name,
//   health: 100,
//   power: 10,
//   alive: true,
//   turn: false,
//   monster: false
// };

enemy = {
  health: 50,
  power: 9,
  alive: true,
  turn: false,
  monster: true
};
party = [playerOne, enemy];

currentTurn = 0;

choice = null;

$("body").on("click", "#action-btn", function(){
  choice = $("#action-btn").val();
  console.log(choice);
  battle();
});

function battle() {
  action();
}

function action() {
  playerBeforeEnemy = party.length - 2;

  if (currentTurn == playerBeforeEnemy){
    switch (choice) {
    case "attack":
      attack();
      break;
    case "heal":
      heal();
      break;
    default:
      console.log("Mistakes were made");
      break;
    };
  var enemyTurn = window.setTimeout(function() {
      enemyChoice = Math.ceil(Math.random() * 2);
      console.log("MONSTER TURN");
      switch (enemyTurn) {
      case 1:
        attack();
        break;
      case 2:
        heal();
        break;
      default:
        console.log("Mistakes were made");
        break;
      }
      
    }, 2500);
  } else {
    switch (choice) {
    case "attack":
      attack();
      break;
    case "heal":
      heal();
      break;
    default:
      console.log("Mistakes were made");
      break;
    }
  }

}

function updateStats() {
  for (k = 0; k < party.length - 1; k++) {
    partyHealth += party[k].health;
  }
  totalParty = party.length - 1;
  enemyHealth = party[totalParty].health;
  if (enemyHealth <= 0 && partyHealth <= 0) {
    //the game ends with game over screen
  } else if (enemyHealth <= 0) {
    //the game ends and move onto the next battle.
  } else if (partyHealth <= 0) {
    //the game ends with game over screen.
  } else {
    changeTurn();
  }
}


// function changeTurn() {
//   if (currentTurn == 0) {
//     currentTurn == 1;

// //listening for animation
// //listen for  -  on player status:ready
// //run turn();
// //in turn function run target
// //in target function, on player choice (button press), run choice(); function.
// //choice updates stats and plays animation and makes next choice.

// function turn() {
//   console.log("turn");

//   //choose character, update status to Ready.

//   //update each player status.

//   //target();

//   action();
// }

// //choose character you to affect.

// // function target() {
// //   $("body").on("click", "#action-btn", function() {
// //     choice = this.val();
// //     console.log(choice);

// //     action(choice);
// //   });
// // }

// //choose what you want that character to do.
// function action() {
//   whosTurn = party[currentTurn];


//   console.log("action");


//   if (whosTurn.monster == true) {
//     choice === Math.ceil(Math.random() * 2);
//     console.log("MONSTER TURN");
//     switch (choice) {
//     case 1:
//       attack();
//       console.log("that SOB attacked!");

//       break;

//     case 2:
//       console.log("that SOB healed!");
//       recover();
//       break;
//       //*BONUS 3 would be for special ability.
//     case 3:
//       break;
//     default:
//       console.log("It didn't work you muppit");
//       break;
//     }

//     changeTurn();
// >>>>>>> 8cba4a45c2367a6315f2ccede522ae97ed2464d9
//   } else {
//     currentTurn == 0;
//   }
// }

// function attack(){

// };

// function heal(){

// };



// <<<<<<< HEAD

// //============= MULTIPLAYER CODE FOR FUTURE RELEASE==================================
  
// //   party = [playerOne, enemy];
  
// //   partyHealth = 100;
  
// //   currentTurn = 0;
  
// //   totalParty = 0;
  
// //   ranNum = null;
  
// //   whosTurn = party[currentTurn];
  
// //   newTurn = false;
  
// //   choice = 1;
  
// //   $("body").on("click", "#action-btn", function() {
// //     choice = this.val();
// //     console.log(choice);

//   //========FUTURE CODE FOR MULTIPLAYER=====================
  
//   //ON LISTEN RUN battle();
  
//   //function to update the game stats(health, alive/dead) in player object and
//   //in the created mySQL game.
  
//   //function that changes the player/monster turn through the party array.
//   //checking whos turn it is and if the next person is alive for the turn.
  
//   // function changeTurn() {
//   //   console.log("change turn");
  
//   //   for (i = 0; i < party.length; i++) {
//   //     console.log(i)
//   //     var playerTurn = party.length - 1;
//   //     if (party[i].turn == true) {
//   //       party[i].turn == false;
  
//   //       if (i == 3) {
//   //         for (i = 0; i < party.length; i++) {
//   //           if (party[i].alive == true && party[i].turn == false) {
//   //             party[i].turn == true;
//   //             currentTurn = i;
//   //             whosTurn = party[i]
//   //             console.log("monster turn code")
//   //             console.log(whosTurn)
//   //             break;
//   //           }
  
//   //           break;
//   //         }
//   //       } else if (i < playerTurn) {
//   //         console.log(i)
  
//   //         var g = i + 1;
  
//   //         for (k = g; k < party.length; k++) {
//   //           if (party[k].alive == true && party[k].turn == false) {
//   //             party[k].turn == true;
  
//   //             currentTurn == k;
//   //             whosTurn = party[k]
//   //             console.log(k)
//   //             console.log("player turn code")
//   //             console.log(whosTurn)
  
//   //             break;
//   //           }
//   //         }
  
//   //         break;
//   //       }
//   //     }
//   //   }
  
//   // //   battle();
  
//   // // }
//   // //if alive = true, turn = true else
//   // function changeTurn() {
//   //   if (currentTurn === 0){
//   //       currentTurn = 1;
//   //   }else{
//   //       currentTurn = 0;
//   //   }
  
//       //   for (j = 0; j < party.length; j++) {
//       //     if (party[j].turn == true) {
//       //       totalParty = party.length - 1;
//       //       party[j].turn == false;
//       //       if (j == totalParty) {
//       //         console.log("check 1")
//       //         for (k = 0; k < party.length; k++) {
//       //           if (party[k].alive == true) {
//       //             party[k].turn == true;
//       //             currentTurn == k;
//       //             newTurn == true;
//       //             console.log("check 2")
//       //             break;
//       //           }
//       //         }
//       //         if(newTurn == true){
//       //           console.log("check 3")
//       //         newTurn == false;
//       //         break;
//       //         }
  
//       //       }
  
//       //     } else{
//       //       console.log("check 5")
//       //       var checkNext = j + 1;
//       //       for(m = checkNext; m < party.length; m++){
//       //         console.log("check 5.1")
//       //         if (party[m].alive == true) {
//       //           console.log("check 6")
//       //           party[m].turn == true;
//       //           currentTurn == m;
//       //           newTurn == true;
//       //           break;
//       //         }else if(party[totalParty].alive == false){
//       //           console.log("check 7")
//       //           for (p = 0; p < party.length; p++) {
//       //             console.log("check 8")
//       //             if (party[p].alive == true) {
//       //               console.log("check 9")
//       //               party[p].turn == true;
//       //               currentTurn == p;
//       //               newTurn == true;
//       //               break;
//       //               }
//       //            }
//       //         }
//       //       }
//       //       if(newTurn == true){
//       //         console.log("check 10")
//       //         newTurn == false;
//       //         break;
//       //     }
//       //   }
//       // }
//       //   console.log("Whos Turn:" + currentTurn);
//   //     console.log;;
//   // //   battle();
//   // // }
  
//   // //checks if the battle is over, if not it runs another turn.
//   // function battle() {
//   //   console.log("started");
//   //   updateStats();
  
//   //   //loop to add entire party health to check if they party has died.
//   //   //allows for expansion of the part to more than 3 characters in the future.
  
//   //   for (k = 0; k < party.length - 1; k++) {
//   //     partyHealth += party[k].health;
//   //   }
//   //   totalParty == party.length - 1;
//   //   enemyHealth = party[totalParty].health;
//   //   if (enemyHealth <= 0 && partyHealth <= 0) {
//   //     //the game ends with game over screen
//   //   } else if (enemyHealth <= 0) {
//   //     //the game ends and move onto the next battle.
//   //   } else if (partyHealth <= 0) {
//   //     //the game ends with game over screen.
//   //   } else {
//   //     turn();
//   //   }
//   // }
  
//   // //listening for animation
//   // //listen for  -  on player status:ready
//   // //run turn();
//   // //in turn function run target
//   // //in target function, on player choice (button press), run choice(); function.
//   // //choice updates stats and plays animation and makes next choice.
  
//   // function turn() {
//   //   console.log("turn");
  
//   //   //choose character, update status to Ready.
  
//   //   //update each player status.
  
//   //   //target();
  
//   //   // for (i = 0; i < party.length; i++) {
//   //   //   if (party[i].turn == true) {
//   //   //     currentTurn = i;
//   //   //   }
//   //   // }
  
//   //   action();
//   // }
  
//   // //choose character you to affect.
  
//   // // function target() {
//   // //   $("body").on("click", "#action-btn", function() {
//   // //     choice = this.val();
//   // //     console.log(choice);
  
//   // //     action(choice);
//   // //   });
//   // // }
  
//   // //choose what you want that character to do.
//   // function action() {
//   //   // for (i = 0; i < party.length; i++) {
//   //   //   if (party[i].turn == true) {
//   //   //     currentTurn == i;
//   //   //   }
//   //   // }
//   //   // whosTurn = party[currentTurn];
//   //   // console.log(currentTurn);
  
//   //   // console.log("action");
  
//   //   // if (whosTurn.monster == true) 
//   //   if(currentTurn === 1){
//   //     window.setInterval(function() {
//   //         choice = Math.ceil(Math.random() * 2);
//   //         console.log("MONSTER TURN");
//   //         switch (choice) {
//   //           case 1:
//   //         attack();
  
//   //             console.log("that SOB attacked!");
  
//   //             break;
  
//   //           case 2:
//   //             console.log("that SOB healed!");
//   //           recover();
  
//   //             break;
//   //         //*BONUS 3 would be for special ability.
//   //       case 3:
//   //           break;
//   //         default:
//   //             console.log("It didn't work you muppit");
//   //           break;
//   //         }
  
//   //       }, 2000);
//   //   } else {
//   //     $("#action-btn").on("click", function() {
//   //       choice = $("#action-btn").val();
  
//   //       switch (choice) {
//   //       case "attack":
//   //           attack();
            
//   //           console.log("KILL");
//   //           break;
  
//   //       case "recover":
//   //         console.log("HEAL");
//   //         recover();
          
//   //         break;
//   //         //*BONUS 3 would be for special ability.
//   //       case 3:
//   //         break;
//   //       default:
//   //         console.log("It didn't work you muppit");
//   //         break;
//   //       }
//   //     });
//   //   }
//   //   changeTurn();
//   // }
  
//   // function attack() {
//   //   diceRoll();
  
//   //   console.log("attack");
  
//   //   if (whosTurn === true) {
//   //     switch (ranNum) {
//   //       case 1:
//   //         break;
//   //       case 2:
//   //         break;
//   //       case 3:
//   //         break;
//   //       case 4:
//   //         break;
//   //       default:
//   //         console.log("It didn't work you muppit");
//   //         break;
//   //     }
//   //   } else {
//   //   }
  
//   //   changeTurn();
//   // }
  
//   // function recover() {
//   //   console.log("recover");
  
//   //   changeTurn();
//   // }
  
//   // function diceRoll() {
//   //   ranNum = Math.ceil(Math.floor() * 20);
//   // }
  
//   // function updateStats() {
//   //     console.log("updated stats");
//   // }
//   // battle();
// =======
// function diceRoll() {

//   ranNum = Math.ceil(Math.floor() * 20);
// }

// battle();

// >>>>>>> 8cba4a45c2367a6315f2ccede522ae97ed2464d9
