/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

if (true && console.log("moo"));

/* this line uses the logical 'AND' operator, meaning that both conditions must be 
met for the expression to be true. Since the first condition is true, 
it goes on to evaluate the second conditional and "moo" is printed. */

if (false && console.log("moo moo?"));

/*this line also uses the logical 'AND' operator. In this case, since the first condition 
is already not met, it forgoes to evaluate the second condition, as it would be 
irrelevant to the result, which is why "moo moo?" is not printed.*/

if (true || console.log("hello friend"));

/*this line of code uses the logical 'OR' operator, meaning that the expression will
be true as long as either condition is met. In this case, the first condition is already true,
so it doesn't need to check the second conditional, which is why "hello friend" is not printed*/

if (false || console.log("bye friend"));

/*this line of code also uses the logical 'OR' operator. In this case, since the first condition is not met,
it goes on to evaluate the second conditional, which is why "bye friend" is printed.*/
