/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"

    HINT1: Be careful for an infinite loop!
*/

let loggedIn;
let index = 1;

while (!loggedIn) {
  console.log("Incorrect login credentials");

  if (index === 3) {
    loggedIn = true;
  } else {
    index++;
  }
}
console.log("Sucessfully logged in!");
