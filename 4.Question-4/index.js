// Function to find pairs in the array that sum up to the target
function findFirstPair(arr, target) {
  const result = [];
  //I have declare a set
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const value = target - arr[i];
    if (set.has(value)) {
      result.push([value, arr[i]]);
    }
    set.add(arr[i]);
  }

  return result;
}

//merges the array and sorts it in ascending order
function mergeAndSort(arr) {
  const resultArr = [...arr];
  const sortArray = resultArr.sort((a, b) => a - b);
  return sortArray;
}

// Function to find double combinations that sum up to the target
function findDoublePair(arr, target) {
  const result = [];
  findDoubleCombination(arr, 0, [], 0, result, target);
  return result;
}

// Recursive helper function for findDoublePair
function findDoubleCombination(
  arr,
  index,
  combinationArr,
  sum,
  result,
  target
) {
  if (sum === target) {
    result.push([...combinationArr]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    combinationArr.push(arr[i]);
    findDoubleCombination(
      arr,
      i + 1,
      combinationArr,
      sum + arr[i],
      result,
      target
    );
    combinationArr.pop();
  }
}

function finalResult(inputArray, target) {
  const firtPairArray = findFirstPair(inputArray, target);
  console.log(`First Combination For "${target}":`, firtPairArray);

  const mergedVal = mergeAndSort(inputArray);
  console.log(`Merge Into a single Array:`, mergedVal);

  const doubleTarget = target * 2;
  const secondCombination = findDoublePair(mergedVal, doubleTarget);
  console.log(`Second Combination For "${doubleTarget}":`, secondCombination);
}

const inputArray = [1, 3, 2, 2, -4, 6, -2, 8];
const targettValue = 4;
finalResult(inputArray, targettValue);
