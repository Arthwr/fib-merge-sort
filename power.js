const powerRecursion = (number, power) => {
  if (power === 0) return 1;
  if (power < 0) return 1 / powerRecursion(number, -power);

  if (power % 2 === 0) {
    const half = powerRecursion(number, power / 2);
    return half * half;
  }

  return number * powerRecursion(number, power - 1);
};

const foo = powerRecursion(2, 5);
console.log(foo);
