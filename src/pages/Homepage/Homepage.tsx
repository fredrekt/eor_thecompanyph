import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import Layout from '../../layout/Layout';
import Section from '../../components/section/Section';
import { Button, Col, Row, Skeleton, Typography, message } from 'antd';
import logo from '../../assets/images/black_logo.png';
import BlogCard from '../../components/blogCard/BlogCard';
import FeatureCard from '../../components/featureCard/FeatureCard';
import StepCard from '../../components/stepCard/StepCard';
import { FloatButton } from 'antd';
import { Link } from 'react-router-dom';
import contactHero from '../../assets/images/contact.png';
import testimonialHero from '../../assets/images/testimonial.png';
import axios from 'axios';

interface WPPost {
	id: number;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	link: string;
	_embedded: any;
}

const Homepage: React.FC = () => {
	const [blogs, setBlogs] = useState<WPPost[]>([]);
	const [steps, setSteps] = useState<WPPost[]>([]);
	const [features, setFeatures] = useState<WPPost[]>([]);

	useEffect(() => {
		loadBlogs();
		loadFeatures();
		loadSteps();
	}, []);

	const loadFeatures = async () => {
		const endpoint = 'https://thecompany.ph/wp-json/wp/v2/posts';
		const categoryId = 26; // Replace with the ID of the category you want to filter by
		const params = {
			categories: categoryId,
			orderby: 'date', // Order posts by date
			order: 'desc', // Sort posts in descending order
			_embed: true // Include embedded data, such as featured images
		};

		try {
			const response = await axios.get(endpoint, { params });
			setFeatures(response.data);
		} catch (error) {
			message.error(`Something wen't wrong in getting blog feed.`);
		}
	};

	const loadSteps = async () => {
		const endpoint = 'https://thecompany.ph/wp-json/wp/v2/posts';
		const categoryId = 25; // Replace with the ID of the category you want to filter by
		const params = {
			_fields: 'id,title,content',
			categories: categoryId,
			orderby: 'date',
			order: 'asc'
		};

		try {
			const response = await axios.get(endpoint, { params });
			setSteps(response.data);
		} catch (error) {
			message.error(`Something wen't wrong in getting blog feed.`);
		}
	};

	const loadBlogs = async () => {
		const endpoint = 'https://thecompany.ph/wp-json/wp/v2/posts';
		const categoryIds = [27, 9]; // Replace with the ID of the category you want to filter by
		const perPage = 3; // Replace with the number of posts you want to retrieve
		const params = {
			categories: categoryIds.join(','),
			orderby: 'date', // Order posts by date
			order: 'desc', // Sort posts in descending order
			_embed: true, // Include embedded data, such as featured images
			per_page: perPage // Set the number of posts per page
		};

		try {
			const response = await axios.get(endpoint, { params });
			setBlogs(response.data);
		} catch (error) {
			message.error(`Something wen't wrong in getting blog feed.`);
		}
	};

	const renderBlogs = () => {
		if (!Array.isArray(blogs) || !blogs.length) {
			return (
				<>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<Skeleton active />
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<Skeleton active />
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<Skeleton active />
					</Col>
				</>
			);
		}
		return blogs.map((data) => (
			<Col key={data.id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
				<BlogCard
					title={extractStringFromHTML(data.title.rendered)}
					previewImgUrl={data._embedded['wp:featuredmedia'][0].source_url}
					link={data.link}
				/>
			</Col>
		));
	};

	const renderSteps = () => {
		if (!Array.isArray(steps) || !steps.length) return;
		return steps.map((data) => (
			<Col key={data.id} xs={24} sm={24} md={8} lg={6} xl={4} xxl={4}>
				<StepCard
					title={extractStringFromHTML(data.title.rendered)}
					description={extractStringFromHTML(data.content.rendered)}
				/>
			</Col>
		));
	};

	const renderFeatures = () => {
		if (!Array.isArray(features) || !features.length) return;
		return features.map((data) => (
			<Col key={data.id} xs={24} sm={24} md={12} lg={8} xl={8} xxl={6}>
				<FeatureCard
					title={extractStringFromHTML(data.title.rendered)}
					previewImgUrl={data._embedded['wp:featuredmedia'][0].source_url}
					link={data.link}
				/>
			</Col>
		));
	};

	const extractStringFromHTML = (html: any) => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		const textContent = doc.body.textContent || '';

		// Replace any HTML entities like ampersands with their corresponding characters
		const decodedText = textContent.replace(/&amp;/g, '&');

		return decodedText.trim();
	};

	return (
		<Layout className="homepageContainer">
			<Section className="heroBannerSection">
				<div className="heroLogoContainer">
					<img src={logo} alt="the company cebu" />
				</div>
				<Row className="heroBannerContentRow">
					<Col lg={10} xl={8} xxl={7}>
						<Typography.Title className="heroBannerTitle">
							Expand faster in the <span className="underline">Philippines</span>
						</Typography.Title>
						<Typography.Paragraph className="heroBannerSubtxt">
							Hire and manage teams through us, without establishing your own local entity.
						</Typography.Paragraph>
					</Col>
				</Row>
			</Section>
			<Section className="jumbotronSection">
				<Row justify={'center'} className="jumbotronContentRow">
					<Col lg={18}>
						<Typography.Paragraph className="jumbotronSubtxt">
							You can focus on your team's productivity as we
						</Typography.Paragraph>
						<Typography.Title className="jumbotronHeadingTxt">
							Manage employee contracts, payroll & tax, labor compliance, global workspace solutions, &
							human resources for you
						</Typography.Title>
					</Col>
				</Row>
			</Section>
			<Section className="featureSection">
				<Row className="featureSectionRow" justify={'center'}>
					<Col lg={16} xl={16} xxl={16}>
						<Typography.Title className="featureSectionHeaderTxt">What We Offer</Typography.Title>
						<Typography.Paragraph className="featureSectionSubTxt">
							Focus on other revenue-generating activities as we offer you the following services.
						</Typography.Paragraph>
					</Col>
				</Row>
				<Row
					gutter={[
						{
							xs: 24,
							sm: 24,
							md: 24,
							lg: 32,
							xl: 32,
							xxl: 32
						},
						{
							xs: 24,
							sm: 24,
							md: 24,
							lg: 32,
							xl: 32,
							xxl: 32
						}
					]}
					justify={`center`}
					className="featureSectionContentRow"
				>
					{renderFeatures()}
				</Row>
			</Section>
			<Section className="stepSection">
				<Row align={'middle'} gutter={[32, 32]} className="stepSectionRow" justify={'center'}>
					<Col lg={7} xl={6} xxl={5}>
						<Typography.Title className="stepSectionHeaderTxt">The Process</Typography.Title>
					</Col>
					<Col lg={13} xl={18} xxl={13}>
						<Typography.Paragraph className="stepSectionSubTxt mb-none">
							This is the end-to-end process should you avail of the following services:
						</Typography.Paragraph>
						<Typography.Paragraph className="stepSectionSubTxt mb-none mt-none">
							(1) Recruitment & Sourcing, (2) Employer of Record, and (3) Workspace Solutions.
						</Typography.Paragraph>
						<Typography.Paragraph className="stepSectionSubTxt mt-none">
							We can create custom and cost-effective processs for your convenience.
						</Typography.Paragraph>
					</Col>
				</Row>
				<Row justify={'center'} gutter={[24, 24]}>
					{renderSteps()}
				</Row>
			</Section>
			<Section className="testimonialSection">
				<Row className="testimonialSectionRow" justify={'center'}>
					<Col className="testimonialLeft" lg={10} xl={10} xxl={10}>
						<Typography.Title className="testimonialSectionHeaderTxt">
							Our Clients' Journey
						</Typography.Title>
					</Col>
					<Col className="testimonialRight" lg={14} xl={14} xxl={14}>
						<img src={testimonialHero} alt="testimonial preview" className="testimonialImg" />
						<div className="testimonialRightContent">
							<Typography.Paragraph className="testimonialRightTxt">
								Read about our client's experience through these case studies.
							</Typography.Paragraph>
							<Button size="large" shape="round">
								READ OUR CASE STUDIES
							</Button>
						</div>
					</Col>
				</Row>
			</Section>
			<Section className="demoSection">
				<Row className="demoSectionRow" justify={'center'}>
					<Col lg={12} xl={12} xxl={12}>
						<img
							className="heroImage"
							src={`https://images.pexels.com/photos/3183202/pexels-photo-3183202.jpeg`}
							alt="hero banner"
						/>
					</Col>
					<Col lg={12} xl={12} xxl={12}>
						<div className="demoSectionContent">
							<div className="demoSectionTxtContent">
								<Typography.Title className="demoSectionHeaderTxt">What's next</Typography.Title>
								<Typography.Paragraph className="demoSectionSubTxt">
									Engaging a comprehensive EoR (Employer of Record) provider is instrumental in
									guiding you through the intricacies of international hiring. Their support extends
									beyond the initial hiring phase, encompassing valuable advice on optimal subsequent
									steps and the precise strategies for their implementation.
								</Typography.Paragraph>
								<Typography.Paragraph className="demoSectionSubTxt">
									Ready to simplify your international hiring process and ensure seamless expansion?
									Get in touch with us today and let’s embark on this journey together!
								</Typography.Paragraph>
							</div>
							<Link to="/contact">
								<Button size="large" shape="round">
									REQUEST A DEMO
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Section>
			<Section className="blogSection">
				<Row className="blogSectionRow" justify={'center'}>
					<Col lg={16} xl={16} xxl={16}>
						<Typography.Title className="blogSectionHeaderTxt">Blog</Typography.Title>
						{/* <Typography.Paragraph className="blogSectionSubTxt">
							Articles related to EOR will be here,
						</Typography.Paragraph> */}
					</Col>
				</Row>
				<Row gutter={[48, 48]} className="blogSectionContentRow">
					{renderBlogs()}
				</Row>
				{/* <Row justify={'center'}>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<Button size='large' type='primary'>See More</Button>
					</Col>
				</Row> */}
			</Section>
			<Section className="contactUsSection">
				<img className="heroImageContactUs" src={contactHero} alt="hero banner" />
				<Row className="heroContactBannerContentRow">
					<Col lg={10} xl={7} xxl={6}>
						<Typography.Title className="heroContactBannerTitle">
							Book a consultation today
						</Typography.Title>
						<Link to="/contact">
							<Button shape="round" className="callCta">
								Get in touch
							</Button>
						</Link>
					</Col>
				</Row>
			</Section>
			<FloatButton.BackTop type="primary" />
		</Layout>
	);
};

export default Homepage;
