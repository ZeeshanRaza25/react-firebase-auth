import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

class Forgot extends React.Component {

    handleForgot = e => {
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
            <Form onSubmit={this.handleForgot}>
                <Row>
                    <Col span={8} offset={8}>
                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={8}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="forgot-form-button" style={{ "width": "100%" }}>
                                Send Confirmation Code
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const ForgotForm = Form.create({ name: 'forgot' })(Forgot);
export default ForgotForm;