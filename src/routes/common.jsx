import React from 'react';
import { DashboardOutlined, HeartOutlined } from '@ant-design/icons';
import { LazyComp, transformRouterSidebar } from './help';
import Layout from '../component/Layout';

const Dashboard = React.lazy(() => import('../pages/dashboard'));
const About = React.lazy(() => import('../pages/about'));
const DragCell = React.lazy(() => import('../pages/dragCell'));
// 公共模块路由

const Routes = [
  {
    element: <Layout />,
    children: [
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
        path: '/about', // 路由路径
        key: '/about',
        exact: true, // 是否精确匹配
        hide: false, // 是否隐藏
        label: 'About', // 路由名称
        icon: <HeartOutlined />, // 路由图标
        element: LazyComp(About), // 路由组件
      },
      {
        path: '/dragCell', // 路由路径
        key: '/dragCell',
        exact: true, // 是否精确匹配
        hide: false, // 是否隐藏
        label: 'DragCell', // 路由名称
        icon: <HeartOutlined />, // 路由图标
        element: LazyComp(DragCell), // 路由组件
      },
    ],
  },
];

export const commonMenus = transformRouterSidebar(Routes[0].children);

export default Routes;
