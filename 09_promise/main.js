// setTimeout(() => {
//     document.getElementById('result').innerHTML = "Time is completed!"
// }, 10000);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false

      if (success) {
        resolve("User data fetched!");
      } else {
        reject("Error fetching Data!");
      }
    }, 5000);
  });
}

fetchData()
  .then((success) => {
    document.getElementById("result").innerHTML = success;
  })
  .catch((failure) => {
    document.getElementById("result").innerHTML = failure;
  })
  .finally( () => {
    console.log("Task Completed!")
  });
