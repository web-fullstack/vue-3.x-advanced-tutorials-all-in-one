import vue from 'rollup-plugin-vue';

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
    //   // [!] Error: Given name "iife-index" is not a legal JS identifier. If you need this, you can try "output.extend: true".
    // },
    output: {
      file: './demo/dist/iife-index.js',
      format: 'iife',
      // external: ['vue']
      name: 'iifeDemo',
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 2. webpack / rollup / script="module"
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/esm-index.js',
      format: 'esm',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 3. Node.js SSR
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/cjs-index.js',
      format: 'cjs',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 4. umd
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/umd-index.js',
      format: 'umd',
      // external: ['vue']
      name: 'umd-index',
      // fix: UMD export 报错 ✅
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 4. amd
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/amd-index.js',
      format: 'amd',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 5. system
  {
    input: 'demo/index.js',
    output: {
      file: './demo/dist/system-index.js',
      format: 'system',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  }
];