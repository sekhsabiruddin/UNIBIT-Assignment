// Define a function called displayFizzAndBuzz
function displayFizzAndBuzz(n) {
  // Initialize an empty string variable called output
  let output = "";
  // Use a for loop to iterate from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // If i is divisible by both 3 and 5, concatenate "Buzz Fizz" to the output variable
    if (i % 3 == 0 && i % 5 == 0) {
      output += `Buzz Fizz`;
    }
    // If i is divisible by 3, concatenate "Fizz" to the output variable
    else if (i % 3 == 0) {
      output += `Fizz`;
    }
    // If i is divisible by 5, concatenate "Buzz" to the output variable
    else if (i % 5 == 0) {
      output += `Buzz`;
    }
    // If i is not divisible by either 3 or 5, concatenate the value of i to the output variable
    else {
      output += `${i}`;
    }
    //if i not equal to n concate the space with output varibale
    if (i != n) {
      output += " ";
    }
    //or else add one full stop at end
    else {
      output += ".";
    }
  }

  return output;
}

const result = displayFizzAndBuzz(10);

console.log(result);
