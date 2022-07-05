import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {
  createStyleImportPlugin,
} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: name => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
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
          "react-router-dom": path.resolve(
            __dirname,
            "../../packages/react-router-dom/index.tsx"
          ),
        },
      }
    : {},
});
