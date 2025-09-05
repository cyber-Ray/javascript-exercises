const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
    return "ERROR";
  }

  let total = 0;
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i <= end; i++) {
  total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
