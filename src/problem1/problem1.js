// assume: sum_to_n(-5) === -1 + (-2) + (-3) + (-4) + (-5) === -15.

var sum_to_n_a = function(n) {
  // your code here
  const isNegative = n < 0;
  let result = 0;

  if (isNegative) {
    for(let i = -1; i >= n; i --) {
      result += i;
    }
  } else {
    for(let i = 1; i <= n; i ++) {
      result += i;
    }
  }

  return result;
};

var sum_to_n_b = function(n) {
  // your code here
  const isNegative = n < 0;

  if(n === 1 || n === 0 || n === -1) {
    return n;
  }

  const firstNum = isNegative? -1 : 1;
  const result = (firstNum + n) * n / 2;

  return isNegative? -1 * result : result;
};

var sum_to_n_c = function(n) {
  // your code here
  const isNegative = n < 0;

  if (n === 0) {
    return 0;
  }

  return isNegative? sum_to_n_c(n+1) + n : sum_to_n_c(n-1) + n;
};

const testValue = -2
console.log(`sum_to_n_a:${sum_to_n_a(testValue)} sum_to_n_b: ${sum_to_n_b(testValue)} sum_to_n_c:${sum_to_n_c(testValue)} `)