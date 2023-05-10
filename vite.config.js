import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import {
//   createStyleImportPlugin,
// } from 'vite-plugin-style-import';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost', // vite默认值
    port: 5173, // vite默认值
    open: true, // 自动打开浏览器
  },
  plugins: [
    react(),
    // createStyleImportPlugin({
    //   libs: [
    //     {
    //       libraryName: 'antd',
    //       esModule: true,
    //       resolveStyle: name => `antd/es/${name}/style/index`,
    //     },
    //   ],
    // }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // additionalData: `@import "${resolve(
        //   __dirname,
        //   'src/styles/base.less',
        // )}";`,
      },
    },
  },
  resolve: process.env.USE_SOURCE
    ? {
      alias: {
        // "react-router": path.resolve(
        //   __dirname,
        //   "../../packages/react-router/index.tsx"
        // ),
        'react-router-dom': resolve(
          __dirname,
          '../../packages/react-router-dom/index.tsx',
        ),
      },
    }
    : {},
});
