/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

evenOdd(2); //Number is even.
evenOdd(3); //Number is odd.
evenOdd(8); //Number is even.

function evenOdd(number) {
  if (number % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
