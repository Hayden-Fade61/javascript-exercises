const fibonacci = function(n) {
  // Base cases
  if(n<0) return "OOPS";
  if (n==0) return 0;
  if (n==1) return 1;
  // Recursive step 
  return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
