import isPalindrome from "../palindrome";

const oddPalindromes = [
  "redivider",
  "deified",
  "civic",
  "radar",
  "level",
  "rotor",
  "kayak",
  "reviver",
  "racecar",
  "madam",
  "refer",
];
const evenPalindromes = [
  "abba",
  "Anna",
  "civic",
  "kayak",
  "level",
  "madam",
  "mom",
  "noon",
  "racecar",
];
const palindromePhrases = [
  "Mr. Owl ate my metal worm",
  "Do geese see God?",
  "Was it a car or a cat I saw?",
  "Murder for a jar of red rum",
];

describe("isPalindrome", () => {
  it("is true for ood", function () {
    oddPalindromes.forEach(function (aPalindrome) {
      expect(isPalindrome(aPalindrome)).toBe(true);
    });
  });
  it("is true for even", () => {
    evenPalindromes.forEach(function (aPalindrome) {
      expect(isPalindrome(aPalindrome)).toBe(true);
    });
  });
  it("is true for phrases", () => {
    palindromePhrases.forEach(function (aPalindrome) {
      expect(isPalindrome(aPalindrome)).toBe(true);
    });
  });
  it("is false for non palindromes", function () {
    expect(isPalindrome("not a palindrome")).toBe(false);
  });
});
