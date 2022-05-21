// pseudocode: Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            /*
            Ask the player if they want to "shop"
            If no, continue as normal
            If yes, call the shop() function
            In the shop() function, ask player if they want to "refill" health, "upgrade" attack, or "leave" the shop
            If refill, subtract money points from player and increase health
            If upgrade, subtract money points from player and increase attack power
            If leave, alert goodbye and exit the function
            If any other invalid option, call shop() again
            */
          break;
        }
    }
     // remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;
     console.log(
       playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
     );
 
     // check enemy's health
     if (enemyHealth <= 0) {
       window.alert(enemyName + ' has died!');
 
       // award player money for winning
       playerMoney = playerMoney + 20;

       //would you like to shop?

       // leave while() loop since enemy is dead
       break;
     } else {
       window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
     }
 
     // remove players's health by subtracting the amount set in the enemyAttack variable
     playerHealth = playerHealth - enemyAttack;
     console.log(
       enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
     );
 
     // check player's health
     if (playerHealth <= 0) {
       window.alert(playerName + ' has died!');
       // leave while() loop if player is dead
       break;
     } else {
       window.alert(playerName + ' still has ' + playerHealth + ' health left.');
     }
   } // end of while loop
 }; // end of fight function

 //function to start a new game
 var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    //if player still alive, player wins
    if (playerHealth > 0) {
        wwindow.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// start the game when the page loads
startGame();



//    window.alert("The game has now ended. Let's see how you did!");



/* everything below is for learning and practicing purposes from the module
// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
// Note the lack of quotation marks around playerName
//window.alert(playerName);
console.log(playerName);
console.log("This logs a strign, good for leaving yourself a message");
//this will do math and log 20
console.log(10 + 10);
//what is this?
console.log("Our robot's name is " + playerName);

function fight() {
    window.alert("The fight as begun!");
}

//fight();

var playerHealth = 10;

if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

var confirmSkip = true;

if (confirmSkip === true) {
  // do something
}

if (confirmSkip) {
  // do something
}

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames[3]);
console.log(enemyNames.length);

for(var i = 0; i < 3; i++) {
    console.log("apple", i)
}

var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;
            //if no (false), ask question again by running fight() again
            else {
                fight();
            }


            for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
    
        // reset enemyHealth before starting new fight
        enemyHealth = 50;
    
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
    
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
*/