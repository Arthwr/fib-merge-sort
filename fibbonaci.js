// Return a fibonacci sequence containing that many numbers (n)
// fibs(8) = [0, 1, 1, 2, 3, 5, 8, 13].

// Iteration way
const fibs = (n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1 || i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }

  return result;
};

const fibsOptimal = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
};

// Recursion way
const fibRec = (n, result = [0, 1]) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  if (result.length < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibRec(n, result);
  }
  return result;
};

const foo = fibRec(8);
console.log(foo);
