import React from 'react';

export const THEME = 'light';

export const COLOR_WEAK = false;

export const ThemeContext = React.createContext({
  theme: 'light', // 默认主题 light | dark
  toggleTheme: () => {},
  collapsed: false, // 默认收起
  toggleCollapsed: () => {}, // 收起改变
  colorWeak: COLOR_WEAK, // 色弱模式
  fixedHeader: true, // 固定头部
  fixedSidebar: true, // 固定侧边栏
  toggleSetting: () => {}, // 其他设置改变
  themeVisible: false, // 主题设置
  toggleThemeVisible: () => {}, // 主题设置开关
});

