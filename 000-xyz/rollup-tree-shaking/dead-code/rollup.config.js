import vue from 'rollup-plugin-vue';

// 1. 仅构建一个 lib 使用 `export default {};`
// export default {
//   input: 'src/main.js',
//   output: {
//     file: './dist/iife-main.js',
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
    input: 'src/main.js',
    output: {
      file: './dist/iife-main.js',
      format: 'iife',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 2. webpack / rollup / script="module"
  {
    input: 'src/main.js',
    output: {
      file: './dist/esm-main.js',
      format: 'esm',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 3. Node.js SSR
  {
    input: 'src/main.js',
    output: {
      file: './dist/cjs-main.js',
      format: 'cjs',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 4. umd
  {
    input: 'src/main.js',
    output: {
      file: './dist/umd-main.js',
      format: 'umd',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 4. amd
  {
    input: 'src/main.js',
    output: {
      file: './dist/amd-main.js',
      format: 'amd',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  },
  // 5. system
  {
    input: 'src/main.js',
    output: {
      file: './dist/system-main.js',
      format: 'system',
      // external: ['vue']
    },
    plugins: [
      vue(/* options */)
    ]
  }
];