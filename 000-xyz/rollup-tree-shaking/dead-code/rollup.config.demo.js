import vue from 'rollup-plugin-vue';
// ❌
// import { uglify } from 'rollup-plugin-uglify';
// import uglify from 'rollup-plugin-uglify-es';
// ✅
import { terser } from 'rollup-plugin-terser';

// 1. 仅构建一个 lib 使用 `export default {};`
// export default {
//   input: 'demo/index.js',
//   output: {
//     file: './demo/dist/iife-index.js',
//     format: 'iife',
//     // external: ['vue']
//   },
//   plugins: [
//     // ...
//     vue(/* options */)
//   ]
// };

// 2. 同时构建多个 lib 使用 `export default [{}, {}, ...];`
export default [
  // 1. browser
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/iife-index.js',
      format: 'iife',
      // external: ['vue']
      name: 'iifeDemo',
      // (!) If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
    },
    // output: {
    //   file: './demo/dist/iife-index.js',
    //   format: 'iife',
    //   // external: ['vue']
    //   name: 'iife-index',
    //   // fix: UMD export 报错 ✅
    // },
    // output: {
    //   file: './demo/dist/iife-index.js',
    //   format: 'iife',
    //   // external: ['vue']
    //   name: 'iife-index',
    //   // fix: UMD export 报错 ✅
    //   extend: true,
    //   // fix: "iife-index" is not a legal JS identifier 报错 ✅
    //   // ❌ [!] Error: Given name "iife-index" is not a legal JS identifier. If you need this, you can try "output.extend: true".
    // },
    plugins: [
      vue(/* options */),
      // uglify(),
      terser(),
    ],
  },
  // 2. webpack / rollup / script="module" ESM
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/esm-index.js',
      format: 'esm',
    },
    plugins: [
      vue(),
      // terser(),
    ]
  },
  // 3. Node.js SSR
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/cjs-index.js',
      format: 'cjs',
    },
    plugins: [
      vue(),
    ]
  },
  // 4. umd
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/umd-index.js',
      format: 'umd',
      name: 'umd-index',
      // fix: UMD export 报错 ✅
    },
    plugins: [
      vue(),
      // terser(),
    ]
  },
  // 4. amd
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/amd-index.js',
      format: 'amd',
    },
    plugins: [
      vue(),
    ]
  },
  // 5. system
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/system-index.js',
      format: 'system',
    },
    plugins: [
      vue(),
    ]
  },
];