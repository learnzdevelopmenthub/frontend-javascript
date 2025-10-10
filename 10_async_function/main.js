async function getInfo() {
  let success = false;

  if (success) {
    return "Success: This is user information.";
  } else {
    throw "Error: This is a error message";
  }
}

document.getElementById("clickBtn").addEventListener("click", async () => {

    try {
        let result = await getInfo()
        document.getElementById('result').innerHTML = result
    } catch (error) {
        document.getElementById('result').innerHTML = error
    }

     


});
