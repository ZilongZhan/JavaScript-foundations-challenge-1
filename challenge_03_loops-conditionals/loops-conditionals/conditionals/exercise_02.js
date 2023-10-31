/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/

const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}

/* What's happening here is that the 'age' variable fits the condition of the second conditional branch of being 
equal OR larger than 3 (in this case 20 is larger than 3), so the program forgoes checking the remaining conditionals. 

One way to fix this would be to make program compare the variable within a range of values, instead of individual ones. 
To do that we simply append a logical AND conditonal to each branch that makes sure the variable stays within the desired 
value range. Otherwise, the program jumps to the next branch.
*/

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3 && age < 13) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13 && age < 18) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
