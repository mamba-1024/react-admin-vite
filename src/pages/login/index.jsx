import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import './index.less';
import { useTranslation } from 'react-i18next';
import { request } from '../../utils/request';

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setLoading(true);

    request({
      url: '/api/login',
      method: 'post',
      data: values,
    })
      .then((res) => {
        if (res.verifySuccess) {
          message.success('登录成功', 0.5, () => {
            navigate('/dashboard');
          });
        } else {
          message.error('用户名或密码错误');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            placeholder="账户 admin"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码 123456"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href=" ">
            {t('login.forgotPassword')}
          </a>
        </Form.Item>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
            {t('login.confirm')}
          </Button>
          Or <a href=" ">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
