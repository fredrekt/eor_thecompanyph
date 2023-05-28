import React from 'react';
import './FeatureCard.scss';
import { Button, Card, Typography } from 'antd';

interface FeatureCardProps {
	title: string;
	link: string;
	previewImgUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, previewImgUrl, link }) => {
	return (
		<Card
			className="featureCard"
			hoverable
			cover={
				<img
					className="featureCardCoverImg"
					alt="preview"
					src={previewImgUrl ? previewImgUrl : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
				/>
			}
		>
			<div className="featureCardContent">
				<Typography.Title className="featureCardTitle" level={4}>
					{title}
				</Typography.Title>
				<Button type="primary" shape="round" className="featureCardCta" href={link}>
					Learn more
				</Button>
			</div>
		</Card>
	);
};

export default FeatureCard;
