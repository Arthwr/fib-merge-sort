const isPalindrome = (string) => {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left++] !== string[right--]) return false;
  }
  return true;
};

const foo = isPalindrome("motor");
const bar = isPalindrome("rotor");
console.log(foo);
console.log(bar);

const isPalindromeRecursion = (string) => {
  if (string.length === 0 || string.length === 1) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return isPalindromeRecursion(string.slice(1, string.length - 1));
};

const res = isPalindromeRecursion("rotor");
const res2 = isPalindromeRecursion("motor");
console.log(res);
console.log(res2);
