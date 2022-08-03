import React from 'react';
import { FormOutlined } from '@ant-design/icons';
import { LazyComp, transformRouterSidebar } from './help';
import Layout from '../component/Layout';

const BasicForm = React.lazy(() => import('../pages/form/basic-form'));
const ProForm = React.lazy(() => import('../pages/form/pro-form'));

const Routes = [
  {
    label: 'From页面',
    hide: false,
    icon: <FormOutlined />,
    key: 'form',
    element: <Layout />,
    children: [
      {
        path: '/form/basic-form',
        key: '/form/basic-form',
        label: 'BasicForm',
        hide: false,
        exact: true,
        element: LazyComp(BasicForm),
        crumb: ['From页面', 'BasicForm'], // 自定义面包屑
      },
      {
        path: '/form/pro-form',
        key: '/form/pro-form',
        label: 'ProForm',
        hide: false,
        exact: true,
        element: LazyComp(ProForm),
        crumb: ['From页面', 'ProForm'], // 自定义面包屑
      },
    ],
  },
];

export const formMenus = transformRouterSidebar(Routes);

export default Routes;
