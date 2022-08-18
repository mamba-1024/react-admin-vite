import React, { useState, useEffect } from 'react';
import { Table, Spin, PageHeader } from 'antd';
import { request } from '../../utils/request';

async function getListData(query) {
  const res = await request({
    url: '/user/list',
    method: 'post',
    data: query,
  });
  return res;
}

function AboutPage() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({ page: 1, pageSize: 10 });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '更新日期',
      dataIndex: 'updateDate',
      key: 'updateDate',
    },
  ];

  useEffect(() => {
    setLoading(true);
    getListData(query)
      .then((res) => {
        setList(res.list);
        setTotal(res.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const pagination = {
    total,
    showSizeChanger: false,
    current: query.page,
    onChange: (current) => {
      setQuery({ ...query, page: current });
    },
    showTotal: (totals) => `Total ${totals} items`,
  };

  return (
    <Spin spinning={loading}>
      <PageHeader onBack={() => null} title="普通表格" backIcon={false} />

      <Table
        columns={columns}
        dataSource={list}
        pagination={pagination}
        rowKey={(record) => record.id}
      />
    </Spin>
  );
}

export default AboutPage;
