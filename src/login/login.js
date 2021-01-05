import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from "react-router-dom";

class Login extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row>
          <Col span={6} offset={8}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={8}>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}></Col>
          <Col span={6}>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}

              <Link to="/forgotPassword" className="login-form-forgot" style={{ "marginLeft": "110px" }}>
                Forgot password
              </Link>
              <br />
              <span style={{ "marginRight": "20px" }}>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ "width": "100%" }}>
                  Log in
              </Button>
                <br />
              </span>
              Or  <Link to="/signup">register now!</Link>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;

