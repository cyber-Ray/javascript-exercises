const fibonacci = function(count) {
  let sequence = [0, 1];
  let length;
  if(typeof count !== 'number') {
    length = parseInt(count);
  } else {
    length = count;
  }

  if (length < 0) {
    return "OOPS"
  }

  for(let i = 2; i <= length; i++) {
    sequence[i] = sequence[i-2] + sequence[i-1];
  }
  return sequence[length];
};

// Do not edit below this line
module.exports = fibonacci;
