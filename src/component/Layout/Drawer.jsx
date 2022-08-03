import React, { useState, useContext } from 'react';
import { Drawer, List, ConfigProvider, Tooltip, Switch, Divider } from 'antd';
import { SettingOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context';

const PRIMARY_COLOR = ['#1e80ff', '#0073FF', '#52C41A', '#F4664A', '#FAAD14', '#30BF78'];

export default function DrawerComp() {
  const { t } = useTranslation();
  const { theme, toggleTheme, colorWeak, toggleSetting, fixedSidebar, fixedHeader } =
    useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(PRIMARY_COLOR[0]);

  const showDrawer = () => {
    setVisible(val => !val);
  };

  const handleChangeColor = (val) => {
    setColor(val);
    ConfigProvider.config({
      theme: {
        primaryColor: val,
      },
    });
  };

  const changeSetting = (key, value) => {
    if (key === 'colorWeak' && value === true) {
      const dom = document.querySelector('body');
      if (dom) {
        dom.dataset.prosettingdrawer = dom.style.filter;
        dom.style.filter = 'invert(80%)';
      }
    }
    if (key === 'colorWeak' && value === false) {
      const dom = document.querySelector('body');
      if (dom) {
        dom.style.filter = dom.dataset.prosettingdrawer || 'none';
        delete dom.dataset.prosettingdrawer;
      }
    }

    toggleSetting(key, value);
  };

  return (
    <Drawer
      handler={
        <div className="drawer-handle" onClick={showDrawer}>
          {visible ? (
            <CloseOutlined
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            />
          ) : (
            <SettingOutlined
              style={{
                color: '#fff',
                fontSize: 20,
              }}
            />
          )}
        </div>
      }
      placement="right"
      closable={false}
      onClose={showDrawer}
      visible={visible}
      width={300}
    >
      <div className="theme-style">
        <h3>{t('layout.menuStyle', '菜单风格')}</h3>
        <div className="theme-style-content">
          <Tooltip title={t('layout.darkMenu')}>
            <div
              className="theme-style-content-item theme-style-dark"
              onClick={() => toggleTheme('dark')}
            >
              {theme === 'dark' && <CheckOutlined style={{ color: '#fff' }} />}
            </div>
          </Tooltip>
          <Tooltip title={t('layout.lightMenu')}>
            <div
              className="theme-style-content-item theme-style-light"
              onClick={() => toggleTheme('light')}
            >
              {theme === 'light' && <CheckOutlined style={{ color: '#1D2129' }} />}
            </div>
          </Tooltip>
        </div>
      </div>
      <Divider />
      <div className="theme-color">
        <h3>{t('layout.themeColor')}</h3>
        <div className="theme-style-content">
          {PRIMARY_COLOR.map(ele => (
            <div
              key={ele}
              onClick={() => {
                handleChangeColor(ele);
              }}
              className="theme-style-content-item theme-color-block"
              style={{ backgroundColor: ele }}
            >
              {color === ele && <CheckOutlined style={{ color: '#fff' }} />}
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <div className="other-setting">
        <h3>{t('layout.otherSetting')}</h3>
        <List
          split={false}
          renderItem={renderLayoutSettingItem}
          dataSource={[
            {
              title: t('layout.fixedSidebar'),
              action: (
                <Switch
                  size="small"
                  checked={!!fixedSidebar}
                  onChange={(checked) => {
                    changeSetting('fixedSidebar', checked);
                  }}
                />
              ),
            },
            {
              title: t('layout.fixedHeader'),
              action: (
                <Switch
                  size="small"
                  checked={!!fixedHeader}
                  onChange={(checked) => {
                    changeSetting('fixedHeader', checked);
                  }}
                />
              ),
            },
            {
              title: t('layout.colorWeak'),
              action: (
                <Switch
                  size="small"
                  checked={!!colorWeak}
                  onChange={(checked) => {
                    changeSetting('colorWeak', checked);
                  }}
                />
              ),
            },
          ]}
        />
      </div>
    </Drawer>
  );
}

function renderLayoutSettingItem(item) {
  const action = React.cloneElement(item.action, {
    disabled: item.disabled,
  });
  return (
    <Tooltip title={item.disabled ? item.disabledReason : ''} placement="left">
      <List.Item actions={[action]}>
        <span style={{ opacity: item.disabled ? 0.5 : 1 }}>{item.title}</span>
      </List.Item>
    </Tooltip>
  );
}
