// let isRaining = false

// if (isRaining) {
//     document.getElementById('result').innerHTML = "Take an Umberlla!"
// }


document.getElementById('checkButton').addEventListener('click', () => {

    let age = parseInt(document.getElementById('ageInput').value)
    let disablity = false

    if(age >= 60 && disablity) {
        document.getElementById("result").innerHTML = "You're Eligible to Special Voting! and Senior citizen too."
    } else if (age >= 18) {
        document.getElementById("result").innerHTML = "You're Eligible to Vote!"
    } else {
        document.getElementById("result").innerHTML = "You're too young to Vote!"
    }
})

