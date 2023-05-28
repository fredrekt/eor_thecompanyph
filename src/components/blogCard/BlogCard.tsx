import React from 'react';
import './BlogCard.scss';
import { Button, Typography } from 'antd';

interface BlogCardProps {
	title: string;
	previewImgUrl: string;
	link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, previewImgUrl, link }) => {
	return (
		<div className="blogCard">
			<div className="blogCardPreviewImgContainer">
				<img src={previewImgUrl} alt="blog preview" />
			</div>
			<div className="blogCardContent">
				<Typography.Title className="blogCardTitle" level={4}>
					{title}
				</Typography.Title>
				<Button type="primary" shape="round" className="blogCardCta" href={link}>
					Learn more
				</Button>
			</div>
		</div>
	);
};

export default BlogCard;
