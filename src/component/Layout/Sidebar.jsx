import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { sidebarMenus } from '../../routes';
import logo from '../../logo.svg';
import { ThemeContext } from '../../context';

const { Sider } = Layout;

function getKeyByPath(array, path) {
  for (let index = 0; index < array.length; index++) {
    const item = array[index];
    if (item.children && item.children.length > 0) {
      const key = getKeyByPath(item.children, path);
      if (key) {
        return key;
      }
    } else if (path === item.key) {
      return item.key;
    }
  }
  return null;
}

function getOpenKeys(array, pathname) {
  const currentKey = getKeyByPath(array, pathname); // '/form/pro-form'
  const keys = currentKey.split('/'); // ['', 'form', 'pro-form']
  const openKeys = keys.length > 2 ? keys.slice(1, 2) : [];

  return openKeys;
}

export default () => {
  const { theme, collapsed, toggleCollapsed, fixedSidebar } = React.useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState(getOpenKeys(sidebarMenus, location.pathname));

  const onSelect = (e) => {
    navigate(`${e.key}${location.search}`);

    setOpenKeys(getOpenKeys(sidebarMenus, e.key));
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => toggleCollapsed(value)}
      className={`site-layout-sider ${fixedSidebar ? 'site-layout-sider-fixed' : ''}`}
      theme={theme}
    >
      <div className="logo-wrap">
        <img src={logo} className="app-logo" alt="logo" />
        {!collapsed && <div className={`logo-title logo-title-${theme}`}>React App</div>}
      </div>
      <Menu
        defaultSelectedKeys={[getKeyByPath(sidebarMenus, location.pathname)]}
        openKeys={openKeys}
        mode="inline"
        items={sidebarMenus}
        onSelect={onSelect}
        theme={theme}
        onOpenChange={keys => setOpenKeys(keys)}
      />
    </Sider>
  );
};
