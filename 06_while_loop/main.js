// let laps = 1

// while (laps <= 3) {
//     document.getElementById('result').innerHTML += "Lap " + laps + " is completed <br>"
//     laps++  
// }


for (let laps = 1; laps <= 5; laps++) {

    if (laps === 4) {
        continue;
    }

    document.getElementById('result').innerHTML += `Lap ${laps} is completed <br>`
}