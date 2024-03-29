import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Dropdown, Space, notification } from 'antd';
import {
  TranslationOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import i18n from 'i18next';
import { ThemeContext } from '../../context';
import { LocaleContext } from '../../context/locale';

const { Header } = Layout;

const userName = 'admin';
export default () => {
  const { collapsed, fixedHeader, themeVisible, toggleThemeVisible } =
    React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  // 修改语言
  const handleChangeLocale = ({ key }) => {
    toggleLocale(key);
    i18n.changeLanguage(key);
  };

  const handleUserMenus = ({ key }) => {
    if (key === 'login') {
      navigate('/login');
    } else {
      notification.info({
        message: '提示',
        description: '暂未实现',
      });
    }
  };

  const userMenus = [
    {
      label: i18n.t('layout.userCenter', '个人中心'),
      icon: <UserOutlined />,
      key: 'user-center',
    },
    {
      key: 'user-settings',
      icon: <SettingOutlined />,
      label: i18n.t('layout.userSetting', '个人设置'),
    },

    {
      type: 'divider',
    },
    { key: 'login', icon: <LogoutOutlined />, label: i18n.t('layout.logout', '退出登录') },
  ];

  const locales = [
    { label: i18n.t('language.chinese', '中文'), key: 'zh-CN' },
    { label: i18n.t('language.english', '英文'), key: 'en-US' },
  ];

  const showDrawer = () => {
    toggleThemeVisible(!themeVisible);
  };

  /**
   * site-layout-header-${theme} 可用于切换 header 的背景色
   * 该功能暂时关闭
   */

  return (
    <Header
      className={`site-layout-header ${
        fixedHeader ? 'site-layout-header-fixed' : 'site-layout-header'
      } ${collapsed ? 'site-layout-header-collapsed' : ''}`}
      style={fixedHeader ? {} : { width: '100%' }}
    >
      <Space>
        <Dropdown
          menu={{
            items: userMenus,
            onClick: handleUserMenus,
          }}
          className="site-layout-header-locale"
        >
          <div style={{ height: 48 }} className="site-item">
            <UserOutlined style={{ fontSize: 18, marginRight: 6 }} />
            {userName}
          </div>
        </Dropdown>
        <Dropdown
          menu={{
            items: locales,
            selectable: true,
            defaultSelectedKeys: [locale],
            onClick: handleChangeLocale,
          }}
          className="site-layout-header-locale"
        >
          <span className="site-item">
            <TranslationOutlined style={{ fontSize: 18 }} />
          </span>
        </Dropdown>
        <div className="drawer-handle" onClick={showDrawer}>
          {themeVisible ? (
            <SkinOutlined
              style={{
                fontSize: 18,
              }}
            />
          ) : (
            <SkinOutlined
              style={{
                fontSize: 18,
              }}
            />
          )}
        </div>
      </Space>
    </Header>
  );
};
