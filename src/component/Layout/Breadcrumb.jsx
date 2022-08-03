import React from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { sidebarMenus } from '../../routes';

export function getBreadcrumbItems(array, path) {
  let breadcrumbItems = [];
  array.forEach((item) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach((element) => {
        if (element.key === path) {
          breadcrumbItems = element.crumb;
        }
      });
    }
  });

  return breadcrumbItems;
}

export default () => {
  const location = useLocation();
  const breadcrumbItems = getBreadcrumbItems(sidebarMenus, location.pathname);
  if (breadcrumbItems.length < 2) {
    return null;
  }

  return (
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      {breadcrumbItems.map(item => (
        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
