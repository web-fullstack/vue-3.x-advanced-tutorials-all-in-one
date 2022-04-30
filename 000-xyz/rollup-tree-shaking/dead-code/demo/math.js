
// tree shaking
/*#__PURE__*/
const sum = (a, b) => a + b;

const add = (a, b) => a + b;

const minus = (a, b) => a - b;



// cjs, module.exports = {}; return module.exports;
// module.exports.sum = sum;
// module.exports.add = add;
// module.exports.minus = minus;
// 或
// module.exports = {
//   sum,
//   add,
//   minus,
// };


const math = {
  sum,
  add,
  minus,
};

// Declaration or statement expected.ts(1128) ❌
// export math;

// Identifier expected.ts(1003) ❌
// export {
//   ...math,
// };
export {
  sum,
  add,
  minus,
};

export default math;