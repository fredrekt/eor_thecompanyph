import React from 'react';
import './Homepage.scss';
import Layout from '../../layout/Layout';
import Section from '../../components/section/Section';
import { Typography } from 'antd';
import heroImage from '../../assets/images/hero.png'

const Homepage: React.FC = () => {
	return (
		<Layout className="homepageContainer">
			<Section className='heroBannerSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Expand faster in the <span className='underline'>philippines</span>
                </Typography.Title>
            </Section>
            <Section className='jumbotronSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Expand faster in the <span className='underline'>philippines</span>
                </Typography.Title>
            </Section>
            <Section className='featureSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    What We Offer
                </Typography.Title>
            </Section>
            <Section className='stepSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    The Process
                </Typography.Title>
            </Section>
            <Section className='testimonialSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Our Clients' Journey
                </Typography.Title>
            </Section>
            <Section className='demoSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    What's next
                </Typography.Title>
            </Section>
            <Section className='blogSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Blog
                </Typography.Title>
            </Section>
            <Section className='contactUsSection'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Book a consultation today
                </Typography.Title>
            </Section>
		</Layout>
	);
};

export default Homepage;
