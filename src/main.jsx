import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/index';
import App from './App';
import './tailwind.css';
import './index.less';
// import 'antd/dist/antd.less';
// 引入 variable 支持 primaryColor 的动态切换
// import 'antd/dist/antd.variable.less';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
