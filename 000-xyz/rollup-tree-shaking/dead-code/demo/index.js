// import * as mathAll from './math.js';
// import mathAll from './math.js';
// import math from './math.js';
// // ✅  multi duplicate import

// console.log('mathAll =', mathAll);
// console.log('math =', math);

// const result1 = mathAll.add(1, 2);
// const result2 = math.add(1, 2);

// console.log('result1 =', result1);
// console.log('result2 =', result2);

/*#__PURE__*/
import { sum, add, minus } from './math.js';

const result = add(1, 2);
// // const result = sum(1, 2);
// // const result = minus(3, 1);

console.log('result =', result);

// ❌ [!] Error: You must supply "output.name" for UMD bundles that have exports so that the exports are accessible in environments without a module loader.

// ⚠️ (!) Entry module "demo/index.js" is implicitly using "default" export mode, which means for CommonJS output that its default export is assigned to "module.exports". For many tools, such CommonJS output will not be interchangeable with the original ES module. If this is intended, explicitly set "output.exports" to either "auto" or "default", otherwise you might want to consider changing the signature of "demo/index.js" to use named exports only.

// export default result;

// ⚠️ (!) If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
export {
  result,
};
