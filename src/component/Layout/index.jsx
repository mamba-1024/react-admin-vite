import React, { useState, useMemo } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import DrawerComp from './Drawer';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import './index.less';

import { ThemeContext, THEME, COLOR_WEAK, COLOR_PRIMARY } from '../../context';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(THEME);
  const [colorWeak, setColorWeak] = useState(COLOR_WEAK);
  const [fixedSidebar, setFixedSidebar] = useState(true);
  const [fixedHeader, setFixedHeader] = useState(true);
  const [visible, setVisible] = useState(false);
  const [colorPrimary, setColorPrimary] = useState(COLOR_PRIMARY);

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
      colorPrimary,
      toggleColorPrimary: setColorPrimary,
    }),
    [collapsed, theme, colorWeak, fixedSidebar, fixedHeader, visible, colorPrimary]
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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary,
          },
        }}
      >
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
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export default App;
