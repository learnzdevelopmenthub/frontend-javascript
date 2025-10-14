import config, {add} from "./math.js";

document.getElementById('addBtn').addEventListener('click', () => {

    let number1 = parseInt(document.getElementById('input1').value)
    let number2 = parseInt(document.getElementById('input2').value)

    document.getElementById('result').innerHTML = add(number1, number2)
})

