import React from 'react';
import { Spin } from 'antd';
import { DashboardOutlined, FormOutlined, HeartOutlined } from '@ant-design/icons';

const Dashboard = React.lazy(() => import('./pages/dashboard'));
const About = React.lazy(() => import('./pages/about'));
const BasicForm = React.lazy(() => import('./pages/form/basic-form'));
const ProForm = React.lazy(() => import('./pages/form/pro-form'));
import Layout from './component/Layout';
import Home from './pages/home';

function LazyComp(Comp) {
  return (
    <React.Suspense fallback={<Spin />}>
      <Comp />
    </React.Suspense>
  );
}

export const routers = [
  {
    path: '/dashboard', // 路由路径
    key: '/dashboard',
    exact: true, // 是否精确匹配
    hide: false, // 是否隐藏
    label: 'Dashboard', // 路由名称
    icon: <DashboardOutlined />, // 路由图标
    element: LazyComp(Dashboard), // 路由组件
  },
  {
    label: 'From页面',
    hide: false,
    icon: <FormOutlined />,
    key: 'form',
    children: [
      {
        path: '/form/basic-form',
        key: '/form/basic-form',
        label: 'BasicForm',
        hide: false,
        exact: true,
        element: LazyComp(BasicForm),
      },
      {
        path: '/form/pro-form',
        key: '/form/pro-form',
        label: 'ProForm',
        hide: false,
        exact: true,
        element: LazyComp(ProForm),
      },
    ],
  },
  {
    path: '/about', // 路由路径
    key: '/about',
    exact: true, // 是否精确匹配
    hide: false, // 是否隐藏
    label: 'About', // 路由名称
    icon: <HeartOutlined />, // 路由图标
    element: LazyComp(About), // 路由组件
  },
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function transformRouter(routers) {
  return routers.map(item => {
    if (item.children) {
      return getItem(item.label, item.key, item.icon, transformRouter(item.children));
    }
    return getItem(item.label, item.key, item.icon);
  });
}

export const menus = transformRouter(routers);
