import React, {Component} from 'react';
import './login.less'
import login from './images/login.png'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// login page
export default class Login extends  Component {


	formRef = React.createRef();

	componentDidMount() {
		this.formRef.current.setFieldsValue({
			username: '',
			password:''
		});
	}

	validatePwd =(rule, value, callback) => {
		console.log('validate PWD', rule, value);
		callback();
		//callback('XX')

	}

	render() {

			const onFinish = values => {
				console.log('Received values of form: ', values);
			};

			return (
				<div className='login'>
					<header className='login-header'>
						<img src={ login } alt='logo' />
						<h1>Login System</h1>
					</header>
					<section className='login-content'>
						<h2> Login to portal</h2>
						<Form
							ref={ this.formRef }
							name="normal_login"
							className="login-form"
							initialValues={ { remember: true } }
							onFinish={ onFinish }
						>
							<Form.Item
								name="username"
								rules={ [{ required: true, message: 'Please input your Username!' },
								         { min: 4, message: 'at least 4 words' },
								         { max: 12, message: 'max is 12' },
								         { whitespace: true, message: 'space is not allow' },
								         { pattern: /^[a-zA-Z0-9]+$/, message: 'username must be string' },] }
							>
								<Input prefix={ <UserOutlined className="site-form-item-icon" /> }
								       placeholder="Username" />
							</Form.Item>
							<Form.Item
								name="password"
								rules={ [{ required: true, message: 'Please input your Password!' },
								         { validator: this.validatePwd }] }
							>
								<Input
									prefix={ <LockOutlined className="site-form-item-icon" /> }
									type="password"
									placeholder="Password"
								/>
							</Form.Item>
							<Form.Item>
								<Form.Item name="remember" valuePropName="checked" noStyle>
									<Checkbox>Remember me</Checkbox>
								</Form.Item>

								<a className="login-form-forgot" href='login'>
									Forgot password
								</a>
							</Form.Item>

							<Form.Item>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
								</Button>
								Or <a href="login">register now!</a>
							</Form.Item>
						</Form>


					</section>


				</div>
			)


		}

}