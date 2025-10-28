// Your code here
const isAlphabetic = /^[A-Za-z]+$/;


function isPalindrome(str) {
  
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  // Handle empty string as per instructions (should return false)
  if (str.length === 0) {
    return false;
  }

  // Check for non-alphabetic characters (requires 1 or more chars)
  if (!isAlphabetic.test(str)) {
    throw new Error('Input must contain only alphabetic characters.');
  }
  
  // The rest of the logic
  const processedStr = str.toLowerCase();
  const reversedStr = processedStr.split('').reverse().join('');

  return processedStr === reversedStr;
}

module.exports = {
  isPalindrome
};