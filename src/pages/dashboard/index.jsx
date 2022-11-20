import React, { useRef, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { Gauge, Liquid, Column } from '@ant-design/plots';
import DemoLine from './Line';
import DemoChoroplethMap from './ChoroplethMap';

export default function Dashboard() {
  const ticks = [0, 1 / 3, 2 / 3, 1];
  const color = ['#F4664A', '#FAAD14', '#30BF78'];
  const graphRef = useRef(null);
  useEffect(() => {
    if (graphRef?.current) {
      let data = 0.7;
      const interval = setInterval(() => {
        if (data >= 1.5) {
          clearInterval(interval);
        }

        data += 0.005;
        graphRef.current?.changeData(data > 1 ? data - 1 : data);
      }, 100);
    }
  }, [graphRef]);
  const config = {
    percent: 0,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      title: {
        formatter: ({ percent }) => {
          if (percent < ticks[1]) {
            return '差';
          }

          if (percent < ticks[2]) {
            return '中';
          }

          return '优';
        },
        style: ({ percent }) => ({
          fontSize: '18px',
          lineHeight: 1,
          // eslint-disable-next-line no-nested-ternary
          color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
        }),
      },
      content: {
        offsetY: 24,
        style: {
          fontSize: '12px',
          color: '#4B535E',
        },
        formatter: () => '系统表现',
      },
    },
    onReady: (plot) => {
      graphRef.current = plot;
    },
  };

  const LiquidConfig = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };

  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  const ColumnConfig = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };

  return (
    <div>
      <PageHeader onBack={() => null} title="Dashboard" backIcon={false} />

      <Row gutter={[24]}>
        <Col span={8}>
          <Card title="动态仪表盘" bordered={false}>
            <div style={{ width: '100%', height: 180 }}>
              <Gauge {...config} ref={graphRef} />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="进度" bordered={false}>
            <div style={{ width: '100%', height: 180 }}>
              <Liquid {...LiquidConfig} />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="分类条目" bordered={false}>
            <div style={{ width: '100%', height: 180 }}>
              <Column {...ColumnConfig} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="中国地图" bordered={false}>
            <div style={{ height: 500 }}>
              <DemoChoroplethMap />
            </div>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="折线图" bordered={false}>
            <DemoLine />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
