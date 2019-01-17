/*
1. Create a function that logs the result of adding two numbers that were passed in as arguments.
2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
3. Invoke each function a couple times with different argument values.
*/

const addNumbers = (first, second) => console.log(first+second)

const subtractNumber = (first,second) => console.log (first - second)

addNumbers(12,23)
subtractNumber(23, 45)
addNumbers (89,45)
subtractNumber(100, 3)


//```Create another function called `calculate` that takes three arguments: two numbers and a function```

const calculate = (first, second, fn) => {
    fn(first, second)
}

calculate(10, 20, addNumbers)
calculate(14,233, subtractNumber)

//write function right there
calculate(22, 7, (first,second) => {
    console.log(first/second)
})