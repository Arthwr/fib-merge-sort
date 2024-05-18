const findMultiplesSum = (n, sum = 0) => {
  if (n === 0) return sum;
  if (n % 3 === 0 || n % 5 === 0) sum += n;
  return findMultiplesSum(n - 1, sum);
};

const evenSumFibValue = (n) => {
  let sum = 0;
  let x = 0;
  let y = 1;
  let seqValue = x + y;

  while (seqValue <= n) {
    if (seqValue % 2 === 0) sum += seqValue;
    x = y;
    y = seqValue;
    seqValue = x + y;
  }
  return sum;
};

const evenSumFibValueRec = (n, sum = 0, x = 0, y = 1) => {
  let seqValue = x + y;
  if (seqValue >= n) return sum;
  if (seqValue % 2 === 0) sum += seqValue;
  return evenSumFibValueRec(n, sum, y, seqValue);
};

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const largestPrimeFactor = (n) => {
  let largestFactor = -1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      largestFactor = i;
      while (n % i === 0) {
        n /= i;
      }
    }
  }

  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
};

