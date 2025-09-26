
document.getElementById('joinBtn').addEventListener('click', () => {
    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').textContent;

    document.getElementById('result').innerHTML = fName + " " + lName;
});