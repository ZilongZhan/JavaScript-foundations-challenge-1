# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a scripting or programming language that allows you to implement complex features on web pages, such as interactive content, animated graphics, or anything that doesn't involve just displaying static content.

In other words, it enables you to create dynamically updating content.
```

## About values

### What is a primitive value?

```
In JavaScript, a primitive value is data that is not an object and has no methods or properties. 

They are the simplest and most basic data types and are always immutable,  which means that their values cannot be changed once they are assigned to a variable, the way a non-primitive value would be able to (like an object variable, for example). Instead, they get reassigned a new value every time.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
There are 7 types of primitive values in JavaScript, as of today:

1. String: A sequence of characters, such as text. They are enclosed in single ('') or double ("") quotes.

    "Example String"
```
```
2. Number: It represents both integer and floating-point numeric values.

    int -> 69
    float -> 3.14159
```
```
3. BigInt: It is a newer primitive that allows the representation of arbitrarily large integers. It was created in light of the calculative limitations and inaccuracies involving large values of the regular 'Number' primitive.

    1234567890123456789012345678901234567890n
```
```
4. Boolean: This primitive represents a binary value which can only be either

    true or false
```
```
5. Undefined: It is a special primitive value that indicates a variable has been declared but hasn't been assigned a value yet.

    let example; -> no value yet assigned, just declared
```
```
6. Symbol: It is a unique and immutable data type primarily used as an object property key due to its unique characteristics.

Every symbol value is guaranteed to be unique and they have no semantic meaning, which is why they are often used to create "hidden" or "private" properties in objects.

    const example = Symbol("example");
```
```
7. Null: It represents the intentional absence of any object value. It's often used to signify that a variable is empty or has no value.

    let example = null;
```

## About variables

### What is a variable in JS?

```
In JavaScript, a variable is a named storage location used to store and manage data. They allow you to work with and manipulate values in your programs. 

They provide a way to store data temporarily so that it can be used, modified, or referenced throughout your code. 
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
To define a variable in JS we use the 'var', 'let', and 'const' keywords, depending on the scoping and mutability characteristics you want in the variable.

In modern JS development, it is recommended to avoid using 'var' type variables, as the other 2 options provide better scoping and divert some common variable declaration issues in programming.
```

### Which are the most used var naming conventions in JS?

```
The 2 most commonly used var naming conventions in JS are 'camel case' and 'snake case'.

In 'camel case', compound words are formed by capitalizing the first letter of every word subsequent to the first one, which starts in lowercase. It is by far the most commonly used naming convention in JS.

    exampleVariable

In snake_case, words are separated by underscores (_) and all letters are lowercase. Though not entirely obsolete in JS, this convention is most commonly used in languages like Python.

    example_variable
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
In JS, there are 8 common comparison operators that allow the comparison of different operands.

1. Equality(==): This operator checks if 2 given operands are of equal value.

    1 == 2 -> false
    1 == 1 -> true
```
```
2. Inequality(!=): This operator checks whether 2 given operands are of different value.

    1 != 2 -> true
    1 != 1 -> false
```
```
3. Strict equality(===): This operator not only check whether 2 given operands are of equal value, but also if they share the same value type. In other words, no type coercion needed.

    1 === 1 -> true
    1 === "1" -> false

Since double quotation marks are strictly present in values of type 'String', it differs in type from the first value, which is 'Numerical'.
```
```
4. Strict inequality(!==): This operator performs the same way as the last one but it checks for inequality instead of equality.

    1 !== 1 -> false, since they are of equal value and type
    1 !== 2 -> true, since they are of unequal value
    1 !== "1" -> true, since they do not share value type
```
```
5. Greater than(>): This operator checks if the first operand value is greater(bigger) than the following one.

    1 > 1 -> false
    1 > 2 -> false
    2 > 1 -> true
```
```
6. Lesser than(<): This operator checks if the first operand value is lesser (smaller) than the following one.

    1 < 1 -> false
    1 < 2 -> true   
```
```
7. Greater than or equal to(>=): This operator checks whether if the first operand is bigger OR equal to the second one. It will return 'true' upon meeting either condition.

    1 >= 1 -> true
    1 >= 2 -> false
    1 >= 0 -> true
```
```
8. Lesser than or equal to(<=): This operator performs the same way as the previous one except one of the conditions is for the first operand to be lesser than the second one.

    1 <= 1 -> true
    1 <= 2 -> true
    1 <= 0 -> false
```
```
It is important to consider that how these operators function is also dependant on the operand's type. With 'String' type values, for example, the comparison is performed in lexicographic order.

    "example" < "example1" -> true
    1 < "example" -> true (1 is coerced into type 'String')
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
There are 3 common logical operators used in JS that allow the comparison of various operands.

1. Logical AND(&&): This operator will return 'true' if both operands are 'true' or return 'true'.

    true && true -> true
    (1 == 1) && (2 == 2) -> true
    false && true -> false
    (1 < 1) && (2 == 2) -> false
```
```
2. Logical OR(||): This operator will return 'true' if either/both operand is 'true' or returns 'true' and it will only return false if both operands are 'false' or return 'false'.

    true || true -> true
    false || false -> false
    false || true -> true
    (1 < 1) || (2 == 2) -> true
```
```
3. Logical NOT(!): This operator negates the Boolean value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.

    !false -> true
    !true -> false
    !(1 == 1) -> false
    !(1 < 1) -> true
```
