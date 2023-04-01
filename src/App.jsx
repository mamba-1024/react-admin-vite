import React, { useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { LocaleContext, LOCALE, localeMap } from './context/locale';

import Router from './routes';

dayjs.locale('zh-cn');

dayjs.locale('zh-cn');
function App() {
  const [language, setLanguage] = useState(LOCALE);
  const store = useMemo(
    () => ({
      locale: language,
      toggleLocale: setLanguage,
    }),
    [language]
  );
  return (
    <LocaleContext.Provider value={store}>
      <ConfigProvider locale={localeMap[language]}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ConfigProvider>
    </LocaleContext.Provider>
  );
}

export default App;
