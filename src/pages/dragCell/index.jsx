import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { request } from '../../utils/request';

async function getListData(query) {
  const res = await request({
    url: '/user/list',
    method: 'post',
    data: query,
  });
  return res;
}

const DragCell = ({ data, index, onRowMove, column }) => {
  const [{ isDragging }, drag] = useDrag({
    type: column,
    item: { index, data, column },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult && item.index !== dropResult.index) {
        onRowMove(item.data, dropResult.data);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: column,
    drop: () => ({ data, index, column }),
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  });

  const opacity = isDragging ? 0.5 : 1;
  const backgroundColor = isOver && canDrop ? 'red' : 'inherit';
  return (
    <div ref={drop} style={{ backgroundColor }}>
      <div ref={drag} style={{ opacity, cursor: 'move' }}>
        {data.name}
      </div>
    </div>
  );
};

function DragCellTable() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({ page: 1, pageSize: 10 });

  const onRowMove = (dragIndex, hoverIndex) => {
    console.log('dragIndex, hoverIndex: ', dragIndex, hoverIndex);
  };

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
      title: 'dragColumn',
      key: 'dragColumn',
      render: (text, record, index) => {
        return <DragCell column={'dragColumn'} data={record} index={index} onRowMove={onRowMove} />;
      },
    },
    {
      title: 'dragColumn2',
      key: 'dragColumn2',
      render: (text, record, index) => {
        return (
          <DragCell column={'dragColumn2'} data={record} index={index} onRowMove={onRowMove} />
        );
      },
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
      <PageHeader onBack={() => null} title="单元格拖拽" backIcon={false} />
      <DndProvider backend={HTML5Backend}>
        <Table
          columns={columns}
          dataSource={list}
          pagination={pagination}
          rowKey={(record) => record.id}
        />
      </DndProvider>
    </Spin>
  );
}

export default DragCellTable;
