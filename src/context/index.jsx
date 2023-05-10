import React from 'react';

export const THEME = 'dark';

export const COLOR_WEAK = false;

export const COLORS = ['#1677ff', '#0073FF', '#52C41A', '#F4664A', '#FAAD14', '#30BF78'];

export const COLOR_PRIMARY = '#1677ff';

export const ThemeContext = React.createContext({
  theme: 'dark', // 默认主题 light | dark
  toggleTheme: () => {},
  collapsed: false, // 默认收起
  toggleCollapsed: () => {}, // 收起改变
  colorWeak: COLOR_WEAK, // 色弱模式
  fixedHeader: true, // 固定头部
  fixedSidebar: true, // 固定侧边栏
  toggleSetting: () => {}, // 其他设置改变
  themeVisible: false, // 主题设置
  toggleThemeVisible: () => {}, // 主题设置开关
  colorPrimary: COLORS[0], // 主题色
  toggleColorPrimary: () => {},
});
