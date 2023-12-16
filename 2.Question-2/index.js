// function called isNumberPrime that takes a number as a parameter
function isNumberPrime(number) {
  // If the number is equal to 1 or less than 1 (negative or zero), return false (not prime)
  if (number <= 1) {
    return false;
  }

  // Use a for loop to iterate from 2 to the number (exclusive)
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  // If the loop completes without finding a divisor, return true (prime)
  return true;
}

let number = 10;
let result = isNumberPrime(number);

// Check the result and print whether the number is prime or not to the console
if (result) {
  console.log(`${number} is Prime`);
} else {
  console.log(`${number} is Not Prime`);
}
