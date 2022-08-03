import React from 'react';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

export const LOCALE = 'zh-CN'; // 默认中文 zh-CN | en-US


export const localeMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export const locales = Object.keys(localeMap);

export const LocaleContext = React.createContext({
  locale: LOCALE,
  toggleLocale: () => {},
});
