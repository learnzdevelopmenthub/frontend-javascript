let numbers = [1, 2, 3, 4]

let doubledArray = numbers.map(num => num * 2)
console.log(doubledArray)


function greet(name) {
    return `Hello, ${name}`
}

function greetUser(fn) {
    console.log(fn("Thamizh"))
}


greetUser(greet)


greet("Thamizh")


function add(a, b) {
    return a + b
}


function calculate(fn) {
    console.log(fn(1, 2))
}

calculate(add)


function multiplier(factor) {
    
    return function(number) {
        return number * factor
    }
}

function outer() {
    let counter = 0;

    return function inner() {
        counter++;
        return counter;
    }
}
