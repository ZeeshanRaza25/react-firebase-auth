import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import {Link} from 'react-router-dom'
const { Option } = Select;

const residences = [
    {
        value: 'pakistan',
        label: 'Pakistan',
        children: [
            {
                value: 'punjab',
                label: 'Punjab',
                children: [
                    {
                        value: 'faisalabad',
                        label: 'Faisalabad',
                    },
                ],
            },
        ],
    },
    // {
    //     value: 'india',
    //     label: 'India',
    //     children: [
    //         {
    //             value: 'punjab',
    //             label: 'Punjab',
    //             children: [
    //                 {
    //                     value: 'mumbai',
    //                     label: 'Mumbai',
    //                 },
    //             ],
    //         },
    //     ],
    // },
];

class Signup extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '92',
        })(
            <Select style={{ width: 70 }}>
                <Option value="92">+92</Option>
                <Option value="91">+91</Option>
            </Select>,
        );

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={8} offset={7}>
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
                    <Col span={8} offset={7}>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={7}>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={7}>
                        <Form.Item
                            label={
                                <span>
                                    Nickname&nbsp;
                                         <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            }
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                            })(<Input />)}
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={7}>
                <Form.Item label="Habitual Residence">
                    {getFieldDecorator('residence', {
                        initialValue: ['pakistan'],
                        rules: [
                            { type: 'array', required: true, message: 'Please select your habitual residence!' },
                        ],
                    })(<Cascader options={residences} />)}
                </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={7}>
                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                    </Col>
                </Row>
                {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                            })(<Input />)}
                        </Col>
                        <Col span={12}>
                            <Button>Get captcha</Button>
                        </Col>
                    </Row>
                </Form.Item> */}

                <Form.Item {...tailFormItemLayout} style={{"marginLeft":"140px"}}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>
                            I have read the <Link to="/agreement">agreement</Link>
                        </Checkbox>,
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" style={{"marginLeft":"90px"}}>
                        Register
            </Button>
                </Form.Item>
            </Form>
        );
    }
}

const SignupForm = Form.create({ name: 'register' })(Signup);

export default SignupForm;