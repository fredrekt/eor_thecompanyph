import React from 'react';
import './Layout.scss';
import { Layout as AntdLayout } from 'antd';
import { Content } from 'antd/es/layout/layout';

interface LayoutProps {
	className: string;
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
	return (
		<AntdLayout className={`layoutContainer ${className}`}>
			<Content>{children}</Content>
		</AntdLayout>
	);
};

export default Layout;
