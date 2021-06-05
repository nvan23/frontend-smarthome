import React, { useState } from 'react'

import {
  Result,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'antd'

import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

import "./login.css"
const Login = ({ history }) => {
  const [loginButtonLoading, ] = useState(false)

  const { Title } = Typography

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className="Login__container">

      <Result
        icon={
          <img className="Login__logo" src={process.env.PUBLIC_URL + '/logo_sea.png'} alt='login' />
        }
        title={
          <Title style={{ fontSize: 20 }}>Đăng nhập để sử dụng các dịch vụ</Title>
        }
        extra={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form
              name="login-form"
              onFinish={onFinish}
            >

              <Form.Item
                name="username"
                className="form-item--margin-bottom-small"
                rules={[
                  {
                    required: true,
                    message: 'Trường này không được trống',
                  },
                ]}
              >
                <Input
                  allowClear
                  suffix={<UserOutlined />}
                  placeholder="Tên người dùng" />

              </Form.Item>

              <Form.Item
                name="password"
                className="form-item--margin-bottom-small"
                rules={[
                  {
                    required: true,
                    message: 'Trường này không được trống',
                  },
                  {
                    min: 8,
                    message: 'Mật khẩu cần ít nhất 8 ký tự'
                  }
                ]}
              >
                <Input.Password
                  allowClear
                  type="password"
                  placeholder="Mật khẩu"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              <Form.Item>
                <Row gutter={[30, 8]} style={{ flexDirection: 'column', textAlign: 'center' }}>
                  <Col>
                    <Button type="primary" htmlType="submit" block loading={loginButtonLoading}>
                      Đăng nhập
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </div>
        }
      />

    </div>
  )
}

export default Login
