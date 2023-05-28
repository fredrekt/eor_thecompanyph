import React from 'react';
import './Homepage.scss';
import Layout from '../../layout/Layout';
import Section from '../../components/section/Section';
import { Button, Col, Row, Typography } from 'antd';
import heroImageOverlay from '../../assets/images/hero_with_overlay.webp';
import logo from '../../assets/images/black_logo.png';
import BlogCard from '../../components/blogCard/BlogCard';
import FeatureCard from '../../components/featureCard/FeatureCard';
import StepCard from '../../components/stepCard/StepCard';

const Homepage: React.FC = () => {
	return (
		<Layout className="homepageContainer">
			<Section className="heroBannerSection">
				<img className="heroImage" src={heroImageOverlay} alt="hero banner" />
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
				<Row gutter={[48, 48]} className="featureSectionContentRow">
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<FeatureCard
							title="EOR vs Contractor Management"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<FeatureCard
							title="EOR vs Contractor Management"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<FeatureCard
							title="EOR vs Contractor Management"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
				</Row>
			</Section>
			<Section className="stepSection">
				<Row gutter={[32, 32]} className="stepSectionRow" justify={'center'}>
					<Col lg={7} xl={6} xxl={5}>
						<Typography.Title className="stepSectionHeaderTxt">The Process</Typography.Title>
					</Col>
					<Col lg={13} xl={13} xxl={13}>
						<Typography.Paragraph className="stepSectionSubTxt">
							Details regarding the process of the relationship here; highlight experience
						</Typography.Paragraph>
					</Col>
				</Row>
                <Row justify={'center'} gutter={[24, 24]}>
                    <Col lg={4} xl={4} xxl={4}>
                        <StepCard
                            title='Initial Consult'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis fermentum tincidunt.'
                        />
                    </Col>
                    <Col lg={4} xl={4} xxl={4}>
                        <StepCard
                            title='Sourcing & Initial Interview'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis fermentum tincidunt.'
                        />
                    </Col>
                    <Col lg={4} xl={4} xxl={4}>
                        <StepCard
                            title='Contract Signing'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis fermentum tincidunt.'
                        />
                    </Col>
                    <Col lg={4} xl={4} xxl={4}>
                        <StepCard
                            title='Employee Onboard & Set-up'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis fermentum tincidunt.'
                        />
                    </Col>
                    <Col lg={4} xl={4} xxl={4}>
                        <StepCard
                            title='Continuous Support & Partnership'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis fermentum tincidunt.'
                        />
                    </Col>
                </Row>
			</Section>
			<Section className="testimonialSection">
				<Row className="testimonialSectionRow" justify={'center'}>
					<Col className='testimonialLeft' lg={10} xl={10} xxl={10}>
						<Typography.Title className="testimonialSectionHeaderTxt">
							Our Clients' Journey
						</Typography.Title>
					</Col>
					<Col className='testimonialRight' lg={14} xl={14} xxl={14}>
                        <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" alt="testimonial preview" className="testimonialImg" />
						<div className="testimonialRightContent">
                            <Typography.Paragraph className='testimonialRightTxt'>
                                Feature case studies of our clients here; highlight cost-effectivity and ease of starting
                            </Typography.Paragraph>
                            <Button size="large" shape="round">
                                READ OUR CASE STUDIES
                            </Button>
                        </div>
					</Col>
				</Row>
			</Section>
			<Section className="demoSection">
				<Row className="demoSectionRow">
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
									Focus on other revenue-generating activities as we offer you the following services.
								</Typography.Paragraph>
							</div>
							<Button size="large" shape="round">
								REQUEST A DEMO
							</Button>
						</div>
					</Col>
				</Row>
			</Section>
			<Section className="blogSection">
				<Row className="blogSectionRow" justify={'center'}>
					<Col lg={16} xl={16} xxl={16}>
						<Typography.Title className="blogSectionHeaderTxt">Blog</Typography.Title>
						<Typography.Paragraph className="blogSectionSubTxt">
							Articles related to EOR will be here,
						</Typography.Paragraph>
					</Col>
				</Row>
				<Row gutter={[48, 48]} className="blogSectionContentRow">
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="Cost Calculator"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="EOR vs Contractor Management"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="Labor Law in the Philippines"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="Incorporating in the Philippines"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="PH Recruitment Strategies"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
						<BlogCard
							title="Labor Law in the Philippines"
							previewImgUrl={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
							link={'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg'}
						/>
					</Col>
				</Row>
			</Section>
			<Section className="contactUsSection">
				<img
					className="heroImageContactUs"
					src={`https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg`}
					alt="hero banner"
				/>
				<Row className="heroContactBannerContentRow">
					<Col lg={10} xl={7} xxl={6}>
						<Typography.Title className="heroContactBannerTitle">
							Book a consultation today
						</Typography.Title>
						<Button shape="round" className="callCta" href="callto:+12345678910">
							+123-456-7890
						</Button>
					</Col>
				</Row>
			</Section>
		</Layout>
	);
};

export default Homepage;
