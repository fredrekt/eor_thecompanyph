import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ReactGA from 'react-ga4';
import ReactPixel from 'react-facebook-pixel';

ReactGA.initialize(process.env.REACT_APP_GA4 || '');
ReactPixel.init(process.env.REACT_APP_FB_PIXEL || '');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#3F4726',
					fontFamily: 'CodecPro'
				}
			}}
		>
			<Router>
				<App />
			</Router>
		</ConfigProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
