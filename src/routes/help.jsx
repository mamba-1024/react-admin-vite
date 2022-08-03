import React from 'react';
import { Spin } from 'antd';

export function LazyComp(Comp) {
  return (
    <React.Suspense fallback={<Spin />}>
      <Comp />
    </React.Suspense>
  );
}

function getItem(label, key, icon, children, crumb) {
  return {
    key,
    icon,
    children,
    label,
    crumb,
  };
}
// 将路由转为侧边导航需要的menu
export function transformRouterSidebar(r) {
  return r.map((item) => {
    if (item.children) {
      return getItem(
        item.label,
        item.key,
        item.icon,
        transformRouterSidebar(item.children),
        item.crumb,
      );
    }
    return getItem(item.label, item.key, item.icon, null, item.crumb);
  });
}
