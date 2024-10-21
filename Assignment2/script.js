// Using Callback
function sumNumbersWithCallback(numbers, callback) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  callback(sum);
}

function calculateUsingCallback() {
  sumNumbersWithCallback([1, 2, 3, 4], function (result) {
    document.getElementById("result").innerText =
      "Sum using callback: " + result;
  });
}

// Using Promises
function sumNumbersWithPromise(numbers) {
  return new Promise((resolve, reject) => {
    if (numbers.length === 0) {
      reject("No numbers to sum");
    } else {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      resolve(sum);
    }
  });
}

function calculateUsingPromise() {
  sumNumbersWithPromise([1, 2, 3, 4])
    .then((result) => {
      document.getElementById("result").innerText =
        "Sum using promise: " + result;
    })
    .catch((error) => {
      document.getElementById("result").innerText = "Error: " + error;
    });
}

// Using Async/Await
async function calculateUsingAsyncAwait() {
  try {
    let sum = await sumNumbersWithPromise([1, 2, 3, 4]);
    document.getElementById("result").innerText =
      "Sum using async/await: " + sum;
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error;
  }
}
