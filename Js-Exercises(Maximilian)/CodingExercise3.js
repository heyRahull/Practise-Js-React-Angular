// Exercise: Executing Functions Directly & Indirectly
// For this exercise, you should create two new functions:

// A double function that takes a single value and returns the doubled value (e.g., returns 4 for input 2)

// A transform function that takes two inputs:

// A number as a first argument

// Another function (!) as the second argument

// For the function that should be passed to transform, the goal is to call that received function inside of transform and pass the number argument into it. The result produced by calling that received function (b) with the received number (a) inside of transform should then be returned by transform.

// I.e., transform should be callable like this:

// transform(10, double);
// And this should return 20 as a value (because double should be executed inside of transform and receive 10 as an input there).

// Todo: Your solution code goes here
function double (num1) {
    return num1*2;
}

function transform (num1,foo) {
    return foo(num1);
}

transform(10, double);
