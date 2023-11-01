/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

checkEven(10);
console.log("\n");
checkOdd(10);

function checkEven(index) {
  while (index <= 40) {
    if (index % 2 == 0) {
      console.log(index);
    }
    index++;
  }
}

function checkOdd(index) {
  while (index <= 40) {
    if (index % 2 != 0) {
      console.log(index);
    }
    index++;
  }
}
