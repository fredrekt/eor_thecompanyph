import React, { useCallback } from 'react';
import './BlogCard.scss';
import { Button, Typography } from 'antd';
import ReactGA from 'react-ga4';

interface BlogCardProps {
	title: string;
	previewImgUrl: string;
	link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, previewImgUrl, link }) => {
	const onNavigate = useCallback(() => {
		if (!title || !link) return;
		ReactGA.event({
			category: 'Blog',
			action: 'Visit',
			label: title
		});
		window.open(link, '_blank', 'noopener,noreferrer');
	}, [link, title]);
	return (
		<div className="blogCard">
			<div className="blogCardPreviewImgContainer">
				<img src={previewImgUrl} alt="blog preview" />
			</div>
			<div className="blogCardContent">
				<Typography.Title className="blogCardTitle" level={4}>
					{title}
				</Typography.Title>
				<Button onClick={onNavigate} type="primary" shape="round" className="blogCardCta">
					Learn more
				</Button>
			</div>
		</div>
	);
};

export default BlogCard;
