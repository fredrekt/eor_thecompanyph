import React from 'react';
import './Homepage.scss';
import Layout from '../../layout/Layout';
import Section from '../../components/section/Section';
import { Typography } from 'antd';
import heroImage from '../../assets/images/hero.png'

const Homepage: React.FC = () => {
	return (
		<Layout className="homepageContainer">
			<Section className='heroBanner'>
                <img className='heroImage' src={heroImage} alt="hero banner" />
                <Typography.Title>
                    Expand faster in the <span className='underline'>philippines</span>
                </Typography.Title>
            </Section>
		</Layout>
	);
};

export default Homepage;
