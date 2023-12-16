const myLength = (arr) => {
  let len = 0;
  for (let x of arr) len++;
  return len;
};

// Function to reverse an array
const reverseArray = (arr) => {
  const arrLength = myLength(arr);
  //intilize the empty array
  const outputArray = [];
  let tracker = 0;
  //traverse the loop in reverse order
  for (let i = arrLength - 1; i >= 0; i--) {
    outputArray[tracker++] = arr[i];
  }
  return outputArray;
};

const arr = [2, -5, 6, 5, -8, 7, 5, 4, 6];
let answerArray = reverseArray(arr);

// Print the reversed array to the console
console.log(answerArray);
