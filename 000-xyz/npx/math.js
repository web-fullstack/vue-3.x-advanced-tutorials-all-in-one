#!/usr/bin/env node

// math.js & `bin` package.json

console.log('math.js 👻');

const add = (a, b) => {
  return a + b;
}

 
const math = {
  add,
};

// test case
const result = add(1, 2);
console.log('result =', result, result === (1 + 2) ? '✅' : '❌');

// ESM
// export default math;
// Declaration or statement expected.ts(1128) ❌
// export math;

// CJS
// module.exports.add = add;
// module.exports = math;