import React from 'react';
import { RedditOutlined } from '@ant-design/icons';
import { LazyComp, transformRouterSidebar } from './help';
import Layout from '../component/Layout';

const GoldEgg = React.lazy(() => import('../pages/game/gold-egg'));
const Sudoku = React.lazy(() => import('../pages/game/sudoku'));

const Routes = [
  {
    label: '小游戏',
    hide: false,
    icon: <RedditOutlined />,
    key: 'game',
    element: <Layout />,
    children: [
      {
        path: '/game/gold-egg',
        key: '/game/gold-egg',
        label: '砸金蛋',
        hide: false,
        exact: true,
        element: LazyComp(GoldEgg),
        crumb: ['小游戏', '砸金蛋'], // 自定义面包屑
      },
      {
        path: '/game/sudoku',
        key: '/game/sudoku',
        label: '九宫格',
        hide: false,
        exact: true,
        element: LazyComp(Sudoku),
        crumb: ['小游戏', '九宫格'], // 自定义面包屑
      },
    ],
  },
];

export const gameMenus = transformRouterSidebar(Routes);

export default Routes;
