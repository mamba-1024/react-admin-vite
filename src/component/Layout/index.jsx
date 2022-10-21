import React, { useState, useMemo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import DrawerComp from './Drawer';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import './index.less';

import { ThemeContext, THEME, COLOR_WEAK } from '../../context';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(THEME);
  const [colorWeak, setColorWeak] = useState(COLOR_WEAK);
  const [fixedSidebar, setFixedSidebar] = useState(true);
  const [fixedHeader, setFixedHeader] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleSetting = (key, value) => {
    if (key === 'colorWeak') {
      setColorWeak(value);
    }
    if (key === 'fixedSidebar') {
      setFixedSidebar(value);
    }
    if (key === 'fixedHeader') {
      setFixedHeader(value);
    }
  };

  const store = useMemo(
    () => ({
      theme,
      toggleTheme: setTheme,
      collapsed,
      toggleCollapsed: setCollapsed,
      colorWeak,
      toggleSetting,
      fixedSidebar,
      fixedHeader,
      themeVisible: visible,
      toggleThemeVisible: setVisible,
    }),
    [collapsed, theme, colorWeak, fixedSidebar, fixedHeader, visible],
  );

  const layoutStyle = useMemo(() => {
    if (fixedSidebar && collapsed) {
      return { marginLeft: 80 };
    } 
    if (fixedSidebar) {
      return { marginLeft: 200 };
    } 

    return { marginLeft: 0 };
  }, [fixedSidebar, collapsed]);

  return (
    <ThemeContext.Provider value={store}>
      <Layout className="site-layout">
        <Sidebar />
        <Layout
          style={{
            minHeight: '100vh',
            ...layoutStyle,
          }}
        >
          <Header />
          <Content
            style={{
              margin: '0 16px',
              paddingTop: fixedHeader ? 48 : 0,
            }}
          >
            <Breadcrumb />
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer />
          <DrawerComp />
        </Layout>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
