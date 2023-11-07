/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

checkEven();
console.log("\n");
checkOdd();

function checkEven() {
  for (let index = 10; index <= 40; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}

function checkOdd() {
  for (let index = 10; index <= 40; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
}
