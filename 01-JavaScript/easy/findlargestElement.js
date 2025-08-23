/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(nums) {
    let maxi = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxi) maxi = nums[i];
    }

    return maxi;
}

console.log(findLargestElement([2, 3, 56, 7, 7, 5, 44])); 
console.log(findLargestElement([55, 35, 6, 75, 3, 2]));  
