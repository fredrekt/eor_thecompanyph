import React from 'react';
import './StepCard.scss';
import { Card, Typography } from 'antd';

interface StepCardProps {
	title: string;
	description: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, description }) => {
	return (
		<Card className="stepCard">
			<Typography.Title level={4} className="stepCardTitle">
				{title}
			</Typography.Title>
			<Typography.Paragraph className="stepCardDesc">
				{description ? description : 'Details here'}
			</Typography.Paragraph>
		</Card>
	);
};

export default StepCard;
