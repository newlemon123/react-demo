import React, {Component} from 'react';
import './login.less'
// import logo from './images/unlocked-1.png'
import { Form, Input, Button, Checkbox, PageHeader  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api'
// login page
export default class Login extends  Component {


	formRef = React.createRef();

	componentDidMount() {
		this.formRef.current.setFieldsValue({
			email: 'andigame929@gmail.com',
			password:'Test123!'
		});
	}

	validatePwd =(rule, value, callback) => {
		console.log('validate PWD', rule, value);
		if(!value){
			callback("password is required")
		}else if (value.length<4){
			callback("password cannot shorter than 4")
		}else if (value.length>12000){
			callback("password cannot longer than 12")
		}else if (!/^[a-zA-Z0-9!]+$/.test(value)){
			callback("password must be char or number")
		}else{
			callback();

		}

	}
	handleSubmit = (async values => {
		console.log('Received values of form: ', values);
		try{
			const {email, password} = values;
			const response = await reqLogin(email, password);
			console.log(response)

		}catch (error) {
			console.log(error)
		}
		// const response = reqLogin(email, password);
	});

	render() {



			return (
				<div className='login'>
					<header className='login-header'>

							<PageHeader
								className="site-page-header-ghost-wrapper"
								ghost={false}
								onBack={() => window.history.back()}
								title="Login"
								// subTitle="Login to backend system"
								extra={[
									<Button key="3">Language</Button>,
									<Button key="2">Font size</Button>
								]}
							>

							</PageHeader>
					</header>
					<section className='login-content'>
						<h2> Login to portal</h2>
						<Form
							// aria-label='email'
							ref={ this.formRef }
							name="normal_login"
							className="login-form"
							initialValues={ { remember: true } }
							onFinish={ this.handleSubmit }
						>
							<Form.Item
								type='email'
								name="email"
								// aria-label='email'
								rules={ [{ required: true, message: 'Please input your email!' },
								         { min: 4, message: 'at least 4 words' },
								         { max: 30, message: 'max is 30' },
								         { whitespace: true, message: 'space is not allow' }] }
							>
								<Input
									aria-label='email'
									prefix={ <UserOutlined className="site-form-item-icon" /> }
								       placeholder="email" />
							</Form.Item>
							<Form.Item
								name="password"
								rules={ [
								         { validator: this.validatePwd }] }
							>
								<Input
									aria-label='password'
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

							<Form.Item className='register'>
								<Button type="primary" htmlType="submit" className="login-form-button">
									Log in
								</Button>
								Or <a href="login" className='register-button'>register now!</a>
							</Form.Item>
						</Form>


					</section>


				</div>
			)


		}

}