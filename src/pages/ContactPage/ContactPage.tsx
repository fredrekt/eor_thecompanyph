import React from 'react';
import './ContactPage.scss';
import Layout from '../../layout/Layout';
import { Col, Form, Input, Row, Typography, Button, InputNumber, Select, message } from 'antd';
import logo from '../../assets/images/white_logo.png';
import { Link } from 'react-router-dom';
import { SwapRightOutlined } from '@ant-design/icons';
import ReCAPTCHA from 'react-google-recaptcha';
const Fade = require('react-reveal/Fade');

const ContactPage: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
		message.success(`Message successfully sent.`);
	};

	const onFinishFailed = (errorInfo: any) => {
		message.error(`Something went wrong in sending a message.`);
		console.log('Failed:', errorInfo);
	};

	const options = [
		{
			label: 'Find employment',
			value: 'Find employment'
		},
		{
			label: 'Hire an employee',
			value: 'Hire an employee'
		},
		{
			label: 'Pay an employee',
			value: 'Pay an employee'
		},
		{
			label: 'Talk about medical benefits',
			value: 'Talk about medical benefits'
		},
		{
			label: 'Talk about pensions',
			value: 'Talk about pensions'
		},
		{
			label: 'Talk about immigration',
			value: 'Talk about immigration'
		},
		{
			label: 'Talk about perks + rewards',
			value: 'Talk about perks + rewards'
		},
		{
			label: 'Talk about equity management',
			value: 'Talk about equity management'
		},
		{
			label: 'Something else / Not sure',
			value: 'Something else / Not sure'
		}
	];

	const onChangeCaptcha = (value: any) => {
		console.log('Captcha value:', value);
	};

	return (
		<Layout className="contactPage">
			<Fade>
				<Row className="contactFormRow">
					<Col className="contactFormLeftCol" xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
						<div className="contactFormLeftContent">
							<div className="heroLogoContainer">
								<Link to="/">
									<img src={logo} alt="the company cebu" />
								</Link>
							</div>
							<div className="contactSocialContainer">
								<ul className="socialLinks">
									<li>
										<a href="https://fredgaringo.ga/" target="_blank" rel="noreferrer">
											Facebook <SwapRightOutlined />
										</a>
									</li>
									<li>
										<a href="https://fredgaringo.ga/" target="_blank" rel="noreferrer">
											LinkedIn <SwapRightOutlined />
										</a>
									</li>
									<li>
										<a href="https://fredgaringo.ga/" target="_blank" rel="noreferrer">
											Instagram <SwapRightOutlined />
										</a>
									</li>
									<li>
										<a href="https://fredgaringo.ga/" target="_blank" rel="noreferrer">
											Twitter <SwapRightOutlined />
										</a>
									</li>
								</ul>
								<ul className="publicInfo">
									<li>
										<a href="callto:+123456">+63 9171162861</a>
									</li>
									<li>
										<a href="mailto:fredrickjohng6@gmail.com">fredrickjohng6@gmail.com</a>
									</li>
									<li>
										<Typography.Paragraph className="publicCtaFooter">
											© The Company. All Rights Reserved.
										</Typography.Paragraph>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col className="contactFormRightCol" xs={24} sm={24} md={12} lg={16} xl={18} xxl={18}>
						<Typography.Title>Get in touch.</Typography.Title>
						<Form className="contactFormComponent" onFinishFailed={onFinishFailed} onFinish={onFinish}>
							<Form.Item
								rules={[
									{
										required: true,
										message: 'Please enter your first name.'
									}
								]}
							>
								<Input placeholder="First Name" />
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<Input placeholder="Last Name" />
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<Input placeholder="Business Email" />
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<Input placeholder="Company Name" />
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<InputNumber style={{ width: `100%` }} placeholder="Phone Number" />
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<Select placeholder="Job Function">
									<Select.Option value="Human Resources">Human Resources</Select.Option>
									<Select.Option value="Finances">Finances</Select.Option>
									<Select.Option value="Operations">Operations</Select.Option>
									<Select.Option value="Business Development">Business Development</Select.Option>
									<Select.Option value="Legal">Legal</Select.Option>
									<Select.Option value="Private Equity">Private Equity</Select.Option>
									<Select.Option value="Venture Capital">Venture Capital</Select.Option>
									<Select.Option value="Others">Others</Select.Option>
								</Select>
							</Form.Item>
							<Form.Item>
								<Select
									mode="multiple"
									allowClear
									placeholder="Select all that apply"
									options={options}
								/>
							</Form.Item>
							<Form.Item
								rules={[
									{
										required: true
									}
								]}
							>
								<Input.TextArea style={{ width: `100%` }} placeholder="How can we help?" />
							</Form.Item>
							<Form.Item>
								{process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY && (
									<ReCAPTCHA
										sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
										onChange={onChangeCaptcha}
									/>
								)}
							</Form.Item>
							<Form.Item colon={false}>
								<Button shape="round" type="primary" htmlType="submit">
									Send Message
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Fade>
		</Layout>
	);
};

export default ContactPage;
