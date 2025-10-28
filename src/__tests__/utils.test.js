// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  // Test Case 1: Known Palindrome
  test('should return true for a known palindrome like "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  // Test Case 2: Known Non-Palindrome
  test('should return false for a non-palindrome like "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  // Test Case 3: Case-Insensitivity
  test('should return true for words that are a combination of uppercase and lowercase letters (e.g., "Mom")', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  // Test Case 4: Empty String
  test('should return false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  // Bonus Test Case 5: Non-Alphabetic Characters
  test('should throw an error if input has any non-alphabetic characters (e.g., "racecar!")', () => {
    expect(() => isPalindrome('racecar!')).toThrow('Input must contain only alphabetic characters.');
  });

  // Bonus Test Case 6: Non-String Input
  test('should throw an error if input is not a string (e.g., a number)', () => {
    expect(() => isPalindrome(121)).toThrow('Input must be a string.');
    expect(() => isPalindrome(null)).toThrow('Input must be a string.');
  });
});