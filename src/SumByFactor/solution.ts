/*
Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/
export function sumOfDivided(lst: number[]): number[][] {
  // your code
  const result: number[][] = [];
  const primeFactors: Set<number> = new Set();

  for (const n of lst) {
    getPrimeFactors(n).forEach((primeFactor) => primeFactors.add(primeFactor));
  }

  primeFactors.forEach((primeFactor) => {
    let sum = 0;

    lst.forEach((n) => {
      if (n % primeFactor === 0) return (sum += n);
    });

    result.push([primeFactor, sum]);
  });

  result.sort((a, b) => a[0] - b[0]);

  return result;
}

function getPrimeFactors(n: number): Set<number> {
  const result: Set<number> = new Set();

  n = Math.abs(n);
  let prime = 2;
  while (n > 1) {
    if (n % prime === 0) {
      result.add(prime);
      n /= prime;
      prime = 2;
    } else {
      prime = getNextPrime(prime);
    }
  }

  return result;
}

function getNextPrime(prime: number): number {
  if (prime < 2) return 2;
  else if (prime < 3) return 3;

  while (true) {
    prime += 2;

    let isPrime = true;
    for (let i = 2; i < prime / 2; i += 2) {
      if (prime % i === 0) isPrime = false;
    }

    if (isPrime) break;
  }

  return prime;
}
