import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import { glob } from 'glob';

export default defineConfig({
  root: './',
  base: './',
  plugins: [
    purgecss({
      content: glob.sync('./index.html').concat(glob.sync('./*.js')),
      safelist: ['carousel-btn', 'btnleft', 'btnright', 'error', 'error-text']
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});