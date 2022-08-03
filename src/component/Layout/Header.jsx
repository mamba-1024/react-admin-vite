import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Dropdown, Menu, Space, notification } from 'antd';
import { TranslationOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import i18n from 'i18next';
import { ThemeContext } from '../../context';
import { LocaleContext } from '../../context/locale';

const { Header } = Layout;


const userName = 'admin';
export default () => {
  const { collapsed, fixedHeader } = React.useContext(ThemeContext);
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

  const locales = [
    { label: i18n.t('language.chinese', '中文'), key: 'zh-CN' },
    { label: i18n.t('language.english', '英文'), key: 'en-US' },
  ];

  const userMenus = [
    { key: 'user-center', icon: <UserOutlined />, label: i18n.t('layout.userCenter', '个人中心') },
    { key: 'user-settings', icon: <SettingOutlined />, label: i18n.t('layout.userSetting', '个人设置') },
    {
      type: 'divider',
    },
    { key: 'login', icon: <LogoutOutlined />, label: i18n.t('layout.logout', '退出登录') },
  ];

  const menu = <Menu onClick={handleChangeLocale} items={locales} selectedKeys={[locale]} />;

  const userMenu = <Menu items={userMenus} onClick={handleUserMenus}/>;

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
        <Dropdown overlay={userMenu} className="site-layout-header-locale">
          <div style={{ height: 48 }}>
            <UserOutlined style={{ fontSize: 18, marginRight: 6 }} />{userName}
          </div>
        </Dropdown>
        <Dropdown overlay={menu} className="site-layout-header-locale">
          <TranslationOutlined style={{ fontSize: 18, height: 48 }} />
        </Dropdown>
      </Space>
    </Header>
  );
};
