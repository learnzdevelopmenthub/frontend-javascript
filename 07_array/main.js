// let fruits = ["apple", "banana", "orange", "mango"]


// fruits.forEach(function(item, index, array) {
//    document.getElementById('result').innerHTML += `${index} - ${item}<br>`
// })

// Ignoring first parameter 
// fruits.forEach(function(_, index, array) {
//    document.getElementById('result').innerHTML += `${index} - ${item}<br>`
// })



// let numbers = [ 10, 20, 30, 40, 50]

// let filteredNumber = numbers.filter(item => item > 20)

// console.log(filteredNumber)


// let filteredFruits = fruits.filter(item => {
//     return !item.includes("o")
// })

// console.log(filteredFruits)

let numbers = [ 10, 20, 30, 40, 50]

let filteredNumber = numbers.find(function(item) {
    return item > 20
})

console.log(filteredNumber)