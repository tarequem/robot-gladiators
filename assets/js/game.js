var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2; 
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
        // if player did not chose 1 or 2 in prompt
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
};// end of fight function

// run fight function to start game
fight();


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

*/