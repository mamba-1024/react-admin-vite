import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

import { menus } from '../../router';

import './index.less';

const App = props => {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  console.log(location);

  const onSelect = e => {
    console.log(e);
    navigate(`${e.key}` + location.search);
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={menus}
          onSelect={onSelect}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
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
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
