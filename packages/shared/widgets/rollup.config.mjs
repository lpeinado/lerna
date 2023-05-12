import vue from 'rollup-plugin-vue2';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: 'dist/index.js',
  plugins: [
    vue(),
    commonjs()
  ]
}